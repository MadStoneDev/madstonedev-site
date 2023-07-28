import Layout from "components/layouts/Standard.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";
import { Helmet } from "react-helmet-async";

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

export default ({ headingText = "Terms of Service" }) => {
  return (
    <AnimationRevealPage>
      <Helmet prioritizeSeoTags>
        <title>Madstone.Dev - Terms of Service</title>
        <meta name="description" content="" />
      </Helmet>

      <Layout>
        <Container>
          <ContentWithPaddingXl>
            <HeadingRow>
              <Heading>{headingText}</Heading>
            </HeadingRow>
            <Text>
              <p>Last updated: 27 July, 2023</p>

              <h2>MadStoneDev Terms of Service</h2>
              <p>
                These Terms of Service govern your use of LFU Companion, our
                website located at{" "}
                <a href="https://madstone.dev">https://madstone.dev</a>, and any
                related services provided by MadStoneDev.
              </p>
              <p>
                When you create an LFU Companion account or use LFU Companion,
                you agree to abide by these Terms of Service and to comply with
                all applicable laws and regulations. If you do not agree with
                these Terms of Service, you are prohibited from further using
                the app, accessing our website, or using any other services
                provided by MadStoneDev.
              </p>
              <p>
                If you access or download LFU Companion from (1) the Apple App
                Store, you agree to any Usage Rules set forth in the App Store
                Terms of Service; and/or (2) the Google Play Store, you agree to
                the Android, Google Inc. Terms and Conditions including the
                Google Apps Terms of Service.
              </p>
              <p>
                We, MadStoneDev, reserve the right to review and amend any of
                these Terms of Service at our sole discretion. Upon doing so, we
                will update this page and notify you through the app and/or the
                email address you provided when you created your account. Any
                changes to these Terms of Service will take effect immediately
                from the date of publication.
              </p>
              <p>These Terms of Service were last updated on 27 July 2023.</p>
              <h3>Limitations of Use</h3>
              <p>
                By using LFU Companion and our website, you warrant on behalf of
                yourself, any entity who you represent who has entered into
                these Terms of Service, and your users that you will not:
              </p>
              <ul>
                <li>
                  modify, copy, prepare derivative works of, decompile, or
                  reverse engineer LFU Companion or any materials and software
                  contained within LFU Companion or on our website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from LFU
                  Companion or any materials and software contained within LFU
                  Companion or on our website;
                </li>
                <li>
                  transfer LFU Companion or any of its associated materials to
                  another person or &quot;mirror&quot; the materials on any
                  other server;
                </li>
                <li>
                  knowingly or negligently use LFU Companion or any of its
                  associated services in a way that abuses or disrupts our
                  networks or any other service MadStoneDev provides;
                </li>
                <li>
                  use LFU Companion or its associated services to transmit or
                  publish any harassing, indecent, obscene, fraudulent, or
                  unlawful material;
                </li>
                <li>
                  use LFU Companion or its associated services in violation of
                  any applicable laws or regulations;
                </li>
                <li>
                  use LFU Companion to send unauthorised advertising or spam;
                </li>
                <li>
                  harvest, collect, or gather user data without the user’s
                  consent; or
                </li>
                <li>
                  use LFU Companion or its associated services in such a way
                  that may infringe the privacy, intellectual property rights,
                  or other rights of third parties.
                </li>
              </ul>
              <h3>Intellectual Property</h3>
              <p>
                The intellectual property in the materials in LFU Companion and
                on our website are owned by or licensed to MadStoneDev. You may
                download LFU Companion to view, use, and display the application
                on your mobile device for your personal use only.
              </p>
              <p>
                This constitutes the grant of a licence, not a transfer of
                title. This licence shall automatically terminate if you violate
                any of these restrictions or these Terms of Service and may be
                terminated by MadStoneDev at any time.
              </p>
              <h3>User-Generated Content</h3>
              <p>
                You retain your intellectual property ownership rights over
                content you submit to us for publication within LFU Companion
                and/or on its corresponding website. We will never claim
                ownership of your content but we do require a licence from you
                in order to use it.
              </p>
              <p>
                When you use LFU Companion or its associated services to post,
                upload, share or otherwise transmit content covered by
                intellectual property rights, you grant to us a non-exclusive,
                royalty-free, transferable, sub-licensable, worldwide licence to
                use, distribute, modify, run, copy, publicly display, translate
                or otherwise create derivative works of your content in a manner
                that is consistent with your privacy preferences and our Privacy
                Policy.
              </p>
              <p>
                The licence you grant us can be terminated at any time by
                deleting your content or account. However, to the extent that we
                (or our partners) have used your content in connection with
                commercial or sponsored content, the licence will continue until
                the relevant commercial or post has been discontinued by us.
              </p>
              <p>
                You give us permission to use your username and other
                identifying information associated with your account in a manner
                that is consistent with your privacy preferences and our Privacy
                Policy.
              </p>
              <h3>Automatic Updates</h3>
              <p>
                You give us permission to download and install updates to LFU
                Companion on your device in accordance with your privacy
                preferences. This permission can be revoked at any time by
                deleting LFU Companion from your device.
              </p>
              <h3>Liability</h3>
              <p>
                LFU Companion and the materials in LFU Companion and on our
                website are provided on an 'as is' basis. To the extent
                permitted by law, MadStoneDev makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property, or other violation of
                rights.
              </p>
              <p>
                In no event shall MadStoneDev or its suppliers be liable for any
                consequential loss suffered or incurred by you or any third
                party arising from the use or inability to use LFU Companion,
                our website, or any other services provided by MadStoneDev or
                the materials in LFU Companion, even if MadStoneDev or an
                authorised representative has been notified, orally or in
                writing, of the possibility of such damage.
              </p>
              <p>
                In the context of this agreement, &quot;consequential loss&quot;
                includes any consequential loss, indirect loss, real or
                anticipated loss of profit, loss of benefit, loss of revenue,
                loss of business, loss of goodwill, loss of opportunity, loss of
                savings, loss of reputation, loss of use and/or loss or
                corruption of data, whether under statute, contract, equity,
                tort (including negligence), indemnity or otherwise.
              </p>
              <p>
                Because some jurisdictions do not allow limitations on implied
                warranties, or limitations of liability for consequential or
                incidental damages, these limitations may not apply to you.
              </p>
              <h3>Accuracy of Materials</h3>
              <p>
                The materials appearing in LFU Companion or on our website are
                not comprehensive and are for general information purposes only.
                To the extent permitted by law, MadStoneDev does not warrant or
                make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials in LFU
                Companion or on our website, or otherwise relating to such
                materials or on any resources linked to LFU Companion and our
                website.
              </p>
              <h3>Links</h3>
              <p>
                MadStoneDev has not reviewed all of the sites linked to LFU
                Companion or on its corresponding website and is not responsible
                for the contents of any such linked site. The inclusion of any
                link does not imply endorsement, approval or control by
                MadStoneDev of the site. Use of any such linked website is at
                your own risk and we strongly advise you make your own
                investigations with respect to the suitability of those sites.
              </p>
              <h3>Notice regarding Apple</h3>
              <p>
                To the extent that you are using or accessing LFU Companion on
                an iOS device, you acknowledge and agree to the terms of this
                clause. You acknowledge that these Terms of Service are between
                you and MadStoneDev only, not with Apple Inc. (Apple), and Apple
                is not responsible for LFU Companion and any materials available
                in LFU Companion.
              </p>
              <p>
                Apple has no obligation to furnish you with any maintenance and
                support services with respect to LFU Companion.
              </p>
              <p>
                If LFU Companion fails to conform to any applicable warranty,
                you may notify Apple and Apple will refund the purchase price of
                the mobile application to you. To the maximum extent permitted
                by applicable law, Apple will have no other warranty obligation
                whatsoever with respect to LFU Companion and any other claims,
                losses, liabilities, damages, costs or expenses attributable to
                any failure to conform to any warranty will be our
                responsibility.
              </p>
              <p>
                Apple is not responsible for addressing any claims by you or any
                third party relating to LFU Companion or your use of LFU
                Companion, including but not limited to (1) product liability
                claims; (2) any claim that our mobile application fails to
                conform to any applicable legal or regulatory requirement; and
                (3) claims arising under consumer protection or similar
                legislation.
              </p>
              <p>
                Apple is not responsible for the investigation, defence,
                settlement and discharge of any third-party claim that our
                mobile application infringes that third party’s intellectual
                property rights.
              </p>
              <p>
                You agree to comply with any applicable third-party terms when
                using LFU Companion, including any Usage Rules set forth in the
                Apple App Store Agreement of Service.
              </p>
              <p>
                Apple and Apple’s subsidiaries are third-party beneficiaries of
                these Terms of Service and, upon your acceptance of these Terms
                of Service, Apple will have the right (and will be deemed to
                have accepted the right) to enforce these Terms of Service
                against you as a third-party beneficiary of these Terms of
                Service.
              </p>
              <p>
                You hereby represent and warrant that (1) you are not located in
                a country that is subject to a U.S. Government embargo, or that
                has been designated by the U.S. Government as a 'terrorist
                supporting' country; and (2) you are not listed on any U.S.
                Government list of prohibited or restricted parties.
              </p>
              <h3>Right to Terminate</h3>
              <p>
                We may suspend or terminate your LFU Companion account and right
                to use LFU Companion and these Terms of Service immediately upon
                written notice to you for any breach of these Terms of Service.
              </p>
              <h3>Severance</h3>
              <p>
                Any term of these Terms of Service which is wholly or partially
                void or unenforceable is severed to the extent that it is void
                or unenforceable. The validity of the remainder of these Terms
                of Service is not affected.
              </p>
              <h3>Governing Law</h3>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of Brisbane, Australia. You irrevocably
                submit to the exclusive jurisdiction of the courts in that State
                or location.
              </p>
            </Text>
          </ContentWithPaddingXl>
        </Container>
      </Layout>
    </AnimationRevealPage>
  );
};
