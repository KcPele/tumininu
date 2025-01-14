import * as React from "react";
import { NavigationItemProps } from "./NavigationTypes";

export const NavigationItem: React.FC<NavigationItemProps> = ({ label }) => {
  return (
    <button
      className="self-stretch my-auto hover:text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-950 rounded-sm"
      role="menuitem"
      tabIndex={0}
    >
      {label}
    </button>
  );
};
