interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  href: string;
}

interface ProjectCard {
  logo: string;
  title: string;
  link?: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  caseStudyUrl: string;
}

export type { NavItem, SocialLink, ProjectCard };
