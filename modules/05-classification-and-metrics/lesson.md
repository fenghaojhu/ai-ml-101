# Module 05: Classification and metrics

**Week(s):** 6  
**Learning goal:** Explain classification, a threshold, precision and recall, and choose metrics for a context.

## Learn

A classifier predicts a class, often by thresholding a score. True positives are correctly predicted positives; false positives are negatives predicted positive; false negatives are missed positives. Precision = TP/(TP+FP), recall = TP/(TP+FN), when denominators are nonzero. A threshold trades off different errors.

## Worked example

A spam filter with TP=8, FP=2 and FN=4 has precision 0.8 and recall 2/3. Which error matters more depends on the application.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

For a classifier you invent, write a confusion matrix, calculate precision and recall, and justify the threshold tradeoff.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
