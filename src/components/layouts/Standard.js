import Footer from "../footers/MiniCenteredFooter";
import styled from "styled-components";
import Header, {
  DesktopNavLinks,
  LogoLink,
  NavLink,
  NavToggle,
} from "../headers/light";
import tw from "twin.macro";

const HeroContainer = tw.div`z-20 relative top-0 px-0 max-w-screen-xl mx-auto`;
const StyledHeader = styled(Header)`
  ${tw`pt-0 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-800 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

export default ({ children, landing = false }) => {
  const navLinks = [
    // <NavLinks key={1}>
    //   <NavLink href="/about">About</NavLink>
    //   <NavLink href="/blog">Blog</NavLink>
    // </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/">Hire Me</PrimaryLink>
    // </NavLinks>,
  ];

  return (
    <>
      {landing ? null : (
        <HeroContainer>
          <StyledHeader links={navLinks} />
        </HeroContainer>
      )}
      {children}
      <Footer />
    </>
  );
};
