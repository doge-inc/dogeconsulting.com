"use client";

import { Anchor, Card, Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { type PointerEvent } from "react";
import { FiArrowRight, FiBox, FiCompass, FiCpu, FiGitMerge } from "react-icons/fi";
import { mailtoFor } from "../../contants/contact";
import { SECTION } from "../../contants/layout";
import classes from "./Services.module.css";

const services = [
  {
    icon: FiCompass,
    title: "Consultancy",
    description:
      "Make the big technical calls with confidence, with strategy, architecture reviews and hands-on guidance.",
  },
  {
    icon: FiBox,
    title: "Product Development",
    description:
      "Get from first prototype to production-ready platform, with design and delivery handled end to end.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "Put LLMs to work in your products and internal workflows, in a way that's practical and reliable.",
  },
  {
    icon: FiGitMerge,
    title: "Dev Process Integration & Optimization",
    description:
      "Ship faster with fewer surprises, by streamlining CI/CD, tooling and team workflows.",
  },
];

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
        {services.map((service) => (
          <Card
            key={service.title}
            withBorder
            radius="md"
            padding="lg"
            className={`${classes.card} reveal`}
            onPointerMove={trackGlow}
          >
            <ThemeIcon size={48} radius="md" variant="light">
              <service.icon size={24} />
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
        ))}
      </SimpleGrid>
    </Container>
  );
}
