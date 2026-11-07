"use client";

import { Box, Container, Text, Title } from "@mantine/core";
import { SECTION } from "../../contants/layout";
import classes from "./Process.module.css";

const STEPS = [
  {
    title: "Fetch",
    description: "We dig into your code, constraints and goals, and bring back what matters.",
  },
  {
    title: "Build",
    description: "We work alongside your team, shipping in small, reviewable steps.",
  },
  {
    title: "Ship",
    description: "Into production, with your team ready to own it.",
  },
];

export function Process() {
  return (
    <Box
      component="section"
      id={SECTION.process.id}
      data-nav-section
      className={classes.section}
      py={80}
    >
      <Container size="lg">
        <Title order={2} ta="center" className="reveal">
          How we work
        </Title>
        <Text c="dimmed" ta="center" mt="sm" mb={56} className="reveal">
          Three steps from problem to production
        </Text>

        <ol className={classes.steps}>
          <span className={classes.line} aria-hidden />
          {STEPS.map((step, index) => (
            <li key={step.title} className={`${classes.step} reveal`}>
              <span className={classes.number} aria-hidden>
                {index + 1}
              </span>
              <div>
                <Title order={3} size="h3">
                  {step.title}.
                </Title>
                <Text c="dimmed" mt="xs">
                  {step.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Box>
  );
}
