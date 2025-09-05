---
title: Working With AI
description: A 15-minute primer to get reliable, useful work from AI—without getting burned.
---
> A 15-minute primer to get reliable, useful work from AI—without getting burned.

## What you’ll learn

* When AI **helps** vs. **hurts** for school work
* A **4-step workflow** you can reuse on any assignment
* How to **frame tasks** and give AI the right context
* What to **paste** (and what to **redact**)
* Quick **quality checks** to avoid errors or plagiarism
* Ready-to-paste **prompt templates** for common tasks

---

## TL;DR (one-page checklist)

1. **Frame the task** → goal, deliverable, audience, constraints, success criteria
2. **Feed the right context** → notes, rubric, sources; redact private info
3. **Shape the output** → exact format (outline/table/JSON), length, tone
4. **QA & iterate** → check facts, cite sources, revise with a rubric

Copy/paste this mini prompt on any task:

```text
ROLE: You are a concise academic assistant for a college student.
GOAL: [state the task in one sentence].
DELIVERABLE: [outline/essay/plan/table] of about [length].
AUDIENCE: [professor/classmates/beginner].
INPUTS: [paste notes/sources/rubric excerpts].
CONSTRAINTS: [tone, style, must/must-not, formatting].
SUCCESS CRITERIA: [3–5 bullet checks].
OUTPUT FORMAT: [exact headings, bullet list, or JSON schema].
Start with a 1-sentence plan, then produce the deliverable.
```

---

## Where AI helps vs. hurts

| Good fit (use it)                                           | Risky / bad fit (avoid or use with caution)                |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| Brainstorming, outlining, structuring arguments             | Take-home exams or assignments where AI use is disallowed  |
| Summarizing readings; explaining concepts in plain language | “Final” citations or quotes without checking originals     |
| Drafting emails, cover letters, study guides                | Content requiring lived experience or confidential details |
| Generating practice questions and answers                   | Novel claims or statistics without sources                 |
| Code scaffolding, debugging hints, test cases               | Math proofs/derivations with opaque steps                  |
| Slide outlines, talking points, checklists                  | Anything you cannot verify in time                         |

> Rule of thumb: **Use AI to think *with* you, not *for* you.** Treat outputs as a **first draft**, not the final submission.

---

## A simple reusable workflow (4 steps)

### 1) Frame the task (2 minutes)

Fill an **Assignment Card** before you ask AI:

* **Goal**: What outcome do I want?
* **Deliverable**: What format? (outline, problem plan, table, code)
* **Audience**: Who reads this? (professor, peers, beginner)
* **Inputs**: What must it use? (notes, rubric, sources)
* **Constraints**: Tone, length, must/must-not, citation style
* **Success criteria**: 3–5 bullets you’ll check at the end

**Example – Psych 101 reflection (500 words)**

* Goal: Analyze sleep and memory consolidation, apply to exam prep
* Deliverable: 5-paragraph reflection, MLA in-text cites
* Audience: Instructor
* Inputs: Lecture 5 notes + two assigned articles
* Constraints: 450–550 words, no new sources, active voice
* Success: Accurate concepts; 1 classroom example; 1 practical takeaway; MLA formatting

### 2) Feed context (3–5 minutes)

Paste only what helps the model succeed:

* **Essential notes** (cleaned of clutter)
* **Prompts or questions** from the assignment
* **Rubric snippets** (the parts you’ll be graded on)
* **Excerpts** from allowed sources (with page numbers)

**Redact/avoid**: full names, student IDs, emails, proprietary or personal data, entire textbooks.

### 3) Shape the output (ask precisely)

Tell the model:

* **Structure**: “Use H2 headings: Introduction, Methods, Results…”
* **Length**: “About 300 words ±10%”
* **Style**: “Plain, precise, no filler; define terms briefly”
* **Format**: “Return as a Markdown table” or “JSON with keys: claim, evidence, citation”
* **Boundaries**: “Use only the provided sources; if unsure, say so”

### 4) QA & iterate (2–8 minutes)

* **Content check**: Does it meet your success criteria?
* **Source check**: Are claims backed by the provided sources?
* **Citation check**: Are quotes accurate? Do page numbers exist?
* **Style check**: Tone, clarity, assignment fit
* **Revise**: Paste the draft back with a **brief, specific** revision request.

**Good revision prompt**

```text
Revise the draft to better meet the rubric: 
- Add 1 concrete classroom example (not generic).
- Tighten sentences for clarity; remove filler.
- Keep it within 500 ±50 words.
- Preserve only claims present in the provided sources.
Show only the revised draft.
```

---

## Prompt anatomy (fast reference)

* **Role** — sets stance (e.g., “You’re a meticulous, citation-aware study coach.”)
* **Goal** — one clear sentence
* **Inputs** — the *usable* context (notes, rubric, source snippets)
* **Constraints** — tone, length, must/must-not
* **Success criteria** — how you’ll grade the output
* **Output format** — the exact structure

