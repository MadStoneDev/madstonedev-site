import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  // States
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    // { title: "services", path: "/" },
    // { title: "blog", path: "/" },
    { title: "contact", path: "/contact" },
  ];

  const handleMenu = (state) => {
    setOpenMenu(state);
  };

  return (
    <header
      className={
        "p-5 sm:p-10 relative flex flex-row justify-between items-center z-10"
      }
    >
      <img src={"/logo-m-only.svg"} className={"w-12"} />
      <FiMenu
        className={"cursor-pointer"}
        size={30}
        color={"#fff"}
        onClick={() => handleMenu(true)}
      />

      <section
        className={`p-10 fixed top-0 right-0 w-screen lg:w-96 h-full transform transition-all duration-500 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "black",
          boxShadow: "-10px 0px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <FaTimes
          size={24}
          className={"fixed top-8 right-5 cursor-pointer"}
          onClick={() => handleMenu(false)}
        />
        <ul className={"mt-32"}>
          {links.map((link, index) => (
            <li className={"my-10 text-4xl font-light"}>{link.title}</li>
          ))}
        </ul>
        <article className={"absolute bottom-10 font-light tracking-widest"}>
          <a href={"/privacy-policy"} className={"text-primary masked-link"}>
            Privacy Policy
          </a>
        </article>
      </section>
    </header>
  );
};

export default Header;
