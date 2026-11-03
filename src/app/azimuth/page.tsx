import Link from "next/link";
import { Camera, Compass, Navigation, ShieldCheck, WifiOff } from "lucide-react";

import MainNavigation from "@/components/sections/main-navigation";
import SharedFooter from "@/components/shared/footer";

export const metadata = {
  title: "Azimuth Compass — Precise, Private Compass | MadStoneDev",
  description:
    "Azimuth Compass is a compass and prismatic-sighting app. Sight a landmark, read its exact bearing, switch between true and magnetic north. Works fully offline, collects no data.",
};

// TODO: replace APP_STORE_URL with the real App Store listing once you have it.
const APP_STORE_URL = "https://apps.apple.com/app/azimuth-compass/id000000000";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.madstonedev.azimuthcompass";

const FEATURES: {
  icon: typeof Compass;
  title: string;
  body: string;
}[] = [
  {
    icon: Camera,
    title: "Prismatic sighting",
    body: "Use the live camera view to line up a landmark and read its exact bearing, just like a real prismatic compass.",
  },
  {
    icon: Navigation,
    title: "True or magnetic north",
    body: "Switch between true and magnetic north. With your permission it looks up the local magnetic declination so your bearings are accurate.",
  },
  {
    icon: WifiOff,
    title: "Works fully offline",
    body: "No signal, no problem. Everything runs on-device, so Azimuth works anywhere you do — deep in the field or off the grid.",
  },
  {
    icon: ShieldCheck,
    title: "Completely private",
    body: "No accounts, no analytics, no tracking. Nothing you do ever leaves your device. Your camera, location and heading stay with you.",
  },
];

export default function AzimuthPage() {
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
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-8 relative inline-block group">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-2xl rounded-full" />
              <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                <Compass
                  size={72}
                  strokeWidth={1.25}
                  className="text-primary"
                />
              </div>
            </div>

            <p className="font-display text-primary tracking-widest mb-4">
              AZIMUTH COMPASS
            </p>
            <h1 className="text-4xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                FIND YOUR BEARING
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-lg text-neutral-300 leading-relaxed">
              A precise compass with prismatic sighting, built for the field.
              Line up a landmark through the live camera, read its exact
              bearing, and trust it anywhere — Azimuth works fully offline and
              keeps everything on your device.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-normal opacity-70">
                    Download on the
                  </span>
                  <span className="block text-base">App Store</span>
                </span>
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="#00d2ff"
                    d="M47.6 44.3C41.5 50.7 38 60.6 38 73.5v365c0 12.9 3.5 22.8 9.6 29.2L49.7 470l204.4-204.4v-4.8L47.6 44.3z"
                  />
                  <path
                    fill="#00f076"
                    d="M322.3 333.6l-68.2-68.2v-4.8l68.2-68.2 1.5.9 80.8 45.9c23.1 13.1 23.1 34.6 0 47.7l-80.8 45.9-1.5.8z"
                  />
                  <path
                    fill="#ff3a44"
                    d="M323.8 332.8L254.1 263 47.6 469.6c7.6 8.1 20.2 9.1 34.4 1l241.8-137.8z"
                  />
                  <path
                    fill="#ffc900"
                    d="M323.8 193.2L82 55.4C67.8 47.3 55.2 48.3 47.6 56.4L254.1 263l69.7-69.8z"
                  />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-normal opacity-70">
                    Get it on
                  </span>
                  <span className="block text-base">Google Play</span>
                </span>
              </a>
            </div>
            <p className="text-neutral-600 text-xs mt-4">
              Free · No accounts · No ads
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-50" />
                <div className="relative">
                  <f.icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-primary mb-4"
                  />
                  <h2 className="text-xl font-bold text-white mb-3">
                    {f.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy callout */}
          <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-50" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-3">
                Your data never leaves your device
              </h2>
              <p className="text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-6">
                Azimuth Compass has no accounts, no analytics, and no
                third-party tracking. The camera, your location and the sensor
                readings are all used on-device, in the moment, and never
                stored or sent anywhere.
              </p>
              <Link
                href="/azimuth/privacy"
                className="font-display text-sm text-white hover:text-primary transition-colors"
              >
                READ THE PRIVACY POLICY →
              </Link>
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
      <SharedFooter />
    </div>
  );
}
