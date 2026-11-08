import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Azimuth Compass — Privacy policy",
  description:
    "Privacy policy for Azimuth Compass. No analytics and no tracking. The compass works offline; an account is optional and only used to sync your saved waypoints.",
  alternates: { canonical: "/azimuth/privacy" },
};

const NAV: HeaderLink[] = [
  { label: "Features", href: "/azimuth#features" },
  { label: "Support", href: "/azimuth#support" },
  { label: "All apps", href: "/#apps" },
];

const SECTIONS: { heading: string; body: ReactNode }[] = [
  {
    heading: "What I collect",
    body: "The compass collects nothing. Azimuth Compass has no analytics, no advertising and no third-party tracking, and what you do with the compass isn't sent to me or to anyone else. Azimuth is adding an optional account so you can save waypoints and use them across your devices. You don't need an account to use the compass. If you create one, the details you use to sign in and your saved waypoints are stored on my own server so they can sync, and nothing else is collected.",
  },
  {
    heading: "Camera",
    body: "The app uses the camera only to show the live view for prismatic sighting, so you can line up a landmark and read its bearing. The camera view is shown on screen in the moment. It is never recorded, saved or sent anywhere.",
  },
  {
    heading: "Location",
    body: "With your permission, Azimuth can use your location only to work out the local magnetic declination, so it can show true north instead of magnetic north. That correction is worked out on your device, using the phone's own compass and GPS, and no network request is made. If you don't allow location, the app still works and shows magnetic bearings.",
  },
  {
    heading: "Motion sensors",
    body: "The app reads the magnetometer and accelerometer to work out your heading. These readings stay on the device and are not stored or shared.",
  },
  {
    heading: "Works offline",
    body: "The compass works without a signal and makes no network requests, including with true north on, so using it sends nothing. Only the optional account features, like saving and syncing waypoints when you're signed in, use the network.",
  },
  {
    heading: "Children",
    body: "The compass doesn't collect data from anyone. Accounts aren't aimed at children, and I don't knowingly collect data from children.",
  },
  {
    heading: "Changes to this policy",
    body: "If this policy changes, the updated version will be posted on this page with a new date.",
  },
];

export default function AzimuthPrivacyPage() {
  return (
    <>
      <SiteHeader links={NAV} />

      <main className="site-container max-w-[760px] py-20">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
            Azimuth Compass
          </span>
          <h1 className="m-0 font-display text-[clamp(40px,6vw,64px)] font-bold leading-[0.98] tracking-[-0.035em]">
            Privacy policy
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: 9 November 2026</p>
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <p className="m-0 text-lg leading-[1.7] text-body">
            Azimuth Compass is a compass and prismatic-sighting app. This policy
            explains what the app does and doesn&apos;t do with your
            information. In short: the compass doesn&apos;t collect, store or
            share personal data, and using an account is optional.
          </p>

          <div className="mt-10 flex flex-col gap-9">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <h2 className="m-0 mb-2 text-xl">{s.heading}</h2>
                <p className="m-0 leading-[1.7] text-body">{s.body}</p>
              </div>
            ))}

            <div>
              <h2 className="m-0 mb-2 text-xl">Contact</h2>
              <p className="m-0 leading-[1.7] text-body">
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:hello@madstone.dev"
                  className="text-accent underline underline-offset-2"
                >
                  hello@madstone.dev
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/azimuth"
            className="font-semibold text-ink underline underline-offset-2 hover:text-accent"
          >
            ← Back to Azimuth Compass
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
