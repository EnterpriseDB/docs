---
title: azure_openai_chat_prompt_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/
lastModified: 2025-11-07T18:06:05Z
---

# azure\_openai\_chat\_prompt\_driver

<span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver"></span>

Bases:
[`OpenAiChatPromptDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/openai/#griptape.drivers.prompt.openai.OpenAiChatPromptDriver "OpenAiChatPromptDriver (griptape.drivers.prompt.openai.OpenAiChatPromptDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                          | Description                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_deployment" title="azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_deployment)"><code class="language-python">azure\_deployment</code></a> | `str`                         | An optional Azure OpenAi deployment id. Defaults to the model name.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_endpoint" title="azure_endpoint = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_endpoint)"><code class="language-python">azure\_endpoint</code></a>                                                                    | `str`                         | An Azure OpenAi endpoint.<br/>                                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token" title="azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token)"><code class="language-python">azure\_ad\_token</code></a>                                                    | `Optional[str]`               | An optional Azure Active Directory token.<br/>                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token_provider" title="azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})           class-attribute       instance-attribute    (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token_provider)"><code class="language-python">azure\_ad\_token\_provider</code></a>               | `Optional[Callable[[], str]]` | An optional Azure Active Directory token provider.<br/>                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.api_version" title="api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.api_version)"><code class="language-python">api\_version</code></a>                                                          | `str`                         | An Azure OpenAi API version.<br/>                                        |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/azure_openai_chat_prompt_driver/#griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.client" title="client() (griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                                                | `AzureOpenAI`                 | An `openai.AzureOpenAI` client.<br/>                                     |

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/azure\_openai\_chat\_prompt\_driver.py</code>

</summary>

```python
@define
class AzureOpenAiChatPromptDriver(OpenAiChatPromptDriver):
    """Azure OpenAi Chat Prompt Driver.

    Attributes:
        azure_deployment: An optional Azure OpenAi deployment id. Defaults to the model name.
        azure_endpoint: An Azure OpenAi endpoint.
        azure_ad_token: An optional Azure Active Directory token.
        azure_ad_token_provider: An optional Azure Active Directory token provider.
        api_version: An Azure OpenAi API version.
        client: An `openai.AzureOpenAI` client.
    """

    azure_deployment: str = field(
        kw_only=True,
        default=Factory(lambda self: self.model, takes_self=True),
        metadata={"serializable": True},
    )
    azure_endpoint: str = field(kw_only=True, metadata={"serializable": True})
    azure_ad_token: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": False})
    azure_ad_token_provider: Optional[Callable[[], str]] = field(
        kw_only=True,
        default=None,
        metadata={"serializable": False},
    )
    api_version: str = field(default="2024-10-21", kw_only=True, metadata={"serializable": True})
    _client: Optional[openai.AzureOpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.AzureOpenAI:
        return openai.AzureOpenAI(
            organization=self.organization,
            api_key=self.api_key,
            api_version=self.api_version,
            azure_endpoint=self.azure_endpoint,
            azure_deployment=self.azure_deployment,
            azure_ad_token=self.azure_ad_token,
            azure_ad_token_provider=self.azure_ad_token_provider,
        )

    def _base_params(self, prompt_stack: PromptStack) -> dict:
        params = super()._base_params(prompt_stack)
        if self.api_version < "2024-02-01" and "seed" in params:
            del params["seed"]
        if self.api_version < "2024-10-21":
            if "stream_options" in params:
                del params["stream_options"]
            if "parallel_tool_calls" in params:
                del params["parallel_tool_calls"]

        # TODO: Add once Azure supports modalities
        if "modalities" in params:
            del params["modalities"]
        return params
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver._client"></span>

- `api_version = field(default='2024-10-21', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.api_version"></span>

- `azure_ad_token = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token"></span>

- `azure_ad_token_provider = field(kw_only=True, default=None, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_ad_token_provider"></span>

- `azure_deployment = field(kw_only=True, default=Factory(lambda self: self.model, takes_self=True), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_deployment"></span>

- `azure_endpoint = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.azure_endpoint"></span>

<span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver._base_params"></span>

### \_base\_params(prompt\_stack)

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/azure\_openai\_chat\_prompt\_driver.py</code>

</summary>

```python
def _base_params(self, prompt_stack: PromptStack) -> dict:
    params = super()._base_params(prompt_stack)
    if self.api_version < "2024-02-01" and "seed" in params:
        del params["seed"]
    if self.api_version < "2024-10-21":
        if "stream_options" in params:
            del params["stream_options"]
        if "parallel_tool_calls" in params:
            del params["parallel_tool_calls"]

    # TODO: Add once Azure supports modalities
    if "modalities" in params:
        del params["modalities"]
    return params
```

</details>

<span id="griptape.drivers.prompt.azure_openai_chat_prompt_driver.AzureOpenAiChatPromptDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/azure\_openai\_chat\_prompt\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.AzureOpenAI:
    return openai.AzureOpenAI(
        organization=self.organization,
        api_key=self.api_key,
        api_version=self.api_version,
        azure_endpoint=self.azure_endpoint,
        azure_deployment=self.azure_deployment,
        azure_ad_token=self.azure_ad_token,
        azure_ad_token_provider=self.azure_ad_token_provider,
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
