import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Process } from "../components/Process/Process";
import { Projects } from "../components/Projects/Projects";
import { Results } from "../components/Results/Results";
import { Services } from "../components/Services/Services";

/**
 * The maximum height of the header when the page is scrolled to the top.
 * Must match $header-height-max / $header-height-min in Header.module.css
 */
export const HEADER_HEIGHT = 120;

export const SECTION = {
  results: {
    id: "results",
    label: "Results",
    Component: Results,
    enabled: true,
  },
  services: {
    id: "services",
    label: "Services",
    Component: Services,
    enabled: true,
  },
  process: {
    id: "process",
    label: "Process",
    Component: Process,
    enabled: true,
  },
  projects: {
    id: "projects",
    label: "Projects",
    Component: Projects,
    enabled: true,
  },
  about: {
    id: "about",
    label: "About",
    Component: About,
    enabled: true,
  },
  contact: {
    id: "contact",
    label: "Contact",
    Component: Footer,
    enabled: true,
  },
} as const;

export type SECTION = (typeof SECTION)[keyof typeof SECTION];
