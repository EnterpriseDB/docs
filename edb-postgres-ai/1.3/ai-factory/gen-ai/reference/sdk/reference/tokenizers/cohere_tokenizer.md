---
title: cohere_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/cohere_tokenizer/
lastModified: 2025-11-07T18:06:05Z
---

# cohere\_tokenizer

<span id="griptape.tokenizers.cohere_tokenizer.CohereTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/cohere\_tokenizer.py</code>

</summary>

```python
@define()
class CohereTokenizer(BaseTokenizer):
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {"command-r": 128000, "command": 4096, "embed": 512}
    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {"command": 4096, "embed": 512}

    client: Client = field(kw_only=True)

    def count_tokens(self, text: str) -> int:
        return len(self.client.tokenize(text=text, model=self.model).tokens)
```

</details>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {'command-r': 128000, 'command': 4096, 'embed': 512}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.cohere_tokenizer.CohereTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {'command': 4096, 'embed': 512}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.cohere_tokenizer.CohereTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `client = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.cohere_tokenizer.CohereTokenizer.client"></span>

<span id="griptape.tokenizers.cohere_tokenizer.CohereTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/cohere\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    return len(self.client.tokenize(text=text, model=self.model).tokens)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
