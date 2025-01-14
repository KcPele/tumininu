import * as React from "react";

interface TextSpanProps {
  text: string;
  highlight?: boolean;
}

const TextSpan: React.FC<TextSpanProps> = ({ text, highlight }) => (
  <span className={highlight ? "font-bold" : ""}>{text}</span>
);

interface HeroTextContentProps {
  role?: string;
}

const HeroTextContent: React.FC<HeroTextContentProps> = ({
  role = "heading",
}) => {
  const textContent = [
    { text: "Hi, I'm Tumi,", highlight: false },
    { text: " a Product Designer ", highlight: true },
    { text: "and", highlight: false },
    { text: " Creative Writer ", highlight: true },
    { text: "who tames", highlight: false },
    { text: " unruly pixels ", highlight: true },
    { text: "and makes", highlight: false },
    { text: " words dance ", highlight: true },
    { text: "like they're at a Friday night party.", highlight: false },
  ];

  return (
    <div
      role={role}
      aria-level={1}
      className="mt-14 text-3xl  text-center leading-[55px] text-lime-950 w-[679px] max-md:mt-10 max-md:max-w-full"
    >
      {textContent.map((item, index) => (
        <TextSpan key={index} text={item.text} highlight={item.highlight} />
      ))}
    </div>
  );
};

export default HeroTextContent;
