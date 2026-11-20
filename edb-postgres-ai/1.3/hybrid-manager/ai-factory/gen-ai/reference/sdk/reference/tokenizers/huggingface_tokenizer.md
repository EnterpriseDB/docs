---
title: huggingface_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/huggingface_tokenizer/
lastModified: 2026-05-22T19:45:14+05:30
---

# huggingface\_tokenizer

<span id="griptape.tokenizers.huggingface_tokenizer.HuggingFaceTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/huggingface\_tokenizer.py</code>

</summary>

```python
@define()
class HuggingFaceTokenizer(BaseTokenizer):
    tokenizer: PreTrainedTokenizerBase = field(
        default=Factory(
            lambda self: import_optional_dependency("transformers").AutoTokenizer.from_pretrained(self.model),
            takes_self=True,
        ),
        kw_only=True,
    )
    _max_input_tokens: int = field(
        default=Factory(lambda self: self.tokenizer.model_max_length, takes_self=True),
        kw_only=True,
        alias="max_input_tokens",
    )
    _max_output_tokens: int = field(default=4096, kw_only=True, alias="max_output_tokens")

    def count_tokens(self, text: str) -> int:
        return len(self.tokenizer.encode(text))  # pyright: ignore[reportArgumentType]
```

</details>

- `_max_input_tokens = field(default=Factory(lambda self: self.tokenizer.model_max_length, takes_self=True), kw_only=True, alias='max_input_tokens')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.huggingface_tokenizer.HuggingFaceTokenizer._max_input_tokens"></span>

- `_max_output_tokens = field(default=4096, kw_only=True, alias='max_output_tokens')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.huggingface_tokenizer.HuggingFaceTokenizer._max_output_tokens"></span>

- `tokenizer = field(default=Factory(lambda self: import_optional_dependency('transformers').AutoTokenizer.from_pretrained(self.model), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.huggingface_tokenizer.HuggingFaceTokenizer.tokenizer"></span>

<span id="griptape.tokenizers.huggingface_tokenizer.HuggingFaceTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/huggingface\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    return len(self.tokenizer.encode(text))  # pyright: ignore[reportArgumentType]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
