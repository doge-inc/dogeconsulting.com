"use client";

import { Anchor, AppShell, Container, Group, Text } from "@mantine/core";
import { type CSSProperties } from "react";
import { HEADER_HEIGHT, SECTIONS } from "../../contants/layout";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import Logo from "../../public/logo/doge-inc-logo.svg";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import classes from "./Header.module.css";

const SHRINK_HEADER_HEIGHT = 64;
const SHRINK_DISTANCE = HEADER_HEIGHT - SHRINK_HEADER_HEIGHT;

export function Header() {
  const shrink = useScrollProgress(SHRINK_DISTANCE);

  return (
    <AppShell.Header
      className={classes.header}
      style={{ "--header-shrink": shrink } as CSSProperties}
    >
      <Container size="lg" h="100%">
        <Group justify="space-between" h="100%">
          <Anchor href="#" underline="never" c="inherit">
            <Group gap="xs">
              <Logo alt="Doge Consulting logo" className={classes.logo} />
              <Text fw={700} size="lg" visibleFrom="sm">
                Doge Consulting Inc.
              </Text>
            </Group>
          </Anchor>

          <Group gap="lg">
            <Group gap="lg" visibleFrom="sm">
              {SECTIONS.map(({ href, label }) => (
                <Anchor key={href} href={href} c="dimmed" fw={500}>
                  {label}
                </Anchor>
              ))}
            </Group>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
