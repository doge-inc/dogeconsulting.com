import { Footer } from "../components/Footer/Footer";
import { Projects } from "../components/Projects/Projects";
import { Services } from "../components/Services/Services";

/**
 * The maximum height of the header when the page is scrolled to the top.
 * Must match $header-height-max / $header-height-min in Header.module.css
 */
export const HEADER_HEIGHT = 120;

export const SECTION = {
    services: {
        id: "services",
        label: "Services",
        Component: Services,
        enabled: true,
    },
    projects: {
        id: "projects",
        label: "Projects",
        Component: Projects,
        enabled: false
    },
    contact: {
        id: "contact",
        label: "Contact",
        Component: Footer,
        enabled: true
    },
} as const;

export type SECTION = typeof SECTION[keyof typeof SECTION];