---
title: perplexity
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/perplexity/
lastModified: 2025-11-07T18:06:05Z
---

# perplexity

- `__all__ = ['PerplexityPromptDriver']` <small>module-attribute</small>  <span id="griptape.drivers.prompt.perplexity.__all__"></span>

<span id="griptape.drivers.prompt.perplexity.PerplexityPromptDriver"></span>

Bases:
[`OpenAiChatPromptDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/openai/#griptape.drivers.prompt.openai.OpenAiChatPromptDriver "OpenAiChatPromptDriver (griptape.drivers.prompt.openai.OpenAiChatPromptDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/perplexity\_prompt\_driver.py</code>

</summary>

```python
@define
class PerplexityPromptDriver(OpenAiChatPromptDriver):
    base_url: str = field(default="https://api.perplexity.ai", kw_only=True, metadata={"serializable": True})
    structured_output_strategy: str = field(default="native", kw_only=True, metadata={"serializable": True})

    @override
    def _to_message(self, result: ChatCompletion) -> Message:
        message = super()._to_message(result)

        message.content[0].artifact.meta["citations"] = getattr(result, "citations", [])

        return message

    def _base_params(self, prompt_stack: PromptStack) -> dict:
        params = super()._base_params(prompt_stack)

        if "stop" in params:
            del params["stop"]

        return params
```

</details>

- `base_url = field(default='https://api.perplexity.ai', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.perplexity.PerplexityPromptDriver.base_url"></span>

- `structured_output_strategy = field(default='native', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.perplexity.PerplexityPromptDriver.structured_output_strategy"></span>

<span id="griptape.drivers.prompt.perplexity.PerplexityPromptDriver._base_params"></span>

### \_base\_params(prompt\_stack)

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/perplexity\_prompt\_driver.py</code>

</summary>

```python
def _base_params(self, prompt_stack: PromptStack) -> dict:
    params = super()._base_params(prompt_stack)

    if "stop" in params:
        del params["stop"]

    return params
```

</details>

<span id="griptape.drivers.prompt.perplexity.PerplexityPromptDriver._to_message"></span>

### \_to\_message(result)

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/perplexity\_prompt\_driver.py</code>

</summary>

```python
@override
def _to_message(self, result: ChatCompletion) -> Message:
    message = super()._to_message(result)

    message.content[0].artifact.meta["citations"] = getattr(result, "citations", [])

    return message
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
