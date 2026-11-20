---
title: base_assistant_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/base_assistant_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_assistant\_driver

<span id="griptape.drivers.assistant.base_assistant_driver.BaseAssistantDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/base\_assistant\_driver.py</code>

</summary>

```python
@define
class BaseAssistantDriver(ABC):
    """Base class for AssistantDrivers."""

    def run(self, *args: BaseArtifact) -> TextArtifact:
        return self.try_run(*args)

    @abstractmethod
    def try_run(self, *args: BaseArtifact) -> TextArtifact: ...
```

</details>

<span id="griptape.drivers.assistant.base_assistant_driver.BaseAssistantDriver.run"></span>

### run(\*args)

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/base\_assistant\_driver.py</code>

</summary>

```python
def run(self, *args: BaseArtifact) -> TextArtifact:
    return self.try_run(*args)
```

</details>

<span id="griptape.drivers.assistant.base_assistant_driver.BaseAssistantDriver.try_run"></span>

### try\_run(\*args)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/base\_assistant\_driver.py</code>

</summary>

```python
@abstractmethod
def try_run(self, *args: BaseArtifact) -> TextArtifact: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
