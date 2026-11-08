"use client";

import { Scene } from "@gfazioli/mantine-scene";
import { Box, Button, Container, Group, Text, Title } from "@mantine/core";
import { mailtoFor } from "../../contants/contact";
import { SECTION } from "../../contants/layout";
import MapleOutline from "../../public/logo/maple-outline.svg";
import ctaClasses from "../Cta/Cta.module.css";
import classes from "./Hero.module.css";

const AURORA_COLORS = ["#92b7e7", "#5c92d9", "#7fd4e8", "#9c3f63"];
const FACTS = [
  "Capital markets",
  "Banking",
  "Insurance",
  "Financial software",
  "Consumer devices",
  "Est. 2015",
  "Toronto",
];

export function Hero() {
  return (
    <Box component="section" id="top" data-nav-section className={classes.hero}>
      <Scene lazy lazyThreshold={0.1}>
        <Scene.Aurora colors={AURORA_COLORS} bands={4} duration={16} opacity={0.45} blur={70} />
        <Scene.StarField count={300} color="white" seed={100} opacity={0.7} />
      </Scene>
      <MapleOutline aria-hidden className={classes.maple} />

      <Container size="lg" className={classes.content}>
        <Text className={`${classes.eyebrow} ${classes.rise}`} ff="monospace">
          FETCH. BUILD. SHIP.
        </Text>
        <Title order={1} className={`${classes.title} ${classes.rise}`}>
          Your hardest software, in production.
        </Title>
        <Text className={`${classes.subhead} ${classes.rise}`}>
          Doge Consulting has shipped trading platforms, tax products and banking tools since 2015.
          Now we help enterprise teams put AI to work and deliver faster.
        </Text>
        <Group justify="center" mt={40} className={classes.rise}>
          <Button
            component="a"
            href={mailtoFor("Project inquiry: hero")}
            size="lg"
            radius="md"
            className={ctaClasses.onDark}
          >
            Email us about your project
          </Button>
          <Button
            component="a"
            href={`#${SECTION.results.id}`}
            size="lg"
            radius="md"
            className={ctaClasses.ghostOnDark}
          >
            See the results
          </Button>
        </Group>

        <ul className={`${classes.facts} ${classes.rise}`}>
          {FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}
