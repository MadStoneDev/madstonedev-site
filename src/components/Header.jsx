import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
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
    <header className={"p-10 flex flex-row justify-between items-center"}>
      <img src={"/logo-m-only.svg"} className={"w-12"} />
      <FiMenu size={30} onClick={() => handleMenu(true)} />

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
          className={"fixed top-14 right-10"}
          onClick={() => handleMenu(false)}
        />
        <ul className={"mt-32"}>
          {links.map((link, index) => (
            <li className={"my-10 text-4xl font-light"}>{link.title}</li>
          ))}
        </ul>
        <article className={"absolute bottom-10 font-light tracking-widest"}>
          <a
            href={"/privacy-policy"}
            className={
              "text-stone-500 hover:text-primary transition-all duration-300"
            }
          >
            Privacy Policy
          </a>
        </article>
      </section>
    </header>
  );
};

export default Header;
