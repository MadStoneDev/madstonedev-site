import type { ReactNode } from "react";
import Link from "next/link";
import MainNavigation from "@/components/sections/main-navigation";

export const metadata = {
  title: "Azimuth Compass — Privacy Policy | MadStoneDev",
  description:
    "Privacy policy for Azimuth Compass. No accounts, no analytics, no data collection. Camera and location are used only on your device.",
};

const SECTIONS: { heading: string; body: ReactNode }[] = [
  {
    heading: "Data we collect",
    body: "None. Azimuth Compass has no accounts, no analytics, no advertising, and no third-party tracking. Nothing you do in the app is sent to us or to anyone else. The app works fully offline.",
  },
  {
    heading: "Camera",
    body: "The app uses the camera only to show the live view for prismatic sighting, so you can line up a landmark and read its bearing. The camera feed is shown on screen in real time. It is never recorded, saved, or transmitted.",
  },
  {
    heading: "Location",
    body: "The app can use your location, with your permission, only to look up the local magnetic declination so it can show true north instead of magnetic north. Your location is used on the device at that moment and is never stored or transmitted. If you deny location access, the app still works and shows magnetic bearings.",
  },
  {
    heading: "Motion sensors",
    body: "The app reads the device magnetometer and accelerometer to calculate your heading. These readings stay on the device and are not stored or shared.",
  },
  {
    heading: "Children",
    body: "The app does not collect data from anyone, including children.",
  },
  {
    heading: "Changes to this policy",
    body: "If this policy changes, the updated version will be posted on this page with a new date.",
  },
  {
    heading: "Contact",
    body: (
      <>
        Questions about this policy can be sent to{" "}
        <a
          href="mailto:hello@madstone.dev"
          className="text-primary hover:text-white transition-colors"
        >
          hello@madstone.dev
        </a>
        .
      </>
    ),
  },
];

export default function AzimuthPrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,24,99,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,24,99,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Navigation */}
      <MainNavigation />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-14">
            <p className="font-display text-primary tracking-widest mb-4">
              AZIMUTH COMPASS
            </p>
            <h1 className="text-4xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                PRIVACY POLICY
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            <p className="text-neutral-500 text-sm mt-6">
              Last updated: 6 September 2026
            </p>
          </div>

          {/* Card */}
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-50" />

            <div className="relative space-y-10">
              <p className="text-lg text-neutral-200 leading-relaxed">
                Azimuth Compass is a compass and prismatic-sighting app. This
                policy explains what the app does and does not do with your
                information. In short: the app does not collect, store, or share
                any personal data.
              </p>

              {SECTIONS.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-xl font-bold text-white mb-3">
                    {s.heading}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="font-display text-sm text-white hover:text-primary transition-colors"
            >
              ← BACK TO MADSTONEDEV
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center text-xs text-neutral-500 border-t border-white/10">
        <p>
          MadStoneDev sometimes operates as part of{" "}
          <a
            href="https://ravenci.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors"
          >
            RAVENCI
          </a>
        </p>
      </footer>
    </div>
  );
}
