import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Layout from "components/layouts/Standard.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Layout>
        <ContactUsForm />
      </Layout>
    </AnimationRevealPage>
  );
};
