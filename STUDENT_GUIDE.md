# Student guide

Read each lesson, run its notebook top to bottom, make the requested changes, then complete the assignment. Keep notes on predictions and surprising results. The examples are intentionally small so their calculations can be inspected; they are not production systems.

## Local setup

Install Python 3.9 or newer. In a terminal from this folder, create an environment with `python -m venv .venv`, activate it (`.venv\Scripts\activate` on Windows or `source .venv/bin/activate` on macOS/Linux), then run `python -m pip install jupyter torch`. Start `jupyter notebook` and open a notebook. PyTorch installation can vary by platform; see the [official instructions](https://pytorch.org/get-started/locally/). Colab normally includes PyTorch; the capstone notebook checks for it.

If the notebook kernel fails, restart it and run cells in order. Training is nondeterministic across hardware even with seeds. For all projects use text you wrote or are allowed to use; avoid private information and do not upload classmates' work without permission.
