---
title: conversation
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/
lastModified: 2025-11-07T18:06:05Z
---

# conversation

- `__all__ = ['BaseConversationMemoryDriver']` <small>module-attribute</small>  <span id="griptape.drivers.memory.conversation.__all__"></span>

<span id="griptape.drivers.memory.conversation.BaseConversationMemoryDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
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

<span id="griptape.drivers.memory.conversation.BaseConversationMemoryDriver._from_params_dict"></span>

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

<span id="griptape.drivers.memory.conversation.BaseConversationMemoryDriver._to_params_dict"></span>

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

<span id="griptape.drivers.memory.conversation.BaseConversationMemoryDriver.load"></span>

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

<span id="griptape.drivers.memory.conversation.BaseConversationMemoryDriver.store"></span>

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

- [AmazonDynamoDbConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/amazon_dynamodb/): -   all = \['AmazonDynamoDbConversationMemoryDriver'] module-attribute
- [AmazonDynamoDbConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/amazon_dynamodb_conversation_memory_driver/): Bases:
- [BaseConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/base_conversation_memory_driver/): Bases:
- [GriptapeCloudConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/griptape_cloud/): -   all = \['GriptapeCloudConversationMemoryDriver'] module-attribute
- [GriptapeCloudConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/griptape_cloud_conversation_memory_driver/): Bases:
- [LocalConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/local/): -   all = \['LocalConversationMemoryDriver'] module-attribute
- [LocalConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/local_conversation_memory_driver/): Bases:
- [RedisConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/redis/): -   all = \['RedisConversationMemoryDriver'] module-attribute
- [RedisConversationMemoryDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/redis_conversation_memory_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
