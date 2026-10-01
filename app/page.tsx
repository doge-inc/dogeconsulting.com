"use client";

import { AppShell } from "@mantine/core";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";

export default function HomePage() {
  return (
    <AppShell header={{ height: 64 }} padding={0}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Hero />
        <Services />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
