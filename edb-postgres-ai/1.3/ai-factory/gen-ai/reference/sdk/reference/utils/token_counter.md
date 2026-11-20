---
title: token_counter
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/token_counter/
lastModified: 2025-11-07T18:06:05Z
---

# token\_counter

<span id="griptape.utils.token_counter.TokenCounter"></span>

<details>

<summary>

Source Code in <code>griptape/utils/token\_counter.py</code>

</summary>

```python
@define
class TokenCounter:
    tokens: int = field(default=0, kw_only=True)

    def add_tokens(self, new_tokens: float) -> int:
        self.tokens += int(new_tokens)

        return self.tokens
```

</details>

- `tokens = field(default=0, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.token_counter.TokenCounter.tokens"></span>

<span id="griptape.utils.token_counter.TokenCounter.add_tokens"></span>

### add\_tokens(new\_tokens)

<details>

<summary>

Source Code in <code>griptape/utils/token\_counter.py</code>

</summary>

```python
def add_tokens(self, new_tokens: float) -> int:
    self.tokens += int(new_tokens)

    return self.tokens
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
