"use client";

import { Flip } from "@gfazioli/mantine-flip";
import { Carousel } from "@mantine/carousel";
import { Anchor, Badge, Button, Card, Container, Group, Text, Title } from "@mantine/core";
import { mailtoFor } from "../../contants/contact";
import { SECTION } from "../../contants/layout";
import ctaClasses from "../Cta/Cta.module.css";
import { ProjectResults } from "./ProjectResults";
import { projects } from "./projects.json";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Container
      size="lg"
      py={64}
      id={SECTION.projects.id}
      data-nav-section
      className={styles.container}
    >
      <Title order={2} ta="center" className="reveal">
        Our Projects
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48} className="reveal">
        Selected work delivered for enterprise teams. Flip a card to see the results.
      </Text>

      <Carousel
        slideSize={{ base: "100%", lg: "50%" }}
        slideGap="md"
        controlSize={32}
        controlsOffset={0}
        withIndicators
        emblaOptions={{ align: "start" }}
        pb={44}
        classNames={{
          controls: styles.carouselControls,
          indicators: styles.carouselIndicators,
          indicator: styles.carouselIndicator,
        }}
      >
        {projects.map((project) => (
          <Carousel.Slide key={project.title}>
            <Flip w="100%" h={{ base: 500, xs: 430, sm: 410, lg: 400 }} easing="spring">
              <Flip.Front>
                <Card withBorder radius="md" padding="lg" h="100%">
                  <Text size="sm" fw={700} c="dimmed" tt="uppercase">
                    {project.client}
                  </Text>
                  <Title order={3} size="h4" mt="xs">
                    {project.title}
                  </Title>

                  {project.highlight && (
                    <Text mt="md">
                      <span className={styles.highlightValue}>{project.highlight.value}</span>{" "}
                      <Text span size="sm" c="dimmed">
                        {project.highlight.label}
                      </Text>
                    </Text>
                  )}

                  <Text c="dimmed" mt="md">
                    {project.summary}
                  </Text>

                  <Group gap="xs" mt="auto" pt="md">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="light" tt="none">
                        {tag}
                      </Badge>
                    ))}
                  </Group>

                  <Group justify="right" pt="md">
                    <Flip.Target>
                      <Button radius="md" className={ctaClasses.onSurface}>
                        See results
                      </Button>
                    </Flip.Target>
                  </Group>
                </Card>
              </Flip.Front>
              <Flip.Back>
                <Card withBorder radius="md" padding="lg" h="100%">
                  <Text size="sm" fw={700} c="dimmed" tt="uppercase">
                    {project.client}
                  </Text>
                  <Title order={3} size="h4" mt="xs">
                    {project.title}
                  </Title>

                  <ProjectResults results={project.results} />

                  <Group justify="space-between" mt="auto" pt="md">
                    <Anchor
                      href={mailtoFor(`Project inquiry: similar to ${project.title}`)}
                      fw={600}
                      size="sm"
                    >
                      Need something similar?
                    </Anchor>
                    <Flip.Target>
                      <Button radius="md" className={ctaClasses.onSurface}>
                        Back
                      </Button>
                    </Flip.Target>
                  </Group>
                </Card>
              </Flip.Back>
            </Flip>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
