import type { NextRequest } from "next/server";

/*
  Simple in-memory rate limiting and a honeypot check.

  In-memory is fine for a single small instance. If this site ever runs on
  more than one instance, move the counter to Upstash Redis (Oceania region).
*/

const buckets = new Map<string, { count: number; resetTime: number }>();

export function clientKey(request: NextRequest, scope = "default"): string {
  const ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  return `${scope}:${ip}`;
}

export function rateLimit(
  key: string,
  maxRequests = 3,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const record = buckets.get(key);

  if (!record || now > record.resetTime) {
    buckets.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
