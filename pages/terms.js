import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { getPosts } from '../utils/mdx-utils';

export default function Terms({ globalData }) {
  return (
    <Layout>
      <SEO title={'Terms of Service'} description={''} />
      <Header name={globalData.name} />
      <main className="w-full border-b-2">
        <h1 className={'pb-10 text-2xl font-bold'}>
          Terms of Service for OMDESTI
        </h1>

        <p className="pb-5 font-light">Last updated: July 17, 2023</p>

        <h2 className={'pb-3 font-bold'}>1. Acceptance of Terms</h2>

        <p className="pb-5 font-light">
          By using our services, you agree to be bound by these Terms. If you
          don’t agree to these Terms, do not use the services. We may modify
          these Terms at any time, and if you keep using the services, you
          accept any changes to the Terms.
        </p>

        <h2 className={'pb-3 font-bold'}>2. User Accounts</h2>

        <p className="pb-5 font-light">
          In the future, we may allow users to register for an account. You are
          responsible for all activity that occurs via your account. Please
          notify Customer Support immediately if you become aware of any
          unauthorized use of your account.
        </p>

        <h2 className={'pb-3 font-bold'}>3. Use of the Service</h2>

        <p className="pb-5 font-light">
          OMDESTI provides a variety of services for online gameplay and mobile
          game software development. You agree to use our services for lawful
          purposes and not for any illegal, obscene, abusive, or otherwise
          objectionable conduct.
        </p>

        <h2 className={'pb-3 font-bold'}>4. Payments and Subscriptions</h2>

        <p className="pb-5 font-light">
          Payments related to our apps and games are processed by Google Play
          and the Apple App Store. We do not process or store your financial
          information directly.
        </p>

        <h2 className={'pb-3 font-bold'}>5. Intellectual Property</h2>

        <p className="pb-5 font-light">
          All intellectual property rights in our services, including the
          website and any games, apps, or other content provided on the website,
          are owned by us and our licensors.
        </p>

        <h2 className={'pb-3 font-bold'}>6. Contact</h2>

        <p className="pb-5 font-light">
          If you have any questions about these Terms, please contact us at:{' '}
          <a href="https://omdesti.dev/contact">https://omdesti.dev/contact</a>.
        </p>

        <p className={'pb-5 italic font-bold'}>Effective: July 17, 2023</p>
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
