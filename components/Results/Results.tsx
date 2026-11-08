"use client";

import { Box, Card, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { type CSSProperties } from "react";
import { SECTION } from "../../contants/layout";
import { meters as METERS, stats as STATS } from "./results.json";
import classes from "./Results.module.css";

export function Results() {
  return (
    <Container
      size="lg"
      py={80}
      id={SECTION.results.id}
      data-nav-section
      style={{ scrollMarginTop: 64 }}
    >
      <Title order={2} ta="center" className="reveal">
        Results you can measure
      </Title>
      <Text c="dimmed" ta="center" mt="sm" mb={48} className="reveal">
        Our clients stay confidential. Their results don't have to.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {METERS.map((meter) => (
          <Card
            key={meter.value}
            withBorder
            radius="md"
            padding="xl"
            className={`${classes.meterCard} reveal`}
          >
            <Text className={classes.value}>{meter.value}</Text>
            <Text c="dimmed" mt={4}>
              {meter.label}
            </Text>

            <Box mt="lg">
              <Text size="sm" c="dimmed">
                {meter.before}
              </Text>
              <div className={classes.track} aria-hidden>
                <div className={classes.barBefore} />
              </div>

              <Text size="sm" fw={700} mt="sm">
                {meter.after}
              </Text>
              <div className={classes.track} aria-hidden>
                {/* afterPercent is the "after" bar as a percent of "before". For a range,
                    use its conservative end (30s → 2–3s is drawn at 3s of 30s). */}
                <div
                  className={classes.barAfter}
                  style={
                    {
                      width: `${meter.afterPercent}%`,
                      "--meter-from": 100 / meter.afterPercent,
                    } as CSSProperties
                  }
                />
              </div>
            </Box>
          </Card>
        ))}

        {STATS.map((stat) => (
          <Card key={stat.value} withBorder radius="md" padding="xl" className="reveal">
            <Text className={classes.value}>{stat.value}</Text>
            <Text c="dimmed" mt={4}>
              {stat.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
