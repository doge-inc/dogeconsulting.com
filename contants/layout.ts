/**
 * The maximum height of the header when the page is scrolled to the top.
 * Must match $header-height-max / $header-height-min in Header.module.css
 */
export const HEADER_HEIGHT = 120;

export const SECTION = {
    services: {
        id: "services",
        label: "Services",
    },
    projects: {
        id: "projects",
        label: "Projects",
    },
    contact: {
        id: "contact",
        label: "Contact",
    },
} as const;

export type SECTION = typeof SECTION[keyof typeof SECTION];