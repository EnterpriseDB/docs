---
title: grok_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/grok_tokenizer/
lastModified: 2026-05-22T19:45:14+05:30
---

# grok\_tokenizer

<span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/grok\_tokenizer.py</code>

</summary>

```python
@define()
class GrokTokenizer(BaseTokenizer):
    # https://docs.x.ai/docs/models?cluster=us-east-1#model-constraints
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {
        "grok-2-vision": 32768,
        "grok-2": 131072,
        "grok-vision-beta": 8192,
        "grok-beta": 131072,
    }

    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {"grok": 4096}

    base_url: str = field(default="https://api.x.ai", kw_only=True, metadata={"serializable": True})
    api_key: str = field(kw_only=True, default=None)
    headers: dict = field(
        default=Factory(lambda self: {"Authorization": f"Bearer {self.api_key}"}, takes_self=True), kw_only=True
    )

    def count_tokens(self, text: str) -> int:
        response = requests.post(
            urljoin(self.base_url, "/v1/tokenize-text"),
            headers=self.headers,
            json={"text": text, "model": self.model},
        )
        response.raise_for_status()
        return len(response.json()["token_ids"])
```

</details>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {'grok-2-vision': 32768, 'grok-2': 131072, 'grok-vision-beta': 8192, 'grok-beta': 131072}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {'grok': 4096}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `api_key = field(kw_only=True, default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.api_key"></span>

- `base_url = field(default='https://api.x.ai', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.base_url"></span>

- `headers = field(default=Factory(lambda self: {'Authorization': f'Bearer {self.api_key}'}, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.headers"></span>

<span id="griptape.tokenizers.grok_tokenizer.GrokTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/grok\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    response = requests.post(
        urljoin(self.base_url, "/v1/tokenize-text"),
        headers=self.headers,
        json={"text": text, "model": self.model},
    )
    response.raise_for_status()
    return len(response.json()["token_ids"])
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
