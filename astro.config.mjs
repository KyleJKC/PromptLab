// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import starlightThemeRapide from "starlight-theme-rapide";

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
      title: "Prompt Lab",
      logo: {
        src: "./src/assets/logo.png",
      },
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
            { label: "Working With AI", slug: "efficiency/working_with_ai" },
            { label: "Prompting & Iteration Essentials", slug: "efficiency/prompting_and_iteration_essentials" },
            { label: "Research & Fact-Checking with AI", slug: "efficiency/research_and_fact_checking_with_ai" },
            { label: "Writing & Studying Workflows", slug: "efficiency/writing_and_studying_workflows" },
          ],
        },
        {
          label: "Ethics",
          items: [
            { label: "Academic Integrity & Plagiarism", slug: "ethics/academic_integrity_and_plagiarism" },
            { label: "Attribution & How to Cite AI", slug: "ethics/attribution_and_how_to_cite_ai" },
            { label: "Privacy, Bias & Safety (Student Basics)", slug: "ethics/privacy_bias_and_safety_student_basics" },
            { label: "Transparency & Audit Trail (Lightweight)", slug: "ethics/transparency_and_audit_trail_lightweight" },
          ],
        },
        {
          label: "Tools",
          items: [
            { label: "Starter Stack", slug: "tools/starter_stack" },
            { label: "Research & Citation Helpers", slug: "tools/research_and_citation_helpers" },
            { label: "Writing, Slides & Note-Taking", slug: "tools/writing_slides_and_note_taking" },
            { label: "Coding & Math Assist", slug: "tools/coding_and_math_assist" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
