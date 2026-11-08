"use client";

import { Anchor, Card, Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { type PointerEvent } from "react";
import { type IconType } from "react-icons";
import { FiArrowRight, FiBox, FiCompass, FiCpu, FiGitMerge } from "react-icons/fi";
import { mailtoFor } from "../../contants/contact";
import { SECTION } from "../../contants/layout";
import { services } from "./services.json";
import classes from "./Services.module.css";

const ICONS: Record<string, IconType> = {
  compass: FiCompass,
  box: FiBox,
  cpu: FiCpu,
  "git-merge": FiGitMerge,
} as const;

function trackGlow({ currentTarget, clientX, clientY }: PointerEvent<HTMLElement>) {
  const { left, top } = currentTarget.getBoundingClientRect();
  currentTarget.style.setProperty("--glow-x", `${clientX - left}px`);
  currentTarget.style.setProperty("--glow-y", `${clientY - top}px`);
}

export function Services() {
  return (
    <Container
      size="lg"
      py={64}
      id={SECTION.services.id}
      data-nav-section
      style={{ scrollMarginTop: 64 }}
    >
      <Title order={2} ta="center" className="reveal">
        Our Services
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48} className="reveal">
        How we can help your team
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {services.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <Card
              key={service.title}
              withBorder
              radius="md"
              padding="lg"
              className={`${classes.card} reveal`}
              onPointerMove={trackGlow}
            >
              <ThemeIcon size={48} radius="md" variant="light">
                <Icon size={24} />
              </ThemeIcon>
              <Title order={3} size="h4" mt="md">
                {service.title}
              </Title>
              <Text c="dimmed" mt="xs">
                {service.description}
              </Text>
              <Anchor
                href={mailtoFor(`Project inquiry: ${service.title}`)}
                fw={600}
                mt="md"
                aria-label={`Talk to us about ${service.title}`}
                className={classes.link}
              >
                Talk to us about this <FiArrowRight aria-hidden />
              </Anchor>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
