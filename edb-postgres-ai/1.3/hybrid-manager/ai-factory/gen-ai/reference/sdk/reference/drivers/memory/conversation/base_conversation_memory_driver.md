---
title: base_conversation_memory_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/base_conversation_memory_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_conversation\_memory\_driver

<span id="griptape.drivers.memory.conversation.base_conversation_memory_driver.BaseConversationMemoryDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/base\_conversation\_memory\_driver.py</code>

</summary>

```python
class BaseConversationMemoryDriver(SerializableMixin, ABC):
    @abstractmethod
    def store(self, runs: list[Run], metadata: dict[str, Any]) -> None: ...

    @abstractmethod
    def load(self) -> tuple[list[Run], dict[str, Any]]: ...

    def _to_params_dict(self, runs: list[Run], metadata: dict[str, Any]) -> dict:
        return {"runs": [run.to_dict() for run in runs], "metadata": metadata}

    def _from_params_dict(self, params_dict: dict[str, Any]) -> tuple[list[Run], dict[str, Any]]:
        from griptape.memory.structure import Run

        return [Run.from_dict(run) for run in params_dict.get("runs", [])], params_dict.get("metadata", {})
```

</details>

<span id="griptape.drivers.memory.conversation.base_conversation_memory_driver.BaseConversationMemoryDriver._from_params_dict"></span>

### \_from\_params\_dict(params\_dict)

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/base\_conversation\_memory\_driver.py</code>

</summary>

```python
def _from_params_dict(self, params_dict: dict[str, Any]) -> tuple[list[Run], dict[str, Any]]:
    from griptape.memory.structure import Run

    return [Run.from_dict(run) for run in params_dict.get("runs", [])], params_dict.get("metadata", {})
```

</details>

<span id="griptape.drivers.memory.conversation.base_conversation_memory_driver.BaseConversationMemoryDriver._to_params_dict"></span>

### \_to\_params\_dict(runs, metadata)

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/base\_conversation\_memory\_driver.py</code>

</summary>

```python
def _to_params_dict(self, runs: list[Run], metadata: dict[str, Any]) -> dict:
    return {"runs": [run.to_dict() for run in runs], "metadata": metadata}
```

</details>

<span id="griptape.drivers.memory.conversation.base_conversation_memory_driver.BaseConversationMemoryDriver.load"></span>

### load()abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/base\_conversation\_memory\_driver.py</code>

</summary>

```python
@abstractmethod
def load(self) -> tuple[list[Run], dict[str, Any]]: ...
```

</details>

<span id="griptape.drivers.memory.conversation.base_conversation_memory_driver.BaseConversationMemoryDriver.store"></span>

### store(runs, metadata)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/base\_conversation\_memory\_driver.py</code>

</summary>

```python
@abstractmethod
def store(self, runs: list[Run], metadata: dict[str, Any]) -> None: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
