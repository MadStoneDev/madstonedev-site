import React from "react";
import Layout from "components/layouts/Standard.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
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

export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Layout>
        <Container>
          <ContentWithPaddingXl>
            <HeadingRow>
              <Heading>{headingText}</Heading>
            </HeadingRow>
            <Text>
              <p>Last updated: 24 July, 2023</p>

              <h1>Privacy Policy for Madstone.Dev</h1>

              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy. This Privacy
                Policy has been created with the help of the{" "}
                <a
                  href="https://www.privacypolicies.com/privacy-policy-generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy Generator
                </a>
                .
              </p>
              <h2>Interpretation and Definitions</h2>
              <h3 className={"pb-1 font-bold"}>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h3 className={"pb-1 font-bold"}>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className={"ml-6 pb-6 list-disc font-light"}>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Account</span> means a unique
                    account created for You to access our Service or parts of
                    our Service.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Affiliate</span> means an
                    entity that controls, is controlled by or is under common
                    control with a party, where &quot;control&quot; means
                    ownership of 50% or more of the shares, equity interest or
                    other securities entitled to vote for election of directors
                    or other managing authority.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Application</span> refers to
                    LFToolbox, the software program provided by the Company, and
                    any other applications we develop and/or publish.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Company</span> (referred to as
                    either &quot;the Company&quot;, &quot;We&quot;,
                    &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers
                    to LFToolbox.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Country</span> refers to:
                    Queensland, Australia
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Device</span> means any device
                    that can access the Service such as a computer, a cellphone
                    or a digital tablet.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Personal Data</span> is any
                    information that relates to an identified or identifiable
                    individual.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Service</span> refers to our
                    Applications.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Service Provider</span> means
                    any natural or legal person who processes the data on behalf
                    of the Company. It refers to third-party companies or
                    individuals employed by the Company to facilitate the
                    Service, to provide the Service on behalf of the Company, to
                    perform services related to the Service or to assist the
                    Company in analyzing how the Service is used.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>Usage Data</span> refers to
                    data collected automatically, either generated by the use of
                    the Service or from the Service infrastructure itself (for
                    example, the duration of a page visit).
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>You</span> means the
                    individual accessing or using the Service, or the company,
                    or other legal entity on behalf of which such individual is
                    accessing or using the Service, as applicable.
                  </p>
                </li>
              </ul>
              <h2>Collecting and Using Your Personal Data</h2>
              <h3 className={"pb-1 font-bold"}>Types of Data Collected</h3>
              <h3 className={"pb-1 font-bold"}>Personal Data</h3>
              <p>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className={"ml-6 pb-6 list-disc font-light"}>
                <li className={"pb-1"}>Usage Data</li>
              </ul>
              <h3 className={"pb-1 font-bold"}>Usage Data</h3>
              <p>
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
              <h3 className={"pb-1 font-bold"}>Use of Your Personal Data</h3>
              <p>
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className={"ml-6 pb-6 list-disc font-light"}>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>
                      To provide and maintain our Service
                    </span>
                    , including to monitor the usage of our Service.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>To manage Your Account:</span>{" "}
                    to manage Your registration as a user of the Service. The
                    Personal Data You provide can give You access to different
                    functionalities of the Service that are available to You as
                    a registered user.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>
                      For the performance of a contract:
                    </span>{" "}
                    the development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>To contact You:</span> To
                    contact You by email, telephone calls, SMS, or other
                    equivalent forms of electronic communication, such as a
                    mobile application's push notifications regarding updates or
                    informative communications related to the functionalities,
                    products or contracted services, including the security
                    updates, when necessary or reasonable for their
                    implementation.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>To provide You</span> with
                    news, special offers and general information about other
                    goods, services and events which we offer that are similar
                    to those that you have already purchased or enquired about
                    unless You have opted not to receive such information.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>
                      To manage Your requests:
                    </span>{" "}
                    To attend and manage Your requests to Us.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>For business transfers:</span>{" "}
                    We may use Your information to evaluate or conduct a merger,
                    divestiture, restructuring, reorganization, dissolution, or
                    other sale or transfer of some or all of Our assets, whether
                    as a going concern or as part of bankruptcy, liquidation, or
                    similar proceeding, in which Personal Data held by Us about
                    our Service users is among the assets transferred.
                  </p>
                </li>
                <li className={"pb-1"}>
                  <p>
                    <span className={"font-bold"}>For other purposes</span>: We
                    may use Your information for other purposes, such as data
                    analysis, identifying usage trends, determining the
                    effectiveness of our promotional campaigns and to evaluate
                    and improve our Service, products, services, marketing and
                    your experience.
                  </p>
                </li>
              </ul>
              <p>
                We may share Your personal information in the following
                situations:
              </p>
              <ul className={"ml-6 pb-6 list-disc font-light"}>
                <li className={"pb-3"}>
                  <span className={"font-bold"}>With Service Providers:</span>{" "}
                  We may share Your personal information with Service Providers
                  to monitor and analyze the use of our Service, to contact You.
                </li>
                <li className={"pb-3"}>
                  <span className={"font-bold"}>For business transfers:</span>{" "}
                  We may share or transfer Your personal information in
                  connection with, or during negotiations of, any merger, sale
                  of Company assets, financing, or acquisition of all or a
                  portion of Our business to another company.
                </li>
                <li className={"pb-3"}>
                  <span className={"font-bold"}>With Affiliates:</span> We may
                  share Your information with Our affiliates, in which case we
                  will require those affiliates to honor this Privacy Policy.
                  Affiliates include Our parent company and any other
                  subsidiaries, joint venture partners or other companies that
                  We control or that are under common control with Us.
                </li>
                <li className={"pb-3"}>
                  <span className={"font-bold"}>With business partners:</span>{" "}
                  We may share Your information with Our business partners to
                  offer You certain products, services or promotions.
                </li>
                <li className={"pb-3"}>
                  <span className={"font-bold"}>With other users:</span> when
                  You share personal information or otherwise interact in the
                  public areas with other users, such information may be viewed
                  by all users and may be publicly distributed outside.
                </li>
                <li className={"pb-1"}>
                  <span className={"font-bold"}>With Your consent</span>: We may
                  disclose Your personal information for any other purpose with
                  Your consent.
                </li>
              </ul>
              <h3 className={"pb-1 font-bold"}>
                Retention of Your Personal Data
              </h3>
              <p>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
              <h3 className={"pb-1 font-bold"}>
                Transfer of Your Personal Data
              </h3>
              <p>
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
              <h3 className={"pb-1 font-bold"}>Delete Your Personal Data</h3>
              <p>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p>
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p>
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
              <h3 className={"pb-1 font-bold"}>
                Disclosure of Your Personal Data
              </h3>
              <h3 className={"pb-1 font-bold"}>Business Transactions</h3>
              <p>
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <h3 className={"pb-1 font-bold"}>Law enforcement</h3>
              <p>
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h3 className={"pb-1 font-bold"}>Other legal requirements</h3>
              <p>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className={"ml-6 pb-6 list-disc font-light"}>
                <li className={"pb-1"}>Comply with a legal obligation</li>
                <li className={"pb-1"}>
                  Protect and defend the rights or property of the Company
                </li>
                <li className={"pb-1"}>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li className={"pb-1"}>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li className={"pb-1"}>Protect against legal liability</li>
              </ul>
              <h3 className={"pb-1 font-bold"}>
                Security of Your Personal Data
              </h3>
              <p>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
              <h2>Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </p>
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us by filling out the contact form on the{" "}
                <a href={"/"} className={"font-base underline"}>
                  Home Page
                </a>
              </p>
            </Text>
          </ContentWithPaddingXl>
        </Container>
      </Layout>
    </AnimationRevealPage>
  );
};
