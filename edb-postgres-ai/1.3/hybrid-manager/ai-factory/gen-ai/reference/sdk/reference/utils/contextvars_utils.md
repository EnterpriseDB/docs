---
title: contextvars_utils
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/utils/contextvars_utils/
lastModified: 2026-05-22T19:45:14+05:30
---

# contextvars\_utils

<span id="griptape.utils.contextvars_utils.with_contextvars"></span>

<details>

<summary>

Source Code in <code>griptape/utils/contextvars\_utils.py</code>

</summary>

```python
def with_contextvars(wrapped: Callable) -> Callable:
    ctx = contextvars.copy_context()

    def wrapper(*args, **kwargs) -> Any:
        return ctx.run(wrapped, *args, **kwargs)

    return wrapper
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
