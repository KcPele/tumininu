import * as React from "react";
import { ProjectCard as ProjectCardType } from "../types";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

interface ProjectCardProps {
  project: ProjectCardType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex overflow-hidden flex-col px-6 pt-6 w-full bg-yellow-50 rounded-2xl border border-solid border-zinc-700 border-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-col text-xl max-md:max-w-full gap-4">
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            className="w-[166px]"
          />
          {project.link ? (
            <a
              href={project.link}
              className="hover:text-lime-700 text-base sm:text-xl underline focus:outline-none focus:ring-2 text-lime-950"
              tabIndex={0}
            >
              {project.link}
            </a>
          ) : (
            <p className="text-lime-950 text-base sm:text-xl">
              {" "}
              {project.subtitle}
            </p>
          )}
          <p className="mt-4 text-lime-950 text-base sm:text-xl max-md:max-w-full">
            {project.description}
          </p>
        </div>
        <a
          href={project.caseStudyUrl}
          className="flex overflow-hidden gap-3 justify-center items-center self-end px-4 py-2 mt-28 text-xs font-medium tracking-normal leading-none border border-solid shadow-sm border-lime-950 rounded-[56px] text-lime-950 max-md:mt-10 hover:bg-lime-950 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-lime-950"
          tabIndex={0}
        >
          <span>View Case Study</span>
          <LuArrowRight size={18} className="text-lime-950" />
        </a>
      </div>
      <div className="relative mt-6 w-full rounded-lg aspect-[1.66] max-md:max-w-full">
        <Image
          src={project.imageUrl}
          alt={`${project.title} project preview`}
          layout="fill"
          className="object-contain rounded-lg"
        />
      </div>
    </article>
  );
};
