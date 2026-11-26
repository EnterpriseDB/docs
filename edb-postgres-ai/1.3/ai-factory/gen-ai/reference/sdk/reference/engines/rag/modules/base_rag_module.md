---
title: base_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/base_rag_module/
lastModified: 2025-11-07T18:06:05Z
---

# base\_rag\_module

<span id="griptape.engines.rag.modules.base_rag_module.BaseRagModule"></span>

Bases:
[`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/base\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class BaseRagModule(FuturesExecutorMixin, ABC):
    name: str = field(
        default=Factory(lambda self: f"{self.__class__.__name__}-{uuid.uuid4().hex}", takes_self=True), kw_only=True
    )

    def generate_prompt_stack(self, system_prompt: Optional[str], query: str) -> PromptStack:
        messages = []

        if system_prompt is not None:
            messages.append(Message(system_prompt, role=Message.SYSTEM_ROLE))

        messages.append(Message(query, role=Message.USER_ROLE))

        return PromptStack(messages=messages)

    def get_context_param(self, context: RagContext, key: str) -> Optional[Any]:
        return context.module_configs.get(self.name, {}).get(key)

    def set_context_param(self, context: RagContext, key: str, value: Any) -> None:
        if not isinstance(context.module_configs.get(self.name), dict):
            context.module_configs[self.name] = {}

        context.module_configs[self.name][key] = value
```

</details>

- `name = field(default=Factory(lambda self: f'{self.__class__.__name__}-{uuid.uuid4().hex}', takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.base_rag_module.BaseRagModule.name"></span>

<span id="griptape.engines.rag.modules.base_rag_module.BaseRagModule.generate_prompt_stack"></span>

### generate\_prompt\_stack(system\_prompt, query)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/base\_rag\_module.py</code>

</summary>

```python
def generate_prompt_stack(self, system_prompt: Optional[str], query: str) -> PromptStack:
    messages = []

    if system_prompt is not None:
        messages.append(Message(system_prompt, role=Message.SYSTEM_ROLE))

    messages.append(Message(query, role=Message.USER_ROLE))

    return PromptStack(messages=messages)
```

</details>

<span id="griptape.engines.rag.modules.base_rag_module.BaseRagModule.get_context_param"></span>

### get\_context\_param(context, key)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/base\_rag\_module.py</code>

</summary>

```python
def get_context_param(self, context: RagContext, key: str) -> Optional[Any]:
    return context.module_configs.get(self.name, {}).get(key)
```

</details>

<span id="griptape.engines.rag.modules.base_rag_module.BaseRagModule.set_context_param"></span>

### set\_context\_param(context, key, value)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/base\_rag\_module.py</code>

</summary>

```python
def set_context_param(self, context: RagContext, key: str, value: Any) -> None:
    if not isinstance(context.module_configs.get(self.name), dict):
        context.module_configs[self.name] = {}

    context.module_configs[self.name][key] = value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
