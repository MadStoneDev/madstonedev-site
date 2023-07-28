import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Layout from "components/layouts/Standard.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import { FaBoxes } from "react-icons/fa";

// import resolveConfig from "tailwindcss/resolveConfig";
import { MdCalculate } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const LinksContainer = tw.div`mb-4 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;
const Heading = tw.span`flex justify-center uppercase tracking-wider text-sm font-bold`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  // const tailwindConfig = require("../tailwind.config");
  // const fullConfig = resolveConfig(tailwindConfig);

  return (
    <AnimationRevealPage>
      <Helmet prioritizeSeoTags>
        <title>Madstone.Dev - LFU Companion</title>
        <meta name="description" content="" />
      </Helmet>

      <Layout>
        <MainFeature1
          subheading={<Subheading>About LFU Companion</Subheading>}
          heading="Intuitive tools for Last Fortress Underground"
          description="Take control of your progress in the popular mobile game, Last Fortress Underground, with this easy-to-use toolbox. Whether you're a seasoned player or just starting your journey, LFU Companion helps you efficiently manage your resources and plan your next upgrades."
          buttonRounded={false}
          primaryButton={false}
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <Features
          subheading={<Subheading>The What</Subheading>}
          heading="Manage. Plan. Strategise."
          description="With all of the different resources and variables that a complex game like Last Fortress Underground throws at you, it can get a little overwhelming quickly. With LFU Companion, you can easily manage your resources and plan your next upgrades"
          cards={[
            {
              icon: <FaBoxes size={26} color={"#E81863"} />,
              title: "Manage Resources",
              description:
                "Check how much of all resources you have in your inventory and plan your next build upgrades without" +
                " having to open any of your chests",
            },
            {
              icon: <MdCalculate size={30} color={"#E81863"} />,
              title: "Calculate Upgrades",
              description:
                "An upcoming update will introduce an upgrade calculator to help your workout how more workers and" +
                " speedups will affect your build time",
            },
            {
              icon: <RiChatNewFill size={24} color={"#E81863"} />,
              title: "Much More",
              description:
                "So many more features are currently in plan for LFU Companion to make it your one-stop shop for all" +
                " things Last Fortress Underground",
            },
          ]}
          linkText=""
        />

        <div>
          <Heading>Important Links Specific to LFU Companion</Heading>
        </div>

        <LinksContainer>
          <Link href="/lfu-companion/privacy-policy">App Privacy Policy</Link>
          <Link href="/lfu-companion/terms-of-service">
            App Terms of Service
          </Link>
        </LinksContainer>
      </Layout>
    </AnimationRevealPage>
  );
};
