---
title: Prompting Essentials
description: Different prompting techniques suited for different scenarios.
---
> Different prompting techniques suit different scenarios.

When asking ChatGPT a question, how do you construct your prompt? Do you just throw it in without examples, or do you try to include as much detail as you can?

On this page, you will learn about different prompting techniques and styles. Each of them has its best use cases. After you finish this page, you’ll be able to write prompts that work best for your own scenario.

Most of the information on this page originates from the Techniques section of the [Prompt Engineering Guide](https://www.promptingguide.ai/techniques). If you are interested in diving deeper into each of the following prompting techniques, I recommend checking out the guide.

## 1. Zero-Shot Prompting

**What it is:** Instructs the model directly—no examples needed. The model does the rest.

**How you can use it:**

* **Essay intros**: *“Introduce the importance of photosynthesis.”*
* **Quick definitions**: *“Define ‘mitochondria’ in one sentence.”*
* **Simple classification**: *“Classify this sentence as formal or informal: ‘Hey, what’s up?’”*

**Example Prompt:**

```
Define the term 'photosynthesis' in one sentence.
```

**Result:**

```
Photosynthesis is the process by which plants convert light energy into chemical energy, producing oxygen as a byproduct.
```

---

## 2. Few-Shot Prompting

**What it is:** You provide a few example inputs with their outputs. The model infers the pattern, then continues it.

**How you can use it:**

* Craft sample flashcard pairs and ask the model to generate more.
* Show two annotated bibliographies, then ask it to create three more in the same format.
* Demonstrate paraphrasing with two examples, then ask it to paraphrase a new passage.

**Example Prompt:**

```
Paraphrase the following:

Original: The Earth revolves around the Sun.
Paraphrase: The Sun is orbited by the Earth.

Original: Water boils at 100°C.
Paraphrase: At 100 degrees Celsius, water reaches its boiling point.

Original: Gravity pulls objects toward the center of the Earth.
Paraphrase:
```

**Expected Output:**

```
Objects are drawn toward Earth due to the force of gravity.
```

---

## 3. Chain-of-Thought (CoT) Prompting

**What it is:** Encourages the model to “think step by step,” i.e., to show its reasoning before delivering the answer.

**How you can use it:**

* Solve math problems by tracing each calculation.
* Break down logic questions in exams.
* Analyze an argument by working through premises to a conclusion.

**Example:**

```
Q: If Jessica has 12 apples, gives away 5, then buys 8 more, how many does she have now? Let's think step by step.

A:
```

**Expected Output:**

```
Jessica starts with 12 apples. She gives away 5, so she has 7 left. Then she buys 8 more, giving her a total of 15 apples. The answer is 15.
```

---

## 4. Tree of Thoughts (ToT)

**What it is:** For complex tasks, the model explores **multiple reasoning paths** (branches), evaluates them, and picks the best one. Great for multi-step decisions or creative work.

**How you can use it:**

* Develop an essay outline by exploring several structural options.
* Approach a multi-part math problem by testing different methods and picking the most promising.
* Brainstorm project ideas, evaluate them, then choose the strongest one.

**Example:**

```
Essay topic: Should school uniforms be mandatory?

Possible approaches:
1. Historical context → pros → cons → conclusion.
2. Student autonomy → peer pressure → uniform advantages → synthesis.
3. Educational equality → cost implications → behavioral outcomes → verdict.

Evaluate each structure and choose the best one for developing your essay.
```

---

## 5. ReAct (Reasoning + Acting)

**What it is:** Mixes step-by-step reasoning with actions—like searching or citing facts. The model alternates between thinking and doing.

**How you can use it:**

* Research a topic by having the model note its plan, look up info, then reason with findings.
* Work through annotated bibliography entries: model proposes sources, checks them, then presents reasoning.

**Example:**

```
Task: Find two causes of the French Revolution.

Step 1 (Reasoning): Brainstorm possible causes.
Step 2 (Acting): Look up historical sources.
Step 3 (Reasoning): Evaluate which are most significant.
```

---

## 6. Meta Prompting

**What it is:** Focuses on the **structure** or template of outputs rather than specific content. You use abstract patterns.

**How you can use it:**

* Create a general structure for lab reports: **Objective**, **Method**, **Results**, **Conclusion**—and reuse it for different experiments.
* Develop a study summary template: **Key Terms**, **Main Points**, **Questions**, **Sources**—and apply it across subjects.

**Example:**

```
Create a lab report template with sections: Title, Objective, Hypothesis, Materials, Procedure, Results, Conclusion.
```

**Expected Output:**

```
Title:
Objective:
Hypothesis:
Materials:
Procedure:
Results:
Conclusion:
```

---

## 7. A Comparison Table

| Technique            | Best for…                         | Student Example Use Case                                   |
| -------------------- | --------------------------------- | ---------------------------------------------------------- |
| **Zero-Shot**        | Quick tasks & definitions         | “Define osmosis in one sentence.”                          |
| **Few-Shot**         | Pattern replication, formatting   | Show two vocab transformations, then ask model to do more. |
| **Chain-of-Thought** | Step-by-step reasoning            | Solving multi-step math or logic problems.                 |
| **Tree of Thoughts** | Exploring structure or creativity | Outlining essays or multi-option choices.                  |
| **ReAct**            | Research with reasoning           | Propose, look up, and validate historical facts.           |
| **Meta Prompting**   | Template and structure building   | Create reusable essay/report/study templates.              |

---

## 8. Summary

You’ve learned six effective ways of prompting an AI chatbot. You don’t have to follow the exact same format when actually chatting with AI. What matters is understanding how these techniques work so you can use—or combine—them in your own prompts to get better responses.