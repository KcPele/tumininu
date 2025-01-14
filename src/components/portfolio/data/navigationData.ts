import { NavItem, SocialLink, ProjectCard } from "../types";

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Playground", href: "/playground" },
  { label: "Creative Writing", href: "/writing" },
  { label: "Resume", href: "/resume" },
  { label: "About Me", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  { platform: "Gmail", href: "#" },
  { platform: "Behance", href: "#" },
  { platform: "Dribble", href: "#" },
  { platform: "LinkedIn", href: "#" },
  { platform: "Medium", href: "#" },
  { platform: "Notion", href: "#" },
  { platform: "Substack", href: "#" },
  { platform: "Twitter", href: "#" },
];

export const projects: ProjectCard[] = [
  {
    logo: "/svg/metrbot.svg",
    title: "MetrBot",
    subtitle: "MetrBot",
    description:
      "A robot that makes trading on the blockchain the easiest thing to do.",
    imageUrl: "/images/metrbot.png",
    caseStudyUrl: "#",
  },
  {
    logo: "/svg/web3bridge.svg",
    title: "Web3Bridge",
    link: "web3bridgeafrica.com",
    description:
      "Designed the learning management system for the largest blockchain school in Africa",
    imageUrl: "/images/web3bridge.png",
    caseStudyUrl: "#",
  },
  {
    logo: "/svg/custos.svg",
    title: "CUFOS",
    link: "cufos.com",
    description:
      "Designed the first ever onchain crime-scene recorder—Custos Diretriz",
    imageUrl: "/images/custos.png",
    caseStudyUrl: "#",
  },
];
