# Module 06: Neural networks

**Week(s):** 7  
**Learning goal:** Trace a small neural network and explain activations, loss and backpropagation.

## Learn

A neural network composes weighted sums and nonlinear activation functions. A ReLU maps negative values to zero and leaves positive values unchanged. Backpropagation applies the chain rule to compute how loss changes with parameters; an optimizer uses those gradients to update them. Nonlinearity lets networks represent relationships a single linear layer cannot.

## Worked example

For x=2, weight=−1 and bias=3, the preactivation is 1 and ReLU outputs 1. If the bias were 1, ReLU would output 0.

## Try it

Open [the lab](lab.ipynb), run every cell in order, and answer its “Your turn” prompt. Record your prediction before changing the code.

## Assignment

Trace a two-layer network for two inputs and explain how a change in an early weight affects the final loss.

Submit your calculations, code or notebook, and a short explanation (150–300 words). Include the evidence supporting your conclusion and one limitation. See the [assessment guide](../../assessments/README.md) for expectations.

## Check your understanding

1. Explain the key idea in your own words to a classmate.
2. What assumption does the worked example make? What changes if it fails?
3. How could this idea affect a real person or an evaluation decision?

[Course home](../../README.md)
