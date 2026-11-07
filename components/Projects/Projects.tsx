"use client";

import { Flip } from "@gfazioli/mantine-flip";
import { Carousel } from "@mantine/carousel";
import { Badge, Button, Card, Container, Group, Text, Title } from "@mantine/core";
import { SECTION } from "../../contants/layout";
import { ProjectResults } from "./ProjectResults";
import { projects } from "./projects.json";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Container size="lg" py={64} id={SECTION.projects.id} className={styles.container}>
      <Title order={2} ta="center">
        Our Projects
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48}>
        Selected work delivered for enterprise teams
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
          <Carousel.Slide key={project.client}>
            <Flip w="100%" h={{ base: 350, xs: 400, sm: 400, lg: 320 }} easing="spring">
              <Flip.Front>
                <Card withBorder radius="md" padding="lg" h="100%">
                  <Text size="sm" fw={700} c="dimmed" tt="uppercase">
                    {project.client}
                  </Text>
                  <Title order={3} size="h4" mt="xs">
                    {project.title}
                  </Title>

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
                      <Button radius="md">More Info</Button>
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

                  <Group justify="right" mt="auto" pt="md">
                    <Flip.Target>
                      <Button radius="md">Back</Button>
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
