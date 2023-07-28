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

export default ({ headingText = "Acceptable Use" }) => {
  return (
    <AnimationRevealPage>
      <Helmet prioritizeSeoTags>
        <title>Madstone.Dev - Acceptable use</title>
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

              <h2>MadStoneDev Acceptable Use Policy</h2>
              <p>
                This acceptable use policy covers the products, services, and
                technologies (collectively referred to as the
                &quot;Products&quot;) provided by MadStoneDev under any ongoing
                agreement. It’s designed to protect us, our customers and the
                general Internet community from unethical, irresponsible and
                illegal activity.
              </p>
              <p>
                MadStoneDev customers found engaging in activities prohibited by
                this acceptable use policy can be liable for service suspension
                and account termination. In extreme cases, we may be legally
                obliged to report such customers to the relevant authorities.
              </p>
              <p>This policy was last reviewed on 27 July 2023.</p>
              <h3>Fair use</h3>
              <p>
                We provide our facilities with the assumption your use will be
                &quot;business as usual&quot;, as per our offer schedule. If
                your use is considered to be excessive, then additional fees may
                be charged or capacity may be restricted.
              </p>
              <p>
                We are opposed to all forms of abuse, discrimination, rights
                infringement and/or any action that harms or disadvantages any
                group, individual or resource. We expect our customers and,
                where applicable, their users (&quot;end-users&quot;) to
                likewise engage our Products with similar intent.
              </p>
              <h3>Customer accountability</h3>
              <p>
                We regard our customers as being responsible for their own
                actions as well as for the actions of anyone using our Products
                with the customer’s permission. This responsibility also applies
                to anyone using our Products on an unauthorised basis as a
                result of the customer’s failure to put in place reasonable
                security measures.
              </p>
              <p>
                By accepting Products from us, our customers agree to ensure
                adherence to this policy on behalf of anyone using the Products
                as their end users. Complaints regarding the actions of
                customers or their end-users will be forwarded to the nominated
                contact for the account in question.
              </p>
              <p>
                If a customer — or their end-user or anyone using our Products
                as a result of the customer — violates our acceptable use
                policy, we reserve the right to terminate any Products
                associated with the offending account or the account itself or
                take any remedial or preventative action we deem appropriate
                without notice. To the extent permitted by law, no credit will
                be available for interruptions of service resulting from any
                violation of our acceptable use policy.
              </p>
              <h3>Prohibited activity</h3>
              <h4>
                Copyright infringement and access to unauthorised material
              </h4>
              <p>
                Our Products must not be used to transmit, distribute or store
                any material in violation of any applicable law. This includes
                but isn’t limited to:
              </p>
              <ol type="i">
                <li>
                  any material protected by copyright, trademark, trade secret
                  or other intellectual property right used without proper
                  authorization, and
                </li>
                <li>
                  any material that is obscene, defamatory, constitutes an
                  illegal threat or violates export control laws.
                </li>
              </ol>
              <p>
                The customer is solely responsible for all material they input,
                upload, disseminate, transmit, create or publish through or on
                our Products, and for obtaining legal permission to use any
                works included in such material.
              </p>
              <h4>SPAM and unauthorised message activity</h4>
              <p>
                Our Products must not be used for the purpose of sending
                unsolicited bulk or commercial messages in violation of the laws
                and regulations applicable to your jurisdiction (“spam”). This
                includes but isn’t limited to sending spam, soliciting customers
                from spam sent from other service providers, and collecting
                replies to spam sent from other service providers.
              </p>
              <p>
                Our Products must not be used for the purpose of running
                unconfirmed mailing lists or telephone number lists
                (&quot;messaging lists&quot;). This includes but isn’t limited
                to subscribing email addresses or telephone numbers to any
                messaging list without the permission of the email address or
                telephone number owner, and storing any email addresses or
                telephone numbers subscribed in this way. All messaging lists
                run on or hosted by our Products must be &quot;confirmed
                opt-in&quot;. Verification of the address or telephone number
                owner’s express permission must be available for the lifespan of
                the messaging list.
              </p>
              <p>
                We prohibit the use of email lists, telephone number lists or
                databases purchased from third parties intended for spam or
                unconfirmed messaging list purposes on our Products.
              </p>
              <p>
                This spam and unauthorised message activity policy applies to
                messages sent using our Products, or to messages sent from any
                network by the customer or any person on the customer’s behalf,
                that directly or indirectly refer the recipient to a site hosted
                via our Products.
              </p>
              <h4>Unethical, exploitative, and malicious activity</h4>
              <p>
                Our Products must not be used for the purpose of advertising,
                transmitting or otherwise making available any software,
                program, product or service designed to violate this acceptable
                use policy, or the acceptable use policy of other service
                providers. This includes but isn’t limited to facilitating the
                means to send spam and the initiation of network sniffing,
                pinging, packet spoofing, flooding, mail-bombing and
                denial-of-service attacks.
              </p>
              <p>
                Our Products must not be used to access any account or
                electronic resource where the group or individual attempting to
                gain access does not own or is not authorised to access the
                resource (e.g. &quot;hacking&quot;, &quot;cracking&quot;,
                &quot;phreaking&quot;, etc.).
              </p>
              <p>
                Our Products must not be used for the purpose of intentionally
                or recklessly introducing viruses or malicious code into our
                Products and systems.
              </p>
              <p>
                Our Products must not be used for purposely engaging in
                activities designed to harass another group or individual. Our
                definition of harassment includes but is not limited to
                denial-of-service attacks, hate-speech, advocacy of racial or
                ethnic intolerance, and any activity intended to threaten,
                abuse, infringe upon the rights of or discriminate against any
                group or individual.
              </p>
              <p>
                Other activities considered unethical, exploitative and
                malicious include:
              </p>
              <ol>
                <li>
                  Obtaining (or attempting to obtain) services from us with the
                  intent to avoid payment;
                </li>
                <li>
                  Using our facilities to obtain (or attempt to obtain) services
                  from another provider with the intent to avoid payment;
                </li>
                <li>
                  The unauthorised access, alteration or destruction (or any
                  attempt thereof) of any information about our customers or
                  end-users, by any means or device;
                </li>
                <li>
                  Using our facilities to interfere with the use of our
                  facilities and network by other customers or authorised
                  individuals;
                </li>
                <li>
                  Publishing or transmitting any content of links that incite
                  violence, depict a violent act, depict child pornography or
                  threaten anyone’s health and safety;
                </li>
                <li>
                  Any act or omission in violation of consumer protection laws
                  and regulations;
                </li>
                <li>Any violation of a person’s privacy.</li>
              </ol>
              <p>
                Our Products may not be used by any person or entity, which is
                involved with or suspected of involvement in activities or
                causes relating to illegal gambling; terrorism; narcotics
                trafficking; arms trafficking or the proliferation, development,
                design, manufacture, production, stockpiling, or use of nuclear,
                chemical or biological weapons, weapons of mass destruction, or
                missiles; in each case including any affiliation with others
                whatsoever who support the above such activities or causes.
              </p>
              <h4>Unauthorised use of MadStoneDev property</h4>
              <p>
                We prohibit the impersonation of MadStoneDev, the representation
                of a significant business relationship with MadStoneDev, or
                ownership of any MadStoneDev property (including our Products
                and brand) for the purpose of fraudulently gaining service,
                custom, patronage or user trust.
              </p>
              <h4>About this policy</h4>
              <p>
                This policy outlines a non-exclusive list of activities and
                intent we deem unacceptable and incompatible with our brand.
              </p>
              <p>
                We reserve the right to modify this policy at any time by
                publishing the revised version on our website. The revised
                version will be effective from the earlier of:
              </p>
              <ul>
                <li>
                  the date the customer uses our Products after we publish the
                  revised version on our website; or
                </li>
                <li>
                  30 days after we publish the revised version on our website.
                </li>
              </ul>
            </Text>
          </ContentWithPaddingXl>
        </Container>
      </Layout>
    </AnimationRevealPage>
  );
};
