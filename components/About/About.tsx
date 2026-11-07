"use client";

import { Avatar, Container, Group, Stack, Text, Title } from "@mantine/core";
import { SECTION } from "../../contants/layout";

// Placeholders: replace all three, then set `enabled: true` for this section in contants/layout.ts.
// Keep the bio free of client names.
const FOUNDER = {
  name: "Founder name",
  role: "Founder",
  bio: "Founder bio goes here.",
  photo: null as string | null,
};

export function About() {
  return (
    <Container
      size="md"
      py={64}
      id={SECTION.about.id}
      data-nav-section
      style={{ scrollMarginTop: 64 }}
    >
      <Group gap="xl" align="center" wrap="wrap" justify="center">
        <Avatar src={FOUNDER.photo} alt={FOUNDER.name} size={160} radius="50%" />
        <Stack gap="xs" flex="1 1 320px">
          <Title order={2}>{FOUNDER.name}</Title>
          <Text fw={600}>{FOUNDER.role}</Text>
          <Text c="dimmed">{FOUNDER.bio}</Text>
        </Stack>
      </Group>
    </Container>
  );
}
