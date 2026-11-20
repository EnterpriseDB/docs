---
title: reference_utils
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/reference_utils/
lastModified: 2025-11-07T18:06:05Z
---

# reference\_utils

<span id="griptape.utils.reference_utils.references_from_artifacts"></span>

<details>

<summary>

Source Code in <code>griptape/utils/reference\_utils.py</code>

</summary>

```python
def references_from_artifacts(artifacts: list[TextArtifact]) -> list[Reference]:
    references = []

    for a in artifacts:
        if a.reference is not None and a.reference not in references:
            references.append(a.reference)

    return references
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