---

## What to paste—and what to redact

**Paste**

* Cleaned notes, key quotes with page numbers, problem statement, rubric criteria, allowed sources/excerpts.

**Redact/avoid**

* Personally identifiable info (names, IDs, emails), private data about others, entire copyrighted works, anything your course forbids sharing.

**Safer alternatives**

* Replace names with roles (“Participant A”), paste **excerpts** not whole PDFs, summarize sensitive sections yourself.

---

## When *not* to use AI (student edition)

* Your instructor or policy **prohibits** it for the task
* **Exams/quizzes** or timed assessments unless explicitly allowed
* Assignments testing **your personal reflection** or **original fieldwork**
* When you **can’t verify** sources or claims in time

If in doubt, ask your instructor and briefly **disclose** permitted AI use (see template below).

---

## Quick quality bars (use before you submit)

**10-point checklist**

1. Goal and deliverable match the assignment
2. Uses only allowed sources
3. All factual claims trace to a source or your notes
4. No made-up citations or page numbers
5. Clear structure; headings match the prompt
6. Tone and length fit instructions
7. Quotations accurate and clearly marked
8. Original contribution present (analysis, reflection, code comments)
9. No filler; sentences are specific and concrete
10. Brief AI-use disclosure prepared (if required)

**Self-check prompt**

```text
Act as a strict TA. Using the rubric below, score this draft and list the top 3 changes that would raise the grade. Then show a revised outline only.
[RUBRIC EXCERPT]
[DRAFT]
```

---

## Troubleshooting (fast fixes)

| Symptom                      | Try this                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| Generic answers              | Add audience, length, and a short style sample; supply a concrete example to mimic |
| Hallucinated facts/citations | Say “Use only these sources; if unsure, say ‘unknown’.” Paste excerpts, not titles |
| Wrong structure/format       | Specify exact headings or a JSON/table schema                                      |
| Too long/short               | Add a word range and “Do not exceed X words”                                       |
| Off-topic                    | Restate the goal in one line; add 3 bullets of what to include/exclude             |
| Hand-wavy analysis           | Give a mini-rubric with point values and ask it to optimize against it             |
| Weak study aids              | Ask for spaced-repetition style Q\&A with difficulty tags                          |

---

## Mini templates (copy-paste)

### A) Study guide from messy notes

```text
ROLE: You are a study coach who organizes notes for spaced repetition.
GOAL: Turn my messy notes into a concise study guide.
INPUTS: [paste notes]
CONSTRAINTS: Use only my notes; no outside facts. Explanations ≤2 sentences each.
SUCCESS CRITERIA: 
- Key terms with crisp definitions
- 10 practice Q&A (mix of recall and application)
- 3 common misconceptions and corrections
OUTPUT FORMAT:
1) Bullet list of key terms → definition (max 20 bullets)
2) Table: Question | Answer | Difficulty (1–3) | Why it matters (≤15 words)
3) Misconceptions (3) → corrections
```

### B) Research claim-check

```text
ROLE: Evidence checker.
GOAL: Extract claims and match them to evidence from the provided sources only.
INPUTS: [paste excerpts with citations/pages]
CONSTRAINTS: If no supporting evidence exists, label the claim as “unsupported.”
OUTPUT FORMAT (Markdown table):
| Claim | Source (author, year, page) | Evidence snippet | Confidence (1–5) |
```

### C) First-draft email to a professor

```text
ROLE: Polite, concise student email assistant.
GOAL: Draft an email.
CONTEXT: [class, assignment, issue, deadline]
CONSTRAINTS: 100–150 words, respectful tone, clear ask, specific next step.
OUTPUT FORMAT: Subject line + email body. No placeholders.
```

### D) Code helper (explain + tests)

```text
ROLE: Senior tutor for [language].
GOAL: Explain the bug and propose a fix with tests.
INPUTS: [paste minimal reproducible snippet + expected behavior]
CONSTRAINTS: Keep explanations brief; show revised code and a minimal test.
OUTPUT FORMAT:
1) One-paragraph diagnosis
2) Revised code block
3) Test code block
```

---

## Light disclosure templates (use when required)

* **Methods note (paper/report):**
  *“An AI assistant was used for brainstorming and outlining based on my notes and assigned readings. All claims and citations were verified against the original sources by the author.”*

* **Cover memo (assignment submission):**
  *“AI was used to draft an initial outline and to generate practice questions. Final prose, analysis, and citations are my own.”*

---

## Save this page’s essentials (for your sidebar)

* Assignment Card (goal, deliverable, audience, inputs, constraints, success)
* 4-step workflow: Frame → Feed → Shape → QA
* Mini prompt block (ROLE/GOAL/DELIVERABLE/AUDIENCE/INPUTS/CONSTRAINTS/SUCCESS/FORMAT)
* 10-point quality checklist

---

**Next recommended page:** *Prompting & Iteration Essentials* — concrete patterns, examples, and a templates pack.