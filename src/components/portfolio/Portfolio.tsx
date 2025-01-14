import * as React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import CustomDivider from "./components/CustomDivider";

export const Portfolio: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-10 pb-16 bg-orange-100 max-md:px-5">
      <Header />

      <CustomDivider />

      <Projects />

      <CustomDivider />

      <Footer />
    </main>
  );
};
