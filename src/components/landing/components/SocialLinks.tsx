import * as React from "react";
import { SocialLink } from "../types";

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center mt-12 font-semibold whitespace-nowrap max-md:mt-10 ">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="underline self-stretch my-auto hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-950"
          tabIndex={0}
        >
          {link.platform}
        </a>
      ))}
    </div>
  );
};
