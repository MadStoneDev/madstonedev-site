import Layout from "components/layouts/Standard.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Cookies Policy" }) => {
  return (
    <AnimationRevealPage>
      <Layout>
        <Container>
          <ContentWithPaddingXl>
            <HeadingRow>
              <Heading>{headingText}</Heading>
            </HeadingRow>
            <Text>
              <p>Last updated: 27 July, 2023</p>

              <h2>MadStoneDev Cookie Policy</h2>
              <p>
                We use cookies to help improve your experience of our website at{" "}
                <a href="https://madstone.dev">https://madstone.dev</a>. This
                cookie policy is part of MadStoneDev's privacy policy. It covers
                the use of cookies between your device and our site.
              </p>
              <p>
                We also provide basic information on third-party services we may
                use, who may also use cookies as part of their service. This
                policy does not cover their cookies.
              </p>
              <p>
                If you don’t wish to accept cookies from us, you should instruct
                your browser to refuse cookies from{" "}
                <a href="https://madstone.dev">https://madstone.dev</a>. In such
                a case, we may be unable to provide you with some of your
                desired content and services.
              </p>
              <h3>What is a cookie?</h3>
              <p>
                A cookie is a small piece of data that a website stores on your
                device when you visit. It typically contains information about
                the website itself, a unique identifier that allows the site to
                recognise your web browser when you return, additional data that
                serves the cookie’s purpose, and the lifespan of the cookie
                itself.
              </p>
              <p>
                Cookies are used to enable certain features (e.g. logging in),
                track site usage (e.g. analytics), store your user settings
                (e.g. time zone, notification preferences), and to personalise
                your content (e.g. advertising, language).
              </p>
              <p>
                Cookies set by the website you are visiting are usually referred
                to as first-party cookies. They typically only track your
                activity on that particular site.
              </p>
              <p>
                Cookies set by other sites and companies (i.e. third parties)
                are called third-party cookies They can be used to track you on
                other websites that use the same third-party service.
              </p>
              <h3>Types of cookies and how we use them</h3>
              <h4>Essential cookies</h4>
              <p>
                Essential cookies are crucial to your experience of a website,
                enabling core features like user logins, account management,
                shopping carts, and payment processing.
              </p>
              <p>We do not use this type of cookie on our site.</p>
              <h4>Performance cookies</h4>
              <p>
                Performance cookies track how you use a website during your
                visit. Typically, this information is anonymous and aggregated,
                with information tracked across all site users. They help
                companies understand visitor usage patterns, identify and
                diagnose problems or errors their users may encounter, and make
                better strategic decisions in improving their audience’s overall
                website experience. These cookies may be set by the website
                you’re visiting (first-party) or by third-party services. They
                do not collect personal information about you.
              </p>
              <p>We do not use this type of cookie on our site.</p>
              <h4>Functionality cookies</h4>
              <p>
                Functionality cookies are used to collect information about your
                device and any settings you may configure on the website you’re
                visiting (like language and time zone settings). With this
                information, websites can provide you with customised, enhanced,
                or optimised content and services. These cookies may be set by
                the website you’re visiting (first-party) or by third-party
                services.
              </p>
              <p>We do not use this type of cookie on our site.</p>
              <h4>Targeting/advertising cookies</h4>
              <p>
                Targeting/advertising cookies help determine what promotional
                content is most relevant and appropriate to you and your
                interests. Websites may use them to deliver targeted advertising
                or limit the number of times you see an advertisement. This
                helps companies improve the effectiveness of their campaigns and
                the quality of content presented to you. These cookies may be
                set by the website you’re visiting (first-party) or by
                third-party services. Targeting/advertising cookies set by
                third-parties may be used to track you on other websites that
                use the same third-party service.
              </p>
              <p>We do not use this type of cookie on our site.</p>
            </Text>
          </ContentWithPaddingXl>
        </Container>
      </Layout>
    </AnimationRevealPage>
  );
};
