const MODULES = [
  {
    "id": 1,
    "title": "AI, data and responsible use",
    "week": "1",
    "goal": "Distinguish AI, machine learning and generative models; describe a prediction task and its limitations.",
    "learn": "A model learns a mapping from examples. A feature is information available at prediction time; a label is the outcome to predict. Training examples approximate a population, so collecting only convenient examples can leave groups out. A model can be accurate overall and still harm people in a subgroup.",
    "example": "A school wants to predict bus delays. Weather and route are possible features; whether the bus was late is a label. Student names are not needed.",
    "assignment": "Describe two different prediction tasks and identify a feature, label, affected group, and potential harm.",
    "slug": "01-ai-data-and-responsible-use",
    "question": "Which is the label when predicting bus delays?",
    "options": [
      "Weather",
      "Whether a bus was late",
      "The bus route"
    ],
    "answer": 1,
    "feedback": "The label is the outcome the model learns to predict."
  },
  {
    "id": 2,
    "title": "Math for learning",
    "week": "2–3",
    "goal": "Use vectors, dot products, functions, derivatives and probabilities to explain a prediction.",
    "learn": "A vector is an ordered list of numbers. A dot product multiplies matching entries and sums them; weighted sums are the basis of many models. A derivative measures local change, and a gradient collects derivatives. A probability describes uncertainty on a 0–1 scale; it is not a guarantee.",
    "example": "For features [2, 3] and weights [0.5, -1], the dot product is -2. A small change to the first feature changes the output by 0.5 times that change.",
    "assignment": "Compute a dot product by hand and use a finite difference to approximate the derivative of x² at x=3. Explain why the estimate changes with step size.",
    "slug": "02-math-for-learning",
    "question": "What is [2, 3] · [0.5, −1]?",
    "options": [
      "−2",
      "2",
      "3.5"
    ],
    "answer": 0,
    "feedback": "Multiply matching entries and add: 1 − 3 = −2."
  },
  {
    "id": 3,
    "title": "Data preparation and evaluation",
    "week": "4",
    "goal": "Separate training and test data, identify leakage, and compute a baseline and accuracy.",
    "learn": "Split examples before fitting preprocessing or selecting a model. Training data adjusts model parameters; validation data supports choices; test data estimates final performance on unseen examples. Leakage occurs when information unavailable at prediction time reaches the model or when test data influences choices. A baseline provides a simple comparison.",
    "example": "If 8 of 10 examples are negative, always predicting negative yields 80% accuracy. This can conceal a complete failure to detect positives.",
    "assignment": "Create a small dataset, split it without overlap, and compare a majority baseline to a second rule. Explain a leakage risk.",
    "slug": "03-data-preparation-and-evaluation",
    "question": "Why keep a test set separate?",
    "options": [
      "To tune the model repeatedly",
      "To estimate performance on unseen examples",
      "To make the training set larger"
    ],
    "answer": 1,
    "feedback": "Using test results to choose a model can make the final estimate optimistic."
  },
  {
    "id": 4,
    "title": "Regression and gradient descent",
    "week": "5",
    "goal": "Fit a line using loss and gradient descent; interpret learning rate.",
    "learn": "Linear regression predicts y = wx + b. Mean squared error averages squared prediction errors. Gradient descent adjusts weights in the direction that reduces loss locally; the learning rate controls step size. A low training loss alone does not establish generalization.",
    "example": "For one example x=2, y=5 and w=1, b=0, prediction is 2 and squared error is 9. The gradient with respect to w is 2(2−5)2 = −12.",
    "assignment": "Train a line on the example data. Compare two learning rates and report training and held-out errors.",
    "slug": "04-regression-and-gradient-descent",
    "question": "What can happen if a learning rate is too large?",
    "options": [
      "Updates can overshoot or diverge",
      "Every gradient becomes zero",
      "The test set gets larger"
    ],
    "answer": 0,
    "feedback": "A step that is too large can jump past a minimum."
  },
  {
    "id": 5,
    "title": "Classification and metrics",
    "week": "6",
    "goal": "Explain classification, a threshold, precision and recall, and choose metrics for a context.",
    "learn": "A classifier predicts a class, often by thresholding a score. True positives are correctly predicted positives; false positives are negatives predicted positive; false negatives are missed positives. Precision = TP/(TP+FP), recall = TP/(TP+FN), when denominators are nonzero. A threshold trades off different errors.",
    "example": "A spam filter with TP=8, FP=2 and FN=4 has precision 0.8 and recall 2/3. Which error matters more depends on the application.",
    "assignment": "For a classifier you invent, write a confusion matrix, calculate precision and recall, and justify the threshold tradeoff.",
    "slug": "05-classification-and-metrics",
    "question": "For TP=8, FP=2 and FN=4, what is precision?",
    "options": [
      "8/12",
      "8/10",
      "2/10"
    ],
    "answer": 1,
    "feedback": "Precision is TP / (TP + FP), or 8 / 10."
  },
  {
    "id": 6,
    "title": "Neural networks",
    "week": "7",
    "goal": "Trace a small neural network and explain activations, loss and backpropagation.",
    "learn": "A neural network composes weighted sums and nonlinear activation functions. A ReLU maps negative values to zero and leaves positive values unchanged. Backpropagation applies the chain rule to compute how loss changes with parameters; an optimizer uses those gradients to update them. Nonlinearity lets networks represent relationships a single linear layer cannot.",
    "example": "For x=2, weight=−1 and bias=3, the preactivation is 1 and ReLU outputs 1. If the bias were 1, ReLU would output 0.",
    "assignment": "Trace a two-layer network for two inputs and explain how a change in an early weight affects the final loss.",
    "slug": "06-neural-networks",
    "question": "Why use nonlinear activations?",
    "options": [
      "To make stacked layers more expressive",
      "To remove all bias from data",
      "To avoid using numbers"
    ],
    "answer": 0,
    "feedback": "Without nonlinearity, stacked linear layers collapse to one linear transformation."
  },
  {
    "id": 7,
    "title": "Text, tokens and embeddings",
    "week": "8",
    "goal": "Explain tokenization, next-token prediction and embeddings; identify vocabulary limitations.",
    "learn": "A tokenizer maps text to discrete IDs; token boundaries depend on its design. An embedding maps each ID to a learned vector. Language models predict a distribution for a next token given earlier tokens, not a guaranteed fact. Character tokenization is simple but creates longer sequences.",
    "example": "For the text \"aba\", a character vocabulary might map a→0 and b→1, giving [0,1,0]. The mapping must be shared during encoding and decoding.",
    "assignment": "Implement a reversible character tokenizer, test unseen characters, and discuss privacy and permission for training text.",
    "slug": "07-text-tokens-and-embeddings",
    "question": "What does a tokenizer do?",
    "options": [
      "Guarantees factual answers",
      "Maps text into discrete tokens or IDs",
      "Evaluates model fairness automatically"
    ],
    "answer": 1,
    "feedback": "Tokenization turns text into discrete units that a model can process."
  },
  {
    "id": 8,
    "title": "Attention and transformers",
    "week": "9–10",
    "goal": "Compute attention weights and explain causal masking, position and transformer blocks.",
    "learn": "Attention compares a query with keys to weight values. Scaled dot-product attention uses softmax(QKᵀ/√d) times V. A causal mask hides future positions, preventing the next-token model from seeing answers in training. Position information distinguishes order. Transformer blocks combine attention, a feed-forward network, residual connections and normalization.",
    "example": "If two scores are equal, softmax assigns each 0.5. For values 2 and 6 the weighted result is 4. Masking one score leaves all weight on the other.",
    "assignment": "Calculate two attention weights by hand and explain how causal masking prevents leakage. Diagram a decoder block.",
    "slug": "08-attention-and-transformers",
    "question": "What does a causal mask hide?",
    "options": [
      "Earlier tokens",
      "Future tokens",
      "The entire input"
    ],
    "answer": 1,
    "feedback": "A next-token model must not see future answers when training."
  },
  {
    "id": 9,
    "title": "MiniGPT capstone",
    "week": "11–12",
    "goal": "Train, inspect and evaluate a tiny causal transformer; communicate limitations.",
    "learn": "A decoder-only transformer predicts the next token using earlier tokens. Training minimizes cross-entropy on observed next tokens; generation repeatedly samples from predicted probabilities. Tiny datasets and small models are educational: output may repeat or invent claims, and a falling training loss is not proof of generalization.",
    "example": "A context \"hel\" might predict the next character \"l\". A causal mask ensures that prediction cannot use the actual next character.",
    "assignment": "Complete the capstone experiment and model card, including a held-out loss comparison and a responsible-use discussion.",
    "slug": "09-minigpt-capstone",
    "question": "What does a falling training loss prove?",
    "options": [
      "The model is always factual",
      "The model generalizes to every new text",
      "Only that training predictions improved on the measured data"
    ],
    "answer": 2,
    "feedback": "Evaluate held-out data and inspect failures; training loss alone is not enough."
  }
];
