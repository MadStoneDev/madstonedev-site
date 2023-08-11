import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const links = [
    {
      title: "LFU Companion",
    },
    {
      title: "Lingualize",
    },
  ];

  const titleStyles = {
    color: "#151515",
    textShadow:
      "-1px -1px 2px #fff, 1px -1px 2px #fff, -1px 1px 2px #fff, 1px 1px 2px #fff",
  };

  const hoverTitleStyles = {
    color: "#fff",
    overflow: "hidden",
  };

  return (
    <>
      <Header />
      <main className={"h-full"}>
        <section>
          {links.map((link, index) => (
            <article
              key={index}
              className={"mt-20 relative w-max cursor-pointer feature-title"}
            >
              <div className={"flex flex-row items-center"}>
                <div
                  className={
                    "flex gap-5 text-xl md:text-2xl lg:text-4xl feature-number"
                  }
                >
                  0{index + 1}
                  <span className={"feature-span"}>–</span>
                </div>
                <div className={"relative inline-block"}>
                  <h2
                    className={
                      "text-3xl md:text-4xl lg:text-7xl font-bold uppercase tracking-wider opacity-50 feature-outline"
                    }
                    style={titleStyles}
                  >
                    {link.title}
                  </h2>

                  <div
                    className={
                      "absolute top-0 right-0 bottom-0 left-0 feature-mask"
                    }
                  >
                    {/*<div className={"feature-overlay"} />*/}
                    <h2
                      className={
                        "text-3xl md:text-4xl lg:text-7xl font-bold uppercase tracking-wider opacity-100"
                      }
                      style={hoverTitleStyles}
                    >
                      {link.title}
                    </h2>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
