---
title: action_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/action_artifact/
lastModified: 2026-05-22T19:45:14+05:30
---

# action\_artifact

<span id="griptape.artifacts.action_artifact.ActionArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                            | Description                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/action_artifact/#griptape.artifacts.action_artifact.ActionArtifact.value" title="value = field(metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.artifacts.action_artifact.ActionArtifact.value)"><code class="language-python">value</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.ToolAction" title="ToolAction (griptape.common.ToolAction)"><code class="language-python">ToolAction</code></a> | The Action to take. Currently only supports ToolAction.<br/> |

<details>

<summary>

Source Code in <code>griptape/artifacts/action\_artifact.py</code>

</summary>

```python
@define()
class ActionArtifact(BaseArtifact):
    """Represents the LLM taking an action to use a Tool.

    Attributes:
        value: The Action to take. Currently only supports ToolAction.
    """

    value: ToolAction = field(metadata={"serializable": True})

    def to_text(self) -> str:
        return str(self.value)
```

</details>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.action_artifact.ActionArtifact.value"></span>

<span id="griptape.artifacts.action_artifact.ActionArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/action\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return str(self.value)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
