const Footer = () => {
  return (
    <footer
      className={
        "absolute bottom-10 right-96 text-sm font-light tracking-widest"
      }
    >
      <p className={"mr-10 text-stone-500"}>
        &copy; Copyright 2023{" "}
        <a href={"/"} className={"uppercase text-primary"}>
          MadStoneDev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
