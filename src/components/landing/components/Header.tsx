import React from "react";

import HeroTextContent from "./HeroTextContext";
import { NavigationContainer } from "./navigation/NavigationContainer";
import Image from "next/image";

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
        Let&apos;s Work Together. Hire Me!
        <Image
          loading="lazy"
          src={"/svg/arrow-right.svg"}
          alt="arrow-right"
          width={32}
          height={32}
          className="object-contain shrink-0 self-stretch my-auto max-w-8 aspect-square"
        />
      </a>
    </>
  );
};

export default Header;
