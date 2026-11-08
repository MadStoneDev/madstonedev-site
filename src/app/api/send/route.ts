import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { NotifyTeam } from "@/components/email templates/notify-team";
import { NotifyUser } from "@/components/email templates/notify-user";
import { clientKey, rateLimit, EMAIL_RE } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "MadStoneDev <hello@notifications.madstone.dev>";
const TO = "hello@madstone.dev";

export async function POST(request: NextRequest) {
  try {
    if (!rateLimit(clientKey(request, "contact"))) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, topic, message, website } = body ?? {};

    // Honeypot: a bot filled the hidden field. Pretend all is well.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email and a message." },
        { status: 400 },
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "That email address doesn't look right." },
        { status: 400 },
      );
    }

    const topicLabel = typeof topic === "string" && topic ? topic : "Something else";

    const teamNotification = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Contact form: ${topicLabel}`,
      react: NotifyTeam({ name, email, topic: topicLabel, message }),
    });

    if (teamNotification.error) {
      console.error("Contact: team email error:", teamNotification.error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again." },
        { status: 500 },
      );
    }

    // Confirmation to the sender. Don't fail the request if this one errors.
    const userConfirmation = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: "I got your message — MadStoneDev",
      react: NotifyUser({ name }),
    });
    if (userConfirmation.error) {
      console.error("Contact: confirmation email error:", userConfirmation.error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
