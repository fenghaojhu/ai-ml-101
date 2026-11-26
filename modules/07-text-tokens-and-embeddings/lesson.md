# Module 07: Text, tokens and embeddings

**Week(s):** 8  
**Learning goal:** Explain tokenization, next-token prediction and embeddings; identify vocabulary limitations.

## Learn

A tokenizer maps text to discrete IDs; token boundaries depend on its design. An embedding maps each ID to a learned vector. Language models predict a distribution for a next token given earlier tokens, not a guaranteed fact. Character tokenization is simple but creates longer sequences.

## Worked example

For the text "aba", a character vocabulary might map a→0 and b→1, giving [0,1,0]. The mapping must be shared during encoding and decoding.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Implement a reversible character tokenizer, test unseen characters, and discuss privacy and permission for training text.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
