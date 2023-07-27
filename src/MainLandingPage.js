import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Layout from "components/layouts/Standard.js";
import Hero from "components/hero/BackgroundAsImage.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import Footer from "components/footers/MiniCenteredFooter.js";
// import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import { Helmet } from "react-helmet-async";

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-BCL5N11Y48");
  }, []);

  return (
    <AnimationRevealPage disabled>
      <Helmet prioritizeSeoTags>
        <title>
          MadStoneDev - Perfecting the Method, Embracing the Madness
        </title>
        <meta name="description" content="" />
      </Helmet>

      <Layout landing={true}>
        <Hero />
        {/*<MainFeature />*/}
        {/*<Features />*/}
        {/*<MainFeature2 />*/}
        {/*<Portfolio />*/}
        {/*<Testimonial*/}
        {/*  subheading="Testimonials"*/}
        {/*  heading={*/}
        {/*    <>*/}
        {/*      Our Clients <span tw="text-primary-500">Love Us.</span>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*  description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."*/}
        {/*  testimonials={[*/}
        {/*    {*/}
        {/*      imageSrc:*/}
        {/*        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",*/}
        {/*      profileImageSrc:*/}
        {/*        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",*/}
        {/*      quote:*/}
        {/*        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",*/}
        {/*      customerName: "Charlotte Hale",*/}
        {/*      customerTitle: "CEO, Tesla Inc.",*/}
        {/*    },*/}
        {/*    {*/}
        {/*      imageSrc:*/}
        {/*        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",*/}
        {/*      profileImageSrc:*/}
        {/*        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",*/}
        {/*      quote:*/}
        {/*        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",*/}
        {/*      customerName: "Adam Cuppy",*/}
        {/*      customerTitle: "Founder, Nestle",*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  textOnLeft={true}*/}
        {/*/>*/}
        {/*<FAQ*/}
        {/*  imageSrc={customerSupportIllustrationSrc}*/}
        {/*  imageContain={true}*/}
        {/*  imageShadow={false}*/}
        {/*  subheading="FAQs"*/}
        {/*  heading={*/}
        {/*    <>*/}
        {/*      Do you have <span tw="text-primary-500">Questions ?</span>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Blog />*/}
        <ContactUsForm />
      </Layout>
    </AnimationRevealPage>
  );
};
