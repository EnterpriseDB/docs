---
title: assistant_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/assistant_task/
lastModified: 2025-11-07T18:06:05Z
---

# assistant\_task

<span id="griptape.tasks.assistant_task.AssistantTask"></span>

Bases:
[`BaseTextInputTask[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                  | Description                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/assistant_task/#griptape.tasks.assistant_task.AssistantTask.assistant_driver" title="assistant_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.assistant_task.AssistantTask.assistant_driver)"><code class="language-python">assistant\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/#griptape.drivers.assistant.BaseAssistantDriver" title="BaseAssistantDriver (griptape.drivers.assistant.BaseAssistantDriver)"><code class="language-python">BaseAssistantDriver</code></a> | Driver to run the Assistant.<br/> |

<details>

<summary>

Source Code in <code>griptape/tasks/assistant\_task.py</code>

</summary>

```python
@define
class AssistantTask(BaseTextInputTask[TextArtifact]):
    """Task to run an Assistant.

    Attributes:
        assistant_driver: Driver to run the Assistant.
    """

    assistant_driver: BaseAssistantDriver = field(kw_only=True)

    def try_run(self) -> TextArtifact:
        return self.assistant_driver.run(self.input)
```

</details>

- `assistant_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.assistant_task.AssistantTask.assistant_driver"></span>

<span id="griptape.tasks.assistant_task.AssistantTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/assistant\_task.py</code>

</summary>

```python
def try_run(self) -> TextArtifact:
    return self.assistant_driver.run(self.input)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
