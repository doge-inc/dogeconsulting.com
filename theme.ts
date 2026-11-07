"use client";

import { generateColors } from "@mantine/colors-generator";
import {
  createTheme,
  virtualColor,
  type CSSVariablesResolver,
  type MantineColorsTuple,
} from "@mantine/core";

const navyDark: MantineColorsTuple = [
  "#d3dbe6",
  "#bcc7d6",
  "#8b9bb0",
  "#6c7d94",
  "#43526a",
  "#364560",
  "#283650",
  "#16233a",
  "#111c30",
  "#0a1424",
];

export const theme = createTheme({
  fontFamily: "'Clarity City', sans-serif",
  fontFamilyMonospace: "'Nanum Gothic Coding', monospace",

  primaryColor: "doge",
  primaryShade: { light: 7, dark: 8 },
  colors: {
    dark: navyDark,
    dogeLightPalette: generateColors("#92b7e7"),
    dogeDarkPalette: generateColors("#0a2446"),

    doge: virtualColor({
      name: "doge",
      light: "dogeLightPalette",
      dark: "dogeDarkPalette",
    }),
    dogeReversed: virtualColor({
      name: "dogeReversed",
      light: "dogeDarkPalette",
      dark: "dogeLightPalette",
    }),
  },
});

/** Mantine's default dimmed text fails AA contrast in both schemes. */
export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: { "--mantine-color-dimmed": "var(--mantine-color-gray-7)" },
  dark: { "--mantine-color-dimmed": "#adb5bd", "--mantine-color-anchor": "#92b7e7" },
});
