"use client";

import { Scene } from "@gfazioli/mantine-scene";
import { Button, Container, Text, Title } from "@mantine/core";

export function Hero() {
  return (
    <Container size="lg" py={{ base: 64, sm: 120 }} ta="center">
      <Scene lazy lazyThreshold={0.1}>
        <Scene.StarField count={150} color="blue.9" seed={20} opacity={0.8} />
      </Scene>
      <Title order={1} fz={{ base: 40, sm: 56 }}>
        Doge Consulting
      </Title>
      <Text size="xl" c="dimmed" mt="md" ta="center">
        Enterprise AI & Software Engineering. We help teams design, build, and ship better software,
        faster.
      </Text>
      <Button component="a" href="mailto:hello@dogeconsulting.com" size="lg" mt="xl">
        Get in touch
      </Button>
    </Container>
  );
}
