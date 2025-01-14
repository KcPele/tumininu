import React from "react";

import Navbar from "./Navbar";
import HeroTextContent from "./HeroTextContext";
import { NavigationContainer } from "./navigation/NavigationContainer";

const Header = () => {
  return (
    <>
      <NavigationContainer />

      <HeroTextContent />

      <a
        href="#contact"
        className="flex overflow-hidden gap-3 justify-center items-center px-8 py-5 mt-9 text-xs font-medium tracking-normal leading-none border border-solid shadow-sm border-lime-950 rounded-[56px] text-lime-950 max-md:px-5 hover:bg-lime-950 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-lime-950"
        tabIndex={0}
      >
        Let's Work Together. Hire Me!
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/b2d4719cf4304179a70cb2f57ac77167/bcdbb3cfed774d0864b9868e846af1545773bc8852631052795a87e581e87f17?apiKey=b2d4719cf4304179a70cb2f57ac77167&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </a>
    </>
  );
};

export default Header;
