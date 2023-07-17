import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { getPosts } from '../utils/mdx-utils';

export default function Privacy({ globalData }) {
  return (
    <Layout>
      <SEO title={'Privacy Policy'} description={''} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className={'pb-10 text-2xl font-bold'}>
          Privacy Policy for OMDESTI
        </h1>

        <p className={'pb-5 italic font-bold'}>Last updated: July 17, 2023</p>

        <p className="pb-5 font-light">
          Welcome to OMDESTI! Your privacy is important to us and we are
          committed to protecting your personal data. This privacy policy will
          inform you about how we handle your personal data, your privacy
          rights, and how the law protects you. Please take a moment to read it
          carefully.
        </p>

        <h2 className={'pb-3 font-bold'}>1. Who We Are</h2>

        <p className="pb-5 font-light">
          OMDESTI is a game development company based in Australia, currently
          operating the website{' '}
          <a href="https://omdesti.dev">https://omdesti.dev</a>.
        </p>

        <h2 className={'pb-3 font-bold'}>2. Information We Collect</h2>

        <p className="pb-5 font-light">
          At present, we do not collect any personal data from users. However,
          in future updates, we will allow users to register and log in using
          their Google, Facebook, Discord, Twitch, or email credentials. The
          handling of this data will be managed by Clerk.com, a third-party
          service. Please review their privacy policy for further details.
        </p>

        <h2 className={'pb-3 font-bold'}>3. How We Use Your Information</h2>

        <p className="pb-5 font-light">
          When you register, the personal information we collect will be used to
          provide and improve our services, including to save your data online
          so you don't lose your progress in our games.
        </p>

        <h2 className={'pb-3 font-bold'}>4. How We Share Your Information</h2>

        <p className="pb-5 font-light">
          We do not share your personal information with third parties except in
          circumstances where it is necessary for us to provide our services or
          as required by law.
        </p>

        <h2 className={'pb-3 font-bold'}>5. Payments and Subscriptions</h2>

        <p className="pb-5 font-light">
          All payments and subscriptions related to our apps or games are
          handled by Google Play and the Apple App Store. We do not process or
          store your financial information directly. Please refer to the privacy
          policies of Google Play and the Apple App Store for more information.
        </p>

        <h2 className={'pb-3 font-bold'}>6. Security</h2>

        <p className="pb-5 font-light">
          We prioritize the security of your personal information and use
          various technical and organizational measures to secure your data.
          However, please note that no system
        </p>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
