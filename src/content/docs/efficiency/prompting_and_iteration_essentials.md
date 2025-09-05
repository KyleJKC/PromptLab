---
title: Prompting & Iteration Essentials
description: To be implemented.
---
> Practical patterns, tiny templates, and fast feedback loops to get useful results on the first try—and even better ones on the second.

## What you’ll learn

* The **80/20 structure** of a strong prompt (role → goal → inputs → constraints → format → guardrails)
* Five **reusable prompt patterns** that fit most school tasks
* A **minute-by-minute iteration loop** to refine drafts quickly
* How to **shape output** (headings, tables, JSON) and avoid common failure modes

---

## The 80/20 structure (copy this skeleton)

```text
ROLE: [stance, e.g., “precise, citation-aware study coach”]
GOAL: [one sentence on the task and outcome]
INPUTS: [paste cleaned notes, rubric snippets, allowed source excerpts with page #s]
CONSTRAINTS: [length range, tone, do/don’t, citation style, “no outside facts”]
SUCCESS CRITERIA: [3–5 bullet checks you’ll grade against]
GUARDRAILS: Use only INPUTS. If unsure, say “unknown.” Flag unsupported claims.
OUTPUT FORMAT: [exact headings / Markdown table / JSON schema]
PROCESS: First give a 1–2 sentence plan. Then produce the deliverable only.
```

---

## Pattern library (the only five you need)

### 1) Rubric-First (optimize for points)

Use when the grader has a rubric and you want the answer tuned to it.

```text
ROLE: TA optimizing for the rubric below.
GOAL: Produce a draft that maximizes the rubric score.
RUBRIC: [paste bullets with point values]
INPUTS: [your notes/sources]
CONSTRAINTS: Use only INPUTS; cite with (Author, year, p. X) if quoted.
OUTPUT FORMAT: Sectioned draft that mirrors rubric headings.
```

### 2) Socratic Tutor (learn by doing, not dumping)

Use to study: you answer, it nudges.

```text
ROLE: Socratic tutor.
GOAL: Help me master [topic].
RULES: Ask one focused question at a time. If I answer, critique briefly and ask the next. 
CONSTRAINTS: Explanations ≤3 sentences; no new topic until I get it right.
```

### 3) Checklist-First (reduce omissions)

Use for procedures (labs, reports, resumes, slide decks).

```text
ROLE: Checklist designer + editor.
GOAL: Create and apply a checklist for [task].
STAGE 1 (design): Draft a 10–12 item checklist aligned to this brief: [paste prompt/rubric].
STAGE 2 (apply): Evaluate my draft with the checklist and show: Pass/Fail + fix for each.
```

### 4) Counter-Arguer (stress-test weak points)

Use to toughen arguments or analyses.

```text
ROLE: Devil’s advocate.
GOAL: Identify the 3 strongest objections to my claim and how to pre-empt them.
INPUTS: [thesis + key reasons + evidence]
CONSTRAINTS: Use only contradictions implied by INPUTS or neutral sources I provided.
OUTPUT FORMAT: Table — Objection | Why it matters | Strongest rebuttal I can claim using INPUTS.
```

### 5) Plan-then-Do (reduce drift)

Use when the model wanders or formats poorly.

```text
ROLE: Planner then Executor.
GOAL: First propose a numbered plan, then await my “GO”.
INPUTS: [task and constraints]
OUTPUT FORMAT (plan): Step # | Purpose | Expected output fragment
AFTER “GO”: Produce the full deliverable exactly following the plan.
```

---

## Before/After example (see the difference)

**Weak prompt**

> “Write about CRISPR for my biology class.”

**Improved prompt (80/20 + rubric-first)**

```text
ROLE: Precise, citation-aware study writer.
GOAL: Draft a 600–700 word mini-review on CRISPR applications in medicine.
INPUTS: Lecture 7 notes + two assigned articles (Kim 2022 p.3–8; Patel 2021 p. 112–119): [paste excerpts].
CONSTRAINTS: Use only INPUTS; explain terms simply; 2 quoted sentences max with page #s; MLA.
SUCCESS CRITERIA:
- Introduce CRISPR mechanism clearly (≤120 words)
- Compare 2 clinical applications (edit types, trial stage)
- Discuss 2 risks + 2 mitigation strategies from sources
- Conclude with one open research question
OUTPUT FORMAT: H2 headings — Intro, Mechanism, Applications, Risks & Mitigations, Open Question, Works Cited.
RUBRIC: [paste points]
```

---

## The fast iteration loop (8–10 minutes total)

1. **Draft** (you already did with a good prompt)
2. **Critique (2 min)** — ask for a laser-focused review:

```text
Act as a strict TA. Score against this rubric and list the top 3 changes with examples. No rewrite yet.
[RUBRIC]
[DRAFT]
```

3. **Revise (3–6 min)** — targeted edit:

```text
Revise only these parts: [Intro, Risk section]. Keep length within [X–Y].
Constraints unchanged. Show only the revised sections.
```

4. **Verify (2 min)** — claims & citations:

```text
Extract all factual claims that require evidence. For each, show: claim | source (author, year, page) | evidence snippet. If unsupported by INPUTS, label “unsupported.”
```

> Tip: Keep revision prompts **small and specific** (sections, word ranges, “add one example,” “tighten sentences”).

---

## Output shaping (formats that grade well)

### A) Markdown table (research extraction)

```text
OUTPUT FORMAT (Markdown table):
| Claim | Source (author, year, page) | Evidence snippet | Confidence (1–5) |
```

### B) JSON schema (structured notes)

