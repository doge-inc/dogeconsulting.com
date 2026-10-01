"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme, virtualColor } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "'Clarity City', sans-serif",
  fontFamilyMonospace: "'Nanum Gothic Coding', monospace",

  primaryColor: "doge",
  colors: {
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
  }
});
