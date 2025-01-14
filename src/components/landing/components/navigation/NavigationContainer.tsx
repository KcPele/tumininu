import * as React from "react";
import { Navigation } from "./Navigation";

export const NavigationContainer: React.FC = () => {
  const navigationItems = [
    { label: "Home" },
    { label: "Playground" },
    { label: "Creative Writing" },
    { label: "Resume" },
    { label: "About Me" },
  ];

  return <Navigation brandName="Oluwatumininu" items={navigationItems} />;
};
