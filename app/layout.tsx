import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "../theme";

export const metadata = {
  title: "Doge Consulting Inc.",
  description: "Fetch. Build. Ship. Eh? 🍁",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <style>
          {`
      :root {
        --bg-color: #0f172a;
        --text-main: #f8fafc;
        --text-muted: #94a3b8;
        --accent: #e2e8f0;
        --accent-hover: #38bdf8;
        --card-bg: #1e293b;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family:
          -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg-color);
        color: var(--text-main);
        line-height: 1.6;
        padding: 2rem 1rem;
      }

      .container {
        max-width: 680px;
        margin: 0 auto;
      }

      header {
        margin-bottom: 3rem;
        text-align: center;
      }

      header h1 {
        font-size: 2.5rem;
        font-weight: 800;
        letter-spacing: -0.05em;
        margin-bottom: 0.5rem;
        background: linear-gradient(to right, #f8fafc, #94a3b8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      header p {
        color: var(--text-muted);
        font-size: 1.15rem;
      }

      section {
        margin-bottom: 3rem;
      }

      section h2 {
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        margin-bottom: 1rem;
        border-bottom: 1px solid #334155;
        padding-bottom: 0.5rem;
      }

      .description {
        font-size: 1.1rem;
        color: #cbd5e1;
      }

      .project-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .project-card {
        background-color: var(--card-bg);
        padding: 1.25rem;
        border-radius: 8px;
        border: 1px solid #334155;
        transition:
          transform 0.2s ease,
          border-color 0.2s ease;
      }

      .project-card:hover {
        border-color: #475569;
        transform: translateY(-2px);
      }

      .project-card h3 {
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
        color: #f1f5f9;
      }

      .project-card p {
        color: var(--text-muted);
        font-size: 0.95rem;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .contact-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #1e293b;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #334155;
      }

      .contact-item span {
        color: var(--text-muted);
        font-size: 0.9rem;
      }

      .contact-item a {
        color: var(--text-main);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;
      }

      .contact-item a:hover {
        color: var(--accent-hover);
      }

      footer {
        text-align: center;
        margin-top: 5rem;
        color: #475569;
        font-size: 0.85rem;
      }`}
        </style>
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
