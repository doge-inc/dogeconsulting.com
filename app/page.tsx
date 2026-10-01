"use client";

import { AppShell } from "@mantine/core";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { HEADER_HEIGHT } from "../contants/layout";

export default function HomePage() {
  return (
    <AppShell header={{ height: HEADER_HEIGHT }} padding={0}>
      <Header />
      <AppShell.Main>
        <Hero />
        <Services />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
