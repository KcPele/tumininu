import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { NavigationProps } from "./NavigationTypes";

export const Navigation: React.FC<NavigationProps> = ({ brandName, items }) => {
  return (
    <nav
      className="flex flex-wrap gap-5 justify-between self-start max-w-full text-center text-lime-950 w-[892px]"
      role="navigation"
    >
      <h1 className="my-auto text-xl font-semibold leading-none">
        {brandName}
      </h1>
      <div
        className="flex overflow-hidden flex-wrap gap-6 items-center px-6 py-4 text-base bg-yellow-50 border border-solid shadow-sm border-zinc-500 border-opacity-20 rounded-[48px] max-md:px-5"
        role="menu"
      >
        {items.map((item, index) => (
          <NavigationItem key={index} label={item.label} />
        ))}
      </div>
    </nav>
  );
};