```text
Return JSON only:
{
  "concepts": [{"term": "", "definition": "", "example": ""}],
  "comparisons": [{"itemA": "", "itemB": "", "similarities": [], "differences": []}],
  "open_questions": [""]
}
```

### C) Heading skeleton (reports/essays)

```text
Use exactly these H2 headings:
- Introduction
- Key Concepts (3 bullets)
- Evidence & Examples
- Counterarguments & Limits
- Conclusion
```

### D) Math/code reasoning (no hidden deliberation)

```text
Show numbered solution steps with formulas and a brief justification for each. Avoid internal monologue. If a step depends on an assumption, state it explicitly.
```

---

## Troubleshooting (prompt surgery kit)

| Symptom                      | Surgical fix (paste into your next prompt)                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Wandering structure          | “Follow **exactly** these headings: \[list]. If a section is empty, write ‘(not applicable)’—do not invent content.”      |
| Hallucinated facts/citations | “Use only INPUTS. If a claim lacks support, write ‘unsupported’ and continue.” (Also paste source excerpts with page #s.) |
| Vague language               | “Replace abstract nouns with concrete nouns; show at least one named example per section.”                                |
| Over-length                  | “Rewrite to **≤600 words** while preserving all numbered points. Delete filler; prefer short sentences.”                  |
| Under-length                 | “Expand with **1** concrete example and **1** mini-explanation per main point. Stay ≤700 words.”                          |
| Flat tone                    | “Use plain, precise academic style. No hype words (‘revolutionary’, ‘groundbreaking’).”                                   |
| Format wrong                 | “Return **only** the Markdown table specified; no prose before/after.”                                                    |
| Weak analysis                | “Add a counterargument with evidence and a reasoned rebuttal using INPUTS only.”                                          |
| Code unclear                 | “Add minimal comments (why > what). Provide a 5-line test that demonstrates correctness.”                                 |

---

## Mini templates pack (drop-in)

### 1) Outline builder (any subject)

```text
ROLE: Outline architect for a student paper.
GOAL: Create a detailed outline (H2/H3) for [topic].
INPUTS: [thesis + 2–3 key sources with page #s]
CONSTRAINTS: Use only INPUTS; include 1 counterargument section; 3–5 bullets per H2.
OUTPUT FORMAT: Markdown headings and bullets.
```

### 2) Paragraph upgrade (clarity + evidence)

```text
ROLE: Clarity editor.
GOAL: Rewrite the paragraph to be clearer and evidence-backed.
INPUTS: [paragraph] + [source excerpts with page #s]
CONSTRAINTS: Keep all claims tied to a source; shorter sentences; no new facts.
OUTPUT FORMAT: Revised paragraph + 2 alt phrasings of the topic sentence.
```

### 3) Study Q generator (spaced repetition)

```text
ROLE: Study coach.
GOAL: Generate practice Q&A from my notes.
INPUTS: [notes]
CONSTRAINTS: Mix recall + application; answers ≤2 sentences; tag difficulty 1–3.
OUTPUT FORMAT (table):
| Question | Answer | Difficulty | Why it matters (≤12 words) |
```

### 4) Slide starter (5–7 slides)

```text
ROLE: Slide storyboarder.
GOAL: Produce a slide outline with speaker notes for [topic].
INPUTS: [key points + allowed sources]
CONSTRAINTS: 5–7 slides; 3 bullets/slide; 30–40 word notes; no outside facts.
OUTPUT FORMAT: 
Slide # — Title
- bullet
- bullet
- bullet
Notes: [30–40 words]
```

### 5) Coding: tests + explanation

```text
ROLE: Senior tutor in [language].
GOAL: Write minimal unit tests for this function and explain the bug/fix briefly.
INPUTS: [code snippet + expected behavior]
CONSTRAINTS: Explanation ≤6 lines; show fixed code if needed.
OUTPUT FORMAT:
1) One-paragraph diagnosis
2) Test code block
3) (If needed) Fixed code block
```

### 6) Citation formatter (APA/MLA/Chicago)

```text
ROLE: Citation formatter.
GOAL: Format these references in [APA/MLA/Chicago].
INPUTS: [raw refs or DOIs]
CONSTRAINTS: If any field is missing, flag it clearly; do not invent page numbers.
OUTPUT FORMAT: Bulleted list of formatted citations + a short list of missing fields.
```

---

## Style control (simple and reliable)

* **Provide a short sample** of the style you want (2–3 sentences) and say:
  *“Match this style by sentence rhythm and vocabulary level; do not copy wording.”*
* **Level cues**: “audience = first-year student,” “tone = neutral and precise,” “avoid figurative language,” “bullet density = 3–5 per section.”

---

## Guardrails to paste into serious prompts

* “Use only the provided INPUTS; if unsure, say ‘unknown’.”
* “Flag any claim that lacks a specific source excerpt as ‘unsupported’.”
* “Do not include content outside the OUTPUT FORMAT.”
* “If you must make an assumption, list it in a final ‘Assumptions’ bullet list.”

---

## Quick practice (5-minute workout)

1. Pick a current assignment.
2. Draft a **Rubric-First** prompt (2 min).
3. Generate a draft (1–2 min).
4. Run the **Critique** and **Revise** prompts (2 min).
5. Verify claims with the **Extraction Table**.

> Lock in the habit: small, specific prompts → quick critiques → targeted revisions.

---

## Save for your sidebar

* 80/20 prompt skeleton
* Five patterns (Rubric, Socratic, Checklist, Counter-Arguer, Plan-then-Do)
* Critique, Revise, Verify mini-prompts
* Output format snippets (table, JSON, headings)
* Troubleshooting “prompt surgery” lines
