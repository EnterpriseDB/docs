---
title: dummy_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/dummy_tokenizer/
lastModified: 2026-05-22T19:45:14+05:30
---

# dummy\_tokenizer

<span id="griptape.tokenizers.dummy_tokenizer.DummyTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/dummy\_tokenizer.py</code>

</summary>

```python
@define
class DummyTokenizer(BaseTokenizer):
    model: Optional[str] = field(default=None, kw_only=True)
    _max_input_tokens: int = field(init=False, default=0, kw_only=True, alias="max_input_tokens")
    _max_output_tokens: int = field(init=False, default=0, kw_only=True, alias="max_output_tokens")

    def count_tokens(self, text: str) -> int:
        raise DummyError(__class__.__name__, "count_tokens")
```

</details>

- `_max_input_tokens = field(init=False, default=0, kw_only=True, alias='max_input_tokens')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.dummy_tokenizer.DummyTokenizer._max_input_tokens"></span>

- `_max_output_tokens = field(init=False, default=0, kw_only=True, alias='max_output_tokens')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.dummy_tokenizer.DummyTokenizer._max_output_tokens"></span>

- `model = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.dummy_tokenizer.DummyTokenizer.model"></span>

<span id="griptape.tokenizers.dummy_tokenizer.DummyTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/dummy\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    raise DummyError(__class__.__name__, "count_tokens")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
