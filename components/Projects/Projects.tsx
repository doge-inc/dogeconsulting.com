import { Flip } from "@gfazioli/mantine-flip";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Container, Group, Text, Title } from "@mantine/core";
import { SECTION } from "../../contants/layout";

const projects = [
  { id: 1, title: "Project 1", description: "Description of project 1." },
  { id: 2, title: "Project 2", description: "Description of project 2." },
  { id: 3, title: "Project 3", description: "Description of project 3." },
  { id: 4, title: "Project 4", description: "Description of project 4." },
];

export function Projects() {
  return (
    <Container size="lg" py={64} id={SECTION.projects.id} style={{ scrollMarginTop: 64 }}>
      <Title order={2} ta="center">
        Our Projects
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48}>
        Some of our recent work
      </Text>

      <Carousel slideSize="30%" slideGap="xs" controlsOffset="sm" controlSize={20} withIndicators>
        {projects.map((project) => (
          <Carousel.Slide key={`project-${project.id}`}>
            <Flip w={450} h={200} easing="spring">
              <Flip.Front>
                <Card withBorder radius="md" padding="lg">
                  <Title order={3} size="h4" mt="md">
                    {project.title}
                  </Title>

                  <Text c="dimmed" mt="xs">
                    {project.description}
                  </Text>

                  <Group justify="right">
                    <Flip.Target>
                      <Button color="blue" mt="md" radius="md">
                        More Info
                      </Button>
                    </Flip.Target>
                  </Group>
                </Card>
              </Flip.Front>
              <Flip.Back>
                <Card withBorder radius="md" padding="lg">
                  <Title order={3} size="h4" mt="md">
                    {project.title} - More Info
                  </Title>

                  <Text c="dimmed" mt="xs">
                    This is the back side of the card for {project.title}. You can put more
                    information here.
                  </Text>

                  <Group justify="right">
                    <Flip.Target>
                      <Button color="blue" mt="md" radius="md">
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
