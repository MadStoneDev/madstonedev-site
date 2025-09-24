import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { NotifyTeam } from "@/components/email templates/notify-team";
import { NotifyUser } from "@/components/email templates/notify-user";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, project, budget, message } = body;

    if (!name || !email || !project || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send notification to your team
    const teamNotification = await resend.emails.send({
      from: "MadStoneDev <hello@notifications.madstone.dev>",
      to: ["hello@notifications.madstone.dev"],
      subject: "🧪 New Contact - Madstone Dev",
      react: NotifyTeam({
        name,
        email,
        company,
        project,
        budget,
        message,
      }),
    });

    // Send confirmation to user
    const userConfirmation = await resend.emails.send({
      from: "MadStoneDev <no-reply@notifications.madstone.dev>",
      to: [email],
      subject: "I received your message - MadStoneDev",
      react: NotifyUser({
        name,
      }),
    });

    // Check for errors
    if (teamNotification.error) {
      console.error("Team notification error:", teamNotification.error);
      return Response.json(
        { error: "Failed to send team notification" },
        { status: 500 },
      );
    }

    if (userConfirmation.error) {
      console.error("User confirmation error:", userConfirmation.error);
      // Don't fail the whole request if user confirmation fails
    }

    return Response.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        teamEmailId: teamNotification.data?.id,
        userEmailId: userConfirmation.data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
