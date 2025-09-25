// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      customCss: [
        "@fontsource/poppins/400.css",
        "@fontsource/poppins/600.css",
        "./src/styles/custom.css",
      ],
      favicon: "/favicon.ico",
      title: "Prompt Lab",
      logo: {
        light: "./src/assets/promptlab_light.webp",
        dark: "./src/assets/promptlab_dark.webp",
        replacesTitle: true,
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        },
        {
          tag: "link",
          attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        },
        { tag: "link", attrs: { rel: "manifest", href: "/site.webmanifest" } },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/KyleJKC",
        },
      ],
      sidebar: [
        { label: "Getting Started", slug: "getting_started" },
        {
          label: "Efficiency",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
          items: [
            { label: "What can AI do?", slug: "efficiency/what_can_ai_do" },
            {
              label: "Prompting Essentials",
              slug: "efficiency/prompting_essentials",
            },
            {
              label: "STEM Guidance & Problem-Solving with AI",
              slug: "efficiency/stem_and_problem_solving",
            },
            {
              label: "Humanities Help & Critical Reading",
              slug: "efficiency/humanities_and_critical_reading",
            },
          ],
        },
        {
          label: "Ethics",
          items: [
            {
              label: "Academic Integrity & Plagiarism",
              slug: "ethics/academic_integrity_and_plagiarism",
            },
            {
              label: "Attribution & How to Cite AI",
              slug: "ethics/attribution_and_how_to_cite_ai",
            },
          ],
        },
        {
          label: "Tools",
          items: [
            { label: "Starter Stack", slug: "tools/starter_stack" },
            {
              label: "Math and Coding",
              slug: "tools/math_and_coding",
            },
            {
              label: "Writing, Text, and Document",
              slug: "tools/writing_text_and_document",
            },
          ],
        },
        {
          label: "Appendix",
          autogenerate: { directory: "appendix" },
        },
      ],
    }),
  ],
});
