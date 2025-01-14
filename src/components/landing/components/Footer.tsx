import React from "react";
import { SocialLinks } from "./SocialLinks";
import { socialLinks } from "../data/navigationData";

const Footer = () => {
  return (
    <footer className=" w-full mt-7 text-base text-lime-950 max-w-[1110px]">
      <a
        href="/resume"
        className="font-medium hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-950"
        tabIndex={0}
      >
        See my resume
      </a>
      <SocialLinks links={socialLinks} />
    </footer>
  );
};

export default Footer;
