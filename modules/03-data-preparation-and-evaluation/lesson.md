# Module 03: Data preparation and evaluation

**Week(s):** 4  
**Learning goal:** Separate training and test data, identify leakage, and compute a baseline and accuracy.

## Learn

Split examples before fitting preprocessing or selecting a model. Training data adjusts model parameters; validation data supports choices; test data estimates final performance on unseen examples. Leakage occurs when information unavailable at prediction time reaches the model or when test data influences choices. A baseline provides a simple comparison.

## Worked example

If 8 of 10 examples are negative, always predicting negative yields 80% accuracy. This can conceal a complete failure to detect positives.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Create a small dataset, split it without overlap, and compare a majority baseline to a second rule. Explain a leakage risk.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
