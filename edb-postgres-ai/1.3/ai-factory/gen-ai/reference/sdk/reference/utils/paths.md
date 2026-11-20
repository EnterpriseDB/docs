---
title: paths
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/paths/
lastModified: 2025-11-07T18:06:05Z
---

# paths

<span id="griptape.utils.paths.abs_path"></span>

<details>

<summary>

Source Code in <code>griptape/utils/paths.py</code>

</summary>

```python
def abs_path(path: str) -> str:
    return os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), os.pardir, path))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
