import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { clientKey, rateLimit, EMAIL_RE } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "MadStoneDev <hello@notifications.madstone.dev>";
const TO = "hello@madstone.dev";

// Products that have a "notify me when it's out" sign-up. Kept separate per
// product via the subject line and body tag.
const PRODUCT_LABELS: Record<string, string> = {
  justsent: "JustSent (mobile app)",
  justnoted: "JustNoted (mobile app)",
  "bustin-out": "Bustin' Out",
};

export async function POST(request: NextRequest) {
  try {
    if (!rateLimit(clientKey(request, "notify"))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { email, product, website } = body ?? {};

    // Honeypot
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "That email address doesn't look right." },
        { status: 400 },
      );
    }

    const label = PRODUCT_LABELS[product as string];
    if (!label) {
      return NextResponse.json(
        { error: "Unknown product." },
        { status: 400 },
      );
    }

    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Launch sign-up: ${label}`,
      text: `New "notify me" sign-up.\n\nProduct: ${label}\nProduct key: ${product}\nEmail: ${email}\n`,
    });

    if (result.error) {
      console.error("Notify sign-up error:", result.error);
      return NextResponse.json(
        { error: "Couldn't save your sign-up. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Notify route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
