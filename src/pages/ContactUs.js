import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Layout from "components/layouts/Standard.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import { Helmet } from "react-helmet-async";

export default () => {
  return (
    <AnimationRevealPage>
      <Helmet prioritizeSeoTags>
        <title>Madstone.Dev - Contact Us</title>
        <meta name="description" content="" />
      </Helmet>

      <Layout>
        <ContactUsForm />
      </Layout>
    </AnimationRevealPage>
  );
};
