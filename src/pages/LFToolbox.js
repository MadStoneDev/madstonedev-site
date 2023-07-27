import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Layout from "components/layouts/Standard.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import { FaBoxes } from "react-icons/fa";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { MdCalculate } from "react-icons/md";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <AnimationRevealPage>
      <Layout>
        <MainFeature1
          subheading={<Subheading>About LFToolbox</Subheading>}
          heading="Intuitive tools for Last Fortress Underground"
          description="Take control of your progress in the popular mobile game, Last Fortress Underground, with this easy-to-use toolbox. Whether you're a seasoned player or just starting your journey, LFToolbox helps you efficiently manage your resources and plan your next upgrades."
          buttonRounded={false}
          primaryButton={false}
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <Features
          subheading={<Subheading>The What</Subheading>}
          heading="Manage. Plan. Strategise."
          description="With all of the different resources and variables that a complex game like Last Fortress Underground throws at you, it can get a little overwhelming quickly. With LFToolbox, you can easily manage your resources and plan your next upgrades"
          cards={[
            {
              icon: (
                <FaBoxes
                  size={24}
                  color={fullConfig.theme.colors.primary["500"]}
                />
              ),
              title: "Manage Resources",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
            {
              icon: (
                <MdCalculate
                  size={24}
                  color={fullConfig.theme.colors.primary["500"]}
                />
              ),
              title: "Calculate Upgrades",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
            {
              icon: (
                <MdCalculate
                  size={24}
                  color={fullConfig.theme.colors.primary["500"]}
                />
              ),
              title: "Customer Satisfaction",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
          ]}
          linkText=""
        />
        <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      </Layout>
    </AnimationRevealPage>
  );
};
