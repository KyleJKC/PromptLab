// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://promptlab.kylejin.com",
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
        // SEO Meta Tags
        {
          tag: "meta",
          attrs: {
            name: "description",
            content: "Learn to use AI efficiently and ethically to save time without crossing lines. Boost productivity, learn ethics, and find the best AI tools.",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content: "AI, artificial intelligence, prompt engineering, AI ethics, productivity, AI tools, academic integrity, AI learning, prompt lab",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "author",
            content: "Prompt Lab",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        },
        // Open Graph Tags
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "Prompt Lab - Learn how to use AI efficiently and ethically",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "Learn to use AI efficiently and ethically to save time without crossing lines. Boost productivity, learn ethics, and find the best AI tools.",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://promptlab.kylejin.com",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://promptlab.kylejin.com/src/assets/hero.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Prompt Lab",
          },
        },
        // Twitter Card Tags
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: "Prompt Lab - Learn how to use AI efficiently and ethically",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:description",
            content: "Learn to use AI efficiently and ethically to save time without crossing lines. Boost productivity, learn ethics, and find the best AI tools.",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://promptlab.kylejin.com/src/assets/hero.png",
          },
        },
        // Favicon and App Icons
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
        // Canonical URL
        {
          tag: "link",
          attrs: {
            rel: "canonical",
            href: "https://promptlab.kylejin.com",
          },
        },
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
    sitemap({
      filter: (page) => !page.includes('404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    }),
  ],
});
