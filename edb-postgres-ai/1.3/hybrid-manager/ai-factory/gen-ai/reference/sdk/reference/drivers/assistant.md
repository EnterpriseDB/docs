---
title: assistant
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/
lastModified: 2026-05-22T19:45:14+05:30
---

# assistant

- `__all__ = ['BaseAssistantDriver']` <small>module-attribute</small>  <span id="griptape.drivers.assistant.__all__"></span>

<span id="griptape.drivers.assistant.BaseAssistantDriver"></span>

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

<span id="griptape.drivers.assistant.BaseAssistantDriver.run"></span>

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

<span id="griptape.drivers.assistant.BaseAssistantDriver.try_run"></span>

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

- [BaseAssistantDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/base_assistant_driver/): Bases:
- [GriptapeCloudAssistantDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/griptape_cloud/): -   all = \['GriptapeCloudAssistantDriver'] module-attribute
- [GriptapeCloudAssistantDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/griptape_cloud_assistant_driver/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [OpenAiAssistantDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/openai/): -   all = \['OpenAiAssistantDriver'] module-attribute
- [OpenAiAssistantDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/openai_assistant_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
