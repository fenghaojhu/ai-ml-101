# MiniGPT capstone

Build a character-level decoder-only transformer using [MiniGPT.ipynb](MiniGPT.ipynb). It trains token and position embeddings, a causal self-attention block, feed-forward layers and an output head from scratch with PyTorch. This is a teaching model, not a production GPT system. Use the small built-in synthetic corpus or substitute text you created or have permission to use. Do not use personal information.

## Deliverables

1. A notebook with a reproducible run, training and held-out losses, and a generated sample. Report the random seed and settings.
2. A baseline: compare held-out loss against the uniform next-character baseline calculated in the notebook. Explain what the baseline means.
3. One controlled experiment (e.g., change context length or learning rate while holding other settings fixed). Record both configurations, losses and generated samples. Keep the test set untouched while choosing settings; report final test loss once, after choosing. Overlapping windows stay within their respective contiguous text splits. Adjacent splits are from the same synthetic source, so the results do not measure generalization to a new author or corpus.
4. A [model card](model-card.md) describing data, intended use, limitations and risks.
5. A 3–5 minute presentation explaining causal masking, results, one failure and a possible improvement.

Suggested milestones: week 10 proposal and data approval; week 11 baseline run; week 12 experiment, final test, model card and presentation. See the [rubric](../assessments/README.md).
