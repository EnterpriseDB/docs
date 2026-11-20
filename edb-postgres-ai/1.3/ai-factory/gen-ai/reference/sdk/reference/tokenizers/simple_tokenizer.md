---
title: simple_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/simple_tokenizer/
lastModified: 2025-11-07T18:06:05Z
---

# simple\_tokenizer

<span id="griptape.tokenizers.simple_tokenizer.SimpleTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/simple\_tokenizer.py</code>

</summary>

```python
@define()
class SimpleTokenizer(BaseTokenizer):
    model: str | None = field(init=False, default=None, kw_only=True)
    characters_per_token: int = field(kw_only=True)

    def count_tokens(self, text: str) -> int:
        return (len(text) + self.characters_per_token - 1) // self.characters_per_token
```

</details>

- `characters_per_token = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.simple_tokenizer.SimpleTokenizer.characters_per_token"></span>

- `model = field(init=False, default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.simple_tokenizer.SimpleTokenizer.model"></span>

<span id="griptape.tokenizers.simple_tokenizer.SimpleTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/simple\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    return (len(text) + self.characters_per_token - 1) // self.characters_per_token
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
