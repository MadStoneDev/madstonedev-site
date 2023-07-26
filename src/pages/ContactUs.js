import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Layout from "components/layouts/Standard.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Layout>
        <ContactUsForm />
      </Layout>
    </AnimationRevealPage>
  );
};
