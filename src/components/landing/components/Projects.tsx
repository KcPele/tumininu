import React from "react";
import { projects } from "../data/navigationData";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mt-20 max-w-[1110px] w-full max-md:mt-10">
      <h2 className="text-2xl font-bold text-center text-lime-950">
        Web 3.0 and the Blockchain
      </h2>
      <div className="flex flex-col mt-6 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
