# Module 04: Regression and gradient descent

**Week(s):** 5  
**Learning goal:** Fit a line using loss and gradient descent; interpret learning rate.

## Learn

Linear regression predicts y = wx + b. Mean squared error averages squared prediction errors. Gradient descent adjusts weights in the direction that reduces loss locally; the learning rate controls step size. A low training loss alone does not establish generalization.

## Worked example

For one example x=2, y=5 and w=1, b=0, prediction is 2 and squared error is 9. The gradient with respect to w is 2(2−5)2 = −12.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Train a line on the example data. Compare two learning rates and report training and held-out errors.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
