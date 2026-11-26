# Module 08: Attention and transformers

**Week(s):** 9–10  
**Learning goal:** Compute attention weights and explain causal masking, position and transformer blocks.

## Learn

Attention compares a query with keys to weight values. Scaled dot-product attention uses softmax(QKᵀ/√d) times V. A causal mask hides future positions, preventing the next-token model from seeing answers in training. Position information distinguishes order. Transformer blocks combine attention, a feed-forward network, residual connections and normalization.

## Worked example

If two scores are equal, softmax assigns each 0.5. For values 2 and 6 the weighted result is 4. Masking one score leaves all weight on the other.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Calculate two attention weights by hand and explain how causal masking prevents leakage. Diagram a decoder block.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
