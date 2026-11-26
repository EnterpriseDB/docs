---
title: google_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/google_tokenizer/
lastModified: 2026-05-22T19:45:14+05:30
---

# google\_tokenizer

<span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/google\_tokenizer.py</code>

</summary>

```python
@define()
class GoogleTokenizer(BaseTokenizer):
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {"gemini-1.5-pro": 2097152, "gemini": 1048576}
    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {"gemini": 8192}

    api_key: str = field(kw_only=True, metadata={"serializable": True})
    _client: Optional[GenerativeModel] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> GenerativeModel:
        genai = import_optional_dependency("google.generativeai")
        genai.configure(api_key=self.api_key)

        return genai.GenerativeModel(self.model)

    def count_tokens(self, text: str) -> int:
        return self.client.count_tokens(text).total_tokens
```

</details>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {'gemini-1.5-pro': 2097152, 'gemini': 1048576}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {'gemini': 8192}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer._client"></span>

- `api_key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer.api_key"></span>

<span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/tokenizers/google\_tokenizer.py</code>

</summary>

```python
@lazy_property()
def client(self) -> GenerativeModel:
    genai = import_optional_dependency("google.generativeai")
    genai.configure(api_key=self.api_key)

    return genai.GenerativeModel(self.model)
```

</details>

<span id="griptape.tokenizers.google_tokenizer.GoogleTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/google\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    return self.client.count_tokens(text).total_tokens
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
