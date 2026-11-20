---
title: local_conversation_memory_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/local_conversation_memory_driver/
lastModified: 2025-11-07T18:06:05Z
---

# local\_conversation\_memory\_driver

<span id="griptape.drivers.memory.conversation.local_conversation_memory_driver.LocalConversationMemoryDriver"></span>

Bases:
[`BaseConversationMemoryDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/#griptape.drivers.memory.conversation.BaseConversationMemoryDriver "BaseConversationMemoryDriver (griptape.drivers.memory.conversation.BaseConversationMemoryDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/local\_conversation\_memory\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class LocalConversationMemoryDriver(BaseConversationMemoryDriver):
    persist_file: Optional[str] = field(default=None, metadata={"serializable": True})

    def store(self, runs: list[Run], metadata: dict[str, Any]) -> None:
        if self.persist_file is not None:
            Path(self.persist_file).write_text(json.dumps(self._to_params_dict(runs, metadata)))

    def load(self) -> tuple[list[Run], dict[str, Any]]:
        if (
            self.persist_file is not None
            and os.path.exists(self.persist_file)
            and (loaded_str := Path(self.persist_file).read_text()) is not None
        ):
            try:
                return self._from_params_dict(json.loads(loaded_str))
            except Exception as e:
                raise ValueError(f"Unable to load data from {self.persist_file}") from e

        return [], {}
```

</details>

- `persist_file = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.local_conversation_memory_driver.LocalConversationMemoryDriver.persist_file"></span>

<span id="griptape.drivers.memory.conversation.local_conversation_memory_driver.LocalConversationMemoryDriver.load"></span>

### load()

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/local\_conversation\_memory\_driver.py</code>

</summary>

```python
def load(self) -> tuple[list[Run], dict[str, Any]]:
    if (
        self.persist_file is not None
        and os.path.exists(self.persist_file)
        and (loaded_str := Path(self.persist_file).read_text()) is not None
    ):
        try:
            return self._from_params_dict(json.loads(loaded_str))
        except Exception as e:
            raise ValueError(f"Unable to load data from {self.persist_file}") from e

    return [], {}
```

</details>

<span id="griptape.drivers.memory.conversation.local_conversation_memory_driver.LocalConversationMemoryDriver.store"></span>

### store(runs, metadata)

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/local\_conversation\_memory\_driver.py</code>

</summary>

```python
def store(self, runs: list[Run], metadata: dict[str, Any]) -> None:
    if self.persist_file is not None:
        Path(self.persist_file).write_text(json.dumps(self._to_params_dict(runs, metadata)))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
