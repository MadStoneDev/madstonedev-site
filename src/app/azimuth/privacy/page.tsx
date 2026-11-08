import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Azimuth Compass — Privacy policy",
  description:
    "Privacy policy for Azimuth Compass. No accounts, no analytics, no tracking. The camera and your location are used on the device.",
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
    body: "Nothing. Azimuth Compass has no accounts, no analytics, no advertising and no third-party tracking. What you do in the app isn't sent to me or to anyone else.",
  },
  {
    heading: "Camera",
    body: "The app uses the camera only to show the live view for prismatic sighting, so you can line up a landmark and read its bearing. The camera view is shown on screen in the moment. It is never recorded, saved or sent anywhere.",
  },
  {
    heading: "Location",
    body: "With your permission, Azimuth can use your location only to work out the local magnetic declination, so it can show true north instead of magnetic north. [To confirm: declination is worked out on the device from a built-in model, with no network request. If it is ever fetched online, this section and the offline note below need to say so.] If you don't allow location, the app still works and shows magnetic bearings.",
  },
  {
    heading: "Motion sensors",
    body: "The app reads the magnetometer and accelerometer to work out your heading. These readings stay on the device and are not stored or shared.",
  },
  {
    heading: "Works offline",
    body: "Azimuth uses your phone's sensors and is built to work without a signal. [To confirm this holds in every mode, including true north, i.e. the app makes no network request for declination.]",
  },
  {
    heading: "Children",
    body: "The app doesn't collect data from anyone, including children.",
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
            information. In short: it doesn&apos;t collect, store or share any
            personal data.
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
