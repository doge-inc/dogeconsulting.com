"use client";

import { Anchor, Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import { FiMail, FiMapPin } from "react-icons/fi";
import { SECTION } from "../../contants/layout";

export function Footer() {
  return (
    <Box
      component="footer"
      id={SECTION.contact.id}
      py={48}
      style={{ borderTop: "1px solid var(--mantine-color-default-border)", scrollMarginTop: 64 }}
    >
      <Container size="lg">
        <Stack gap="sm">
          <Title order={2} size="h3">
            Contact us
          </Title>
          <Group gap="xs">
            <FiMail />
            <Anchor href="mailto:hello@dogeconsulting.com">hello@dogeconsulting.com</Anchor>
          </Group>
          <Group gap="xs">
            <FiMapPin />
            <Text>Toronto, ON</Text>
          </Group>
        </Stack>

        <Text c="dimmed" size="sm" mt={48}>
          &copy; {new Date().getFullYear()} Doge Consulting. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
