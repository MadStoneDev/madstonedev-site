import type { Metadata } from "next";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for the madstone.dev website. Each app has its own policy, linked from its page.",
  alternates: { canonical: "/privacy" },
};

const NAV: HeaderLink[] = [
  { label: "Apps", href: "/#apps" },
  { label: "Games", href: "/#games" },
  { label: "Web apps", href: "/#web" },
  { label: "About", href: "/about" },
  { label: "Get in touch", href: "/#contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader links={NAV} />

      <main className="site-container max-w-[760px] py-20">
        <h1 className="m-0 font-display text-[clamp(40px,6vw,64px)] font-bold leading-[0.98] tracking-[-0.035em]">
          Privacy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: 9 November 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-lg leading-[1.75] text-body">
          <p className="m-0">
            This covers the madstone.dev website. Each app I make has its own
            privacy policy, linked from the app&apos;s page and set as the
            app&apos;s policy on the App Store and Google Play.
          </p>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">The contact form</h2>
            <p className="m-0">
              When you send a message through the contact form, your name, email
              and message are sent to me by email so I can read and reply. That
              goes through Resend, the service I use to send email. I only use
              your email to reply.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Launch sign-ups</h2>
            <p className="m-0">
              If you sign up to be told when an app is out, I keep your email so
              I can send you that one message. I don&apos;t use it for anything
              else, and you can ask me to remove it at any time.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Analytics</h2>
            <p className="m-0">
              This website uses Google Analytics to see roughly how many people
              visit and which pages they read. I don&apos;t sell this, and I
              don&apos;t use it to identify you.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Contact</h2>
            <p className="m-0">
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:hello@madstone.dev"
                className="text-accent underline underline-offset-2"
              >
                hello@madstone.dev
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
