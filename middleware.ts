// Create this file: middleware.ts (at the root of your project, same level as app/)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Map of redirects - /home goes to /
const REDIRECTS: Record<string, string> = {
  "/home": "/",
};

// Paths commonly probed by bots that we want to block
const BLOCKED_PATHS = [
  "/wp-admin",
  "/wp-login",
  "/admin",
  "/phpmyadmin",
  "/.env",
  "/.git",
  "/config",
  "/xmlrpc.php",
  "/wp-content",
  "/.well-known",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle redirects (e.g., /home -> /)
  if (REDIRECTS[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = REDIRECTS[pathname];
    console.log(`[REDIRECT] ${pathname} -> ${REDIRECTS[pathname]}`);
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Block known malicious bot paths (403 Forbidden)
  if (BLOCKED_PATHS.some((blocked) => pathname.startsWith(blocked))) {
    console.log(`[BLOCKED] Suspicious request to: ${pathname}`);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Log unexpected 404s for debugging
  const isStaticAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf|eot)$/);

  const isKnownRoute =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname.startsWith("/_next");

  if (!isKnownRoute && !isStaticAsset) {
    console.log(`[404] Unknown path requested: ${pathname}`, {
      userAgent: request.headers.get("user-agent")?.substring(0, 80),
      referer: request.headers.get("referer"),
      timestamp: new Date().toISOString(),
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and images
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
