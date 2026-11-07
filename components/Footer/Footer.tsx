"use client";

import { Scene } from "@gfazioli/mantine-scene";
import { Anchor, Box, Button, Container, CopyButton, Group, Text, Title } from "@mantine/core";
import { FiCheck, FiCopy, FiMapPin } from "react-icons/fi";
import { CONTACT_EMAIL, mailtoFor } from "../../contants/contact";
import { SECTION } from "../../contants/layout";
import ctaClasses from "../Cta/Cta.module.css";
import classes from "./Footer.module.css";

const AURORA_COLORS = ["#92b7e7", "#5c92d9", "#7fd4e8"];

export function Footer() {
  return (
    <Box component="footer" id={SECTION.contact.id} data-nav-section className={classes.footer}>
      <Scene lazy lazyThreshold={0.1}>
        <Scene.Aurora colors={AURORA_COLORS} bands={3} duration={18} opacity={0.4} blur={70} />
      </Scene>

      <Container size="lg" className={classes.content}>
        <Title order={2} className={`${classes.title} reveal`}>
          What's stuck? Let's get it shipped.
        </Title>
        <Text className={`${classes.lead} reveal`}>
          Tell us what you're building and what's in the way.
        </Text>

        <Anchor
          href={mailtoFor("Project inquiry: contact")}
          className={`${classes.email} reveal`}
          underline="hover"
        >
          {CONTACT_EMAIL}
        </Anchor>

        <Group justify="center" mt="xl" className="reveal">
          <Button
            component="a"
            href={mailtoFor("Project inquiry: contact")}
            size="lg"
            radius="md"
            className={ctaClasses.onDark}
          >
            Email us about your project
          </Button>
          <CopyButton value={CONTACT_EMAIL} timeout={2000}>
            {({ copied, copy }) => (
              <Button
                size="lg"
                radius="md"
                onClick={copy}
                className={ctaClasses.ghostOnDark}
                leftSection={copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
              >
                {copied ? "Copied" : "Copy address"}
              </Button>
            )}
          </CopyButton>
        </Group>

        <Group gap="xs" justify="center" mt={48} className={classes.fineprint}>
          <FiMapPin aria-hidden />
          <Text inherit>Toronto, ON</Text>
        </Group>
        <Text size="sm" mt="xs" className={classes.fineprint}>
          &copy; {new Date().getFullYear()} Doge Consulting. All rights reserved. Fetch. Build.
          Ship. Eh? 🍁
        </Text>
      </Container>
    </Box>
  );
}
