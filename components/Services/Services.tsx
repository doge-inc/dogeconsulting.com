"use client";

import { Card, Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { FiBox, FiCompass, FiCpu, FiGitMerge } from "react-icons/fi";
import { SECTION } from "../../contants/layout";

const services = [
  {
    icon: FiCompass,
    title: "Consultancy",
    description:
      "Technical strategy, architecture reviews, and hands-on guidance to help you make the right engineering decisions.",
  },
  {
    icon: FiBox,
    title: "Product Development",
    description:
      "End-to-end design and delivery of web products, from first prototype to production-ready platform.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "Bring LLMs and AI-powered features into your products and internal workflows in a practical, reliable way.",
  },
  {
    icon: FiGitMerge,
    title: "Dev Process Integration & Optimization",
    description:
      "Streamline CI/CD, tooling, and team workflows so your engineers ship faster with fewer surprises.",
  },
];

export function Services() {
  return (
    <Container size="lg" py={64} id={SECTION.services.id} style={{ scrollMarginTop: 64 }}>
      <Title order={2} ta="center">
        Our Services
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48}>
        How we can help your team
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {services.map((service) => (
          <Card key={service.title} withBorder radius="md" padding="lg">
            <ThemeIcon size={48} radius="md" variant="light">
              <service.icon size={24} />
            </ThemeIcon>
            <Title order={3} size="h4" mt="md">
              {service.title}
            </Title>
            <Text c="dimmed" mt="xs">
              {service.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
