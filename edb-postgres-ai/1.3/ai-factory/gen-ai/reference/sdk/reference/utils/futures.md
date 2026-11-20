---
title: futures
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/futures/
lastModified: 2025-11-07T18:06:05Z
---

# futures

- `T = TypeVar('T')` <small>module-attribute</small>  <span id="griptape.utils.futures.T"></span>

<span id="griptape.utils.futures.execute_futures_dict"></span>

<details>

<summary>

Source Code in <code>griptape/utils/futures.py</code>

</summary>

```python
def execute_futures_dict(fs_dict: dict[str, futures.Future[T]]) -> dict[str, T]:
    futures.wait(fs_dict.values(), timeout=None, return_when=futures.ALL_COMPLETED)

    return {key: future.result() for key, future in fs_dict.items()}
```

</details>

<span id="griptape.utils.futures.execute_futures_list"></span>

## execute\_futures\_list(fs\_list)

<details>

<summary>

Source Code in <code>griptape/utils/futures.py</code>

</summary>

```python
def execute_futures_list(fs_list: list[futures.Future[T]]) -> list[T]:
    futures.wait(fs_list, timeout=None, return_when=futures.ALL_COMPLETED)

    return [future.result() for future in fs_list]
```

</details>

<span id="griptape.utils.futures.execute_futures_list_dict"></span>

## execute\_futures\_list\_dict(fs\_dict)

<details>

<summary>

Source Code in <code>griptape/utils/futures.py</code>

</summary>

```python
def execute_futures_list_dict(fs_dict: dict[str, list[futures.Future[T]]]) -> dict[str, list[T]]:
    execute_futures_list([item for sublist in fs_dict.values() for item in sublist])

    return {key: [f.result() for f in fs] for key, fs in fs_dict.items()}
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
