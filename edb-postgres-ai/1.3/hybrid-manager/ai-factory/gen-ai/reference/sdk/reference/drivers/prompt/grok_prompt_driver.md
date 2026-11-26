---
title: grok_prompt_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/grok_prompt_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# grok\_prompt\_driver

<span id="griptape.drivers.prompt.grok_prompt_driver.GrokPromptDriver"></span>

Bases:
[`OpenAiChatPromptDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/openai/#griptape.drivers.prompt.openai.OpenAiChatPromptDriver "OpenAiChatPromptDriver (griptape.drivers.prompt.openai.OpenAiChatPromptDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/grok\_prompt\_driver.py</code>

</summary>

```python
@define
class GrokPromptDriver(OpenAiChatPromptDriver):
    base_url: str = field(default="https://api.x.ai/v1", kw_only=True, metadata={"serializable": True})
    tokenizer: GrokTokenizer = field(
        default=Factory(
            lambda self: GrokTokenizer(base_url=self.base_url, api_key=self.api_key, model=self.model), takes_self=True
        ),
        kw_only=True,
        metadata={"serializable": True},
    )
```

</details>

- `base_url = field(default='https://api.x.ai/v1', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.grok_prompt_driver.GrokPromptDriver.base_url"></span>

- `tokenizer = field(default=Factory(lambda self: GrokTokenizer(base_url=self.base_url, api_key=self.api_key, model=self.model), takes_self=True), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.grok_prompt_driver.GrokPromptDriver.tokenizer"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
