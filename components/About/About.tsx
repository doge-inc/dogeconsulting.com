"use client";

import { Avatar, Container, Group, Stack, Text, Title } from "@mantine/core";
import { SECTION } from "../../contants/layout";
import { founder as FOUNDER } from "./about.json";

export function About() {
  return (
    <Container
      size="md"
      py={64}
      id={SECTION.about.id}
      data-nav-section
      style={{ scrollMarginTop: 64 }}
    >
      <Group gap="xl" align="center" wrap="wrap" justify="center" className="reveal">
        <Avatar src={FOUNDER.photo} alt={FOUNDER.name} size={160} radius="50%" />
        <Stack gap="xs" flex="1 1 320px">
          <Title order={2}>{FOUNDER.name}</Title>
          <Text fw={600}>{FOUNDER.role}</Text>
          {FOUNDER.bio.map((paragraph) => (
            <Text key={paragraph} c="dimmed">
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Group>
    </Container>
  );
}
