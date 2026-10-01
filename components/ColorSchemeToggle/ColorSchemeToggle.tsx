"use client";

import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { FiMoon, FiSun } from "react-icons/fi";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  return (
    <ActionIcon
      variant="default"
      size="lg"
      radius="md"
      aria-label="Toggle color scheme"
      onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
    >
      <Box component="span" lightHidden>
        <FiSun size={18} />
      </Box>
      <Box component="span" darkHidden>
        <FiMoon size={18} />
      </Box>
    </ActionIcon>
  );
}
