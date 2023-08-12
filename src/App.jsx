import { useRef, useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const App = () => {
  // States
  const [featureImage, setFeatureImage] = useState("url(penny-ai.png)");
  const [featureOpacity, setFeatureOpacity] = useState("opacity-75");
  const [activeFeature, setActiveFeature] = useState(0);

  const timeoutRef = useRef(null);

  const links = [
    {
      title: "LFU Companion",
      image: "url(penny-ai.png)",
    },
    {
      title: "Lingualize",
      image: "url(lingualize-sneak.png)",
    },
  ];

  const FeatureTitle = styled.h2`
    color: #151515;

    @media (min-width: 769px) {
      text-shadow: -1px -1px 2px #fff, 1px -1px 2px #fff, -1px 1px 2px #fff,
        1px 1px 2px #fff;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      color: white;
      opacity: 1;
    }
  `;

  const FeatureSection = styled.section`
    @media (min-width: 769px) {
      background-position: 115% 0;
    }

    @media (max-width: 768px) {
      background-position: 150% 0;
    }
  `;

  const hoverTitleStyles = {
    color: "#fff",
    overflow: "hidden",
  };

  const resetImage = () => {
    setTimeout(() => {
      setFeatureImage("");
    }, 500);
  };

  return (
    <>
      <Header />
      <main className={"h-full"}>
        <section
          className={`absolute top-0 right-0 w-full h-full transition-all duration-1000 ease-in-out z-0 ${featureOpacity} bg-cover md:bg-contain bg-center md:bg-left-lg`}
          style={{
            backgroundImage: featureImage,
            backgroundRepeat: "no-repeat",
          }}
        />

        <section>
          {links.map((link, index) => (
            <article
              key={index}
              className={`mt-20 relative w-max feature-title ${
                activeFeature === index ? "active" : ""
              }`}
              onClick={() => {
                setActiveFeature(index);

                if (timeoutRef.current) clearTimeout(timeoutRef.current);

                setFeatureOpacity("opacity-0");

                setFeatureImage(link.image);

                setFeatureOpacity("opacity-75");
              }}
              onMouseOver={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);

                setActiveFeature(index);

                setFeatureOpacity("opacity-0");

                setFeatureImage(link.image);

                setFeatureOpacity("opacity-75");
              }}
            >
              <div className={"flex flex-row items-center"}>
                <div
                  className={
                    "flex gap-2 sm:gap-5 text-xl md:text-2xl lg:text-4xl feature-number"
                  }
                >
                  0{index + 1}
                  <span className={"feature-span"}>–</span>
                </div>
                <div className={"relative inline-block"}>
                  <FeatureTitle
                    className={
                      "text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider" +
                      " feature-outline"
                    }
                  >
                    {link.title}
                  </FeatureTitle>

                  <div
                    className={
                      "absolute top-0 right-0 bottom-0 left-0 feature-mask"
                    }
                  >
                    {/*<div className={"feature-overlay"} />*/}
                    <h2
                      className={
                        "text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider opacity-100"
                      }
                      style={hoverTitleStyles}
                    >
                      {link.title}
                    </h2>
                  </div>
                </div>
                {activeFeature === index ? (
                  <div
                    className={
                      "ml-5 flex items-center text-primary cursor-pointer "
                    }
                  >
                    Go
                    <BsArrowRight className={"ml-2"} size={30} />
                  </div>
                ) : null}
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
