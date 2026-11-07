"use client";

import { Anchor, AppShell, Button, Container, Group, Text } from "@mantine/core";
import { useScrollSpy } from "@mantine/hooks";
import { type CSSProperties } from "react";
import { mailtoFor } from "../../contants/contact";
import { HEADER_HEIGHT, SECTION } from "../../contants/layout";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import Logo from "../../public/logo/doge-inc-logo.svg";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import ctaClasses from "../Cta/Cta.module.css";
import classes from "./Header.module.css";

const SHRINK_HEADER_HEIGHT = 64;
const SHRINK_DISTANCE = HEADER_HEIGHT - SHRINK_HEADER_HEIGHT;

export function Header() {
  const shrink = useScrollProgress(SHRINK_DISTANCE);
  const { active, data } = useScrollSpy({
    selector: "[data-nav-section]",
    getDepth: () => 1,
    getValue: () => "",
    offset: SHRINK_HEADER_HEIGHT + 1,
  });
  const activeId = data[active]?.id;

  return (
    <AppShell.Header
      className={classes.header}
      style={{ "--header-shrink": shrink } as CSSProperties}
    >
      <Container size="lg" h="100%">
        <Group justify="space-between" h="100%" wrap="nowrap">
          <Anchor href="#" underline="never" c="white" aria-label="Doge Consulting, back to top">
            <Group gap="xs" wrap="nowrap">
              <Logo alt="Doge Consulting logo" className={classes.logo} />
              <Text fw={700} size="lg" visibleFrom="lg">
                Doge Consulting Inc.
              </Text>
            </Group>
          </Anchor>

          <Group gap="lg" wrap="nowrap">
            <Group gap="lg" visibleFrom="md" wrap="nowrap">
              {Object.values(SECTION)
                .filter(({ enabled }) => enabled)
                .map(({ id, label }) => (
                  <Anchor
                    key={id}
                    href={`#${id}`}
                    fw={500}
                    className={classes.navLink}
                    data-active={activeId === id || undefined}
                    aria-current={activeId === id ? "true" : undefined}
                  >
                    {label}
                  </Anchor>
                ))}
            </Group>
            <Button
              component="a"
              href={mailtoFor("Project inquiry: header")}
              radius="md"
              className={ctaClasses.onDark}
            >
              Email us
            </Button>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
