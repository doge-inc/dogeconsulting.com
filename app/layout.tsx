import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { CONTACT_EMAIL } from "../contants/contact";
import { cssVariablesResolver, theme } from "../theme";

import "@mantine/core/styles.css";

import "@gfazioli/mantine-flip/styles.css";
import "@gfazioli/mantine-scene/styles.css";
import "@mantine/carousel/styles.css";
import "./global.css";

const SITE_URL = "https://dogeconsulting.com";
const TITLE = "Doge Consulting | Enterprise AI & Software Engineering";
const DESCRIPTION =
  "Toronto software consultancy, est. 2015. We ship trading platforms, tax products and banking tools, and help enterprise teams put AI to work and deliver faster.";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Doge Consulting: your hardest software, in production.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Doge Consulting",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Doge Consulting Inc.",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  foundingDate: "2015",
  description: DESCRIPTION,
  logo: `${SITE_URL}/logo/doge-inc-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" sizes="any" href="/favicon/favicon-32x32.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Clarity+City:wght@400..800&family=Nanum+Gothic+Coding&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          defaultColorScheme="auto"
          cssVariablesResolver={cssVariablesResolver}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
