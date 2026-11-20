---
title: load_artifact_from_memory
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/load_artifact_from_memory/
lastModified: 2025-11-07T18:06:05Z
---

# load\_artifact\_from\_memory

<span id="griptape.utils.load_artifact_from_memory.load_artifact_from_memory"></span>

<details>

<summary>

Source Code in <code>griptape/utils/load\_artifact\_from\_memory.py</code>

</summary>

```python
def load_artifact_from_memory(
    memory: Optional[TaskMemory],
    artifact_namespace: str,
    artifact_name: str,
    artifact_type: type,
) -> BaseArtifact:
    if memory is None:
        raise ValueError("memory not found")

    artifacts = memory.load_artifacts(namespace=artifact_namespace)
    if len(artifacts) == 0:
        raise ValueError("no artifacts found in namespace")

    try:
        artifact = [a for a in artifacts if a.name == artifact_name][0]
    except IndexError as exc:
        raise ValueError(f"artifact {artifact_name} not found in namespace {artifact_namespace}") from exc

    if not isinstance(artifact, artifact_type):
        raise ValueError(f"{artifact.name} is not of type {artifact_type}")

    return artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
