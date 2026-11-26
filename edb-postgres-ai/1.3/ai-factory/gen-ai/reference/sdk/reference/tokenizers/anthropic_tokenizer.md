---
title: anthropic_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/anthropic_tokenizer/
lastModified: 2025-11-07T18:06:05Z
---

# anthropic\_tokenizer

<span id="griptape.tokenizers.anthropic_tokenizer.AnthropicTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/anthropic\_tokenizer.py</code>

</summary>

```python
@define()
class AnthropicTokenizer(BaseTokenizer):
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {"claude-3": 200000, "claude-2.1": 200000, "claude": 100000}
    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {"claude": 4096}

    client: Anthropic = field(
        default=Factory(lambda: import_optional_dependency("anthropic").Anthropic()),
        kw_only=True,
    )

    def count_tokens(self, text: str | list[BetaMessageParam]) -> int:
        types = import_optional_dependency("anthropic.types.beta")

        # TODO: Refactor all Tokenizers to support Prompt Stack as an input.
        messages = [types.BetaMessageParam(role="user", content=text)] if isinstance(text, str) else text

        usage = self.client.beta.messages.count_tokens(
            model=self.model,
            messages=messages,
        )

        return usage.input_tokens
```

</details>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {'claude-3': 200000, 'claude-2.1': 200000, 'claude': 100000}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.anthropic_tokenizer.AnthropicTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {'claude': 4096}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.anthropic_tokenizer.AnthropicTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `client = field(default=Factory(lambda: import_optional_dependency('anthropic').Anthropic()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.anthropic_tokenizer.AnthropicTokenizer.client"></span>

<span id="griptape.tokenizers.anthropic_tokenizer.AnthropicTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/anthropic\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str | list[BetaMessageParam]) -> int:
    types = import_optional_dependency("anthropic.types.beta")

    # TODO: Refactor all Tokenizers to support Prompt Stack as an input.
    messages = [types.BetaMessageParam(role="user", content=text)] if isinstance(text, str) else text

    usage = self.client.beta.messages.count_tokens(
        model=self.model,
        messages=messages,
    )

    return usage.input_tokens
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
