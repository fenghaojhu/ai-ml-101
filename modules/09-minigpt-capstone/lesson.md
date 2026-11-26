# Module 09: MiniGPT capstone

**Week(s):** 11–12  
**Learning goal:** Train, inspect and evaluate a tiny causal transformer; communicate limitations.

## Learn

A decoder-only transformer predicts the next token using earlier tokens. Training minimizes cross-entropy on observed next tokens; generation repeatedly samples from predicted probabilities. Tiny datasets and small models are educational: output may repeat or invent claims, and a falling training loss is not proof of generalization.

## Worked example

A context "hel" might predict the next character "l". A causal mask ensures that prediction cannot use the actual next character.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Complete the capstone experiment and model card, including a held-out loss comparison and a responsible-use discussion.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
