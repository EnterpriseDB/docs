---
title: voyageai_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/voyageai_tokenizer/
lastModified: 2026-05-22T19:45:14+05:30
---

# voyageai\_tokenizer

<span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer"></span>

Bases:
[`BaseTokenizer`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tokenizers/#griptape.tokenizers.BaseTokenizer "BaseTokenizer (griptape.tokenizers.BaseTokenizer)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/voyageai\_tokenizer.py</code>

</summary>

```python
@define()
class VoyageAiTokenizer(BaseTokenizer):
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {
        "voyage-3": 32000,
        "voyage-large-2": 16000,
        "voyage-code-2": 16000,
        "voyage-2": 4000,
        "voyage-lite-02-instruct": 4000,
    }
    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {"voyage": 0}

    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    client: Client = field(
        default=Factory(
            lambda self: import_optional_dependency("voyageai").Client(api_key=self.api_key),
            takes_self=True,
        ),
        kw_only=True,
    )

    def count_tokens(self, text: str) -> int:
        return self.client.count_tokens([text], model=self.model)
```

</details>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {'voyage-3': 32000, 'voyage-large-2': 16000, 'voyage-code-2': 16000, 'voyage-2': 4000, 'voyage-lite-02-instruct': 4000}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {'voyage': 0}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer.api_key"></span>

- `client = field(default=Factory(lambda self: import_optional_dependency('voyageai').Client(api_key=self.api_key), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer.client"></span>

<span id="griptape.tokenizers.voyageai_tokenizer.VoyageAiTokenizer.count_tokens"></span>

### count\_tokens(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/voyageai\_tokenizer.py</code>

</summary>

```python
def count_tokens(self, text: str) -> int:
    return self.client.count_tokens([text], model=self.model)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
