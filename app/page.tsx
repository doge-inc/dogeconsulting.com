"use client";

import { AppShell } from "@mantine/core";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { HEADER_HEIGHT, SECTION } from "../contants/layout";

export default function HomePage() {
  return (
    <AppShell header={{ height: HEADER_HEIGHT }} padding={0}>
      <Header />
      <AppShell.Main>
        <Hero />

        {Object.values(SECTION)
          .filter(({ enabled }) => enabled)
          .map(({ id, Component }) => (
            <Component key={id} />
          ))}
      </AppShell.Main>
    </AppShell>
  );
}
