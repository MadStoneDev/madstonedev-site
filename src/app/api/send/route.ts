import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { NotifyTeam } from "@/components/email templates/notify-team";
import { NotifyUser } from "@/components/email templates/notify-user";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  // Use IP address or a combination of factors
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for") ||
    "unknown"
  );
}

function checkRateLimit(
  key: string,
  maxRequests = 3,
  windowMs = 60000,
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, company, project, budget, message } = body;

    // Validation
    if (!name || !email || !project || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
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
      return NextResponse.json(
        { error: "Failed to send team notification" },
        { status: 500 },
      );
    }

    if (userConfirmation.error) {
      console.error("User confirmation error:", userConfirmation.error);
      // Don't fail the whole request if user confirmation fails
    }

    return NextResponse.json(
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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
