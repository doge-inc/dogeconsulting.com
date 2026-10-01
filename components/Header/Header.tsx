"use client";

import { Anchor, Container, Group, Image, Text } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" h="100%">
        <Anchor href="#" underline="never" c="inherit">
          <Group gap="xs">
            <Image src="/favicon/favicon.svg" alt="Doge Consulting logo" w={32} h={32} />
            <Text fw={700} size="lg">
              Doge Consulting
            </Text>
          </Group>
        </Anchor>

        <Group gap="lg">
          <Group gap="lg" visibleFrom="sm">
            {links.map((link) => (
              <Anchor key={link.href} href={link.href} c="dimmed" fw={500}>
                {link.label}
              </Anchor>
            ))}
          </Group>
          <ColorSchemeToggle />
        </Group>
      </Group>
    </Container>
  );
}
