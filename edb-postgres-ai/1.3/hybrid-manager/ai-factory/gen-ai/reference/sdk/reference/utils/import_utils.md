---
title: import_utils
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/utils/import_utils/
lastModified: 2026-05-22T19:45:14+05:30
---

# import\_utils

- `INSTALL_MAPPING = {'huggingface_hub': 'huggingface-hub', 'pinecone': 'pinecone-client', 'opensearchpy': 'opensearch-py', 'google.generativeai': 'google-generativeai'}` <small>module-attribute</small>  <span id="griptape.utils.import_utils.INSTALL_MAPPING"></span>

<span id="griptape.utils.import_utils.import_optional_dependency"></span>

Import an optional dependency.

If a dependency is missing, an ImportError with a nice message will be raised.

### Parameters

| Name   | Type  | Description           | Default    |
| ------ | ----- | --------------------- | ---------- |
| `name` | `str` | The module name.<br/> | `required` |

### Returns

| Type         | Description                           |
| ------------ | ------------------------------------- |
| `ModuleType` | The imported module, when found.<br/> |

<details>

<summary>

Source Code in <code>griptape/utils/import\_utils.py</code>

</summary>

```python
def import_optional_dependency(name: str) -> ModuleType:
    """Import an optional dependency.

    If a dependency is missing, an ImportError with a nice message will be raised.

    Args:
        name: The module name.

    Returns:
        The imported module, when found.
    """
    package_name = INSTALL_MAPPING.get(name)
    install_name = package_name if package_name is not None else name

    msg = (
        f"Missing optional dependency: '{install_name}'. "
        f"Please install the appropriate extra: https://docs.griptape.ai/stable/griptape-framework/#extras."
    )
    try:
        module = import_module(name)
    except ImportError as exc:
        raise ImportError(msg) from exc

    return module
```

</details>

<span id="griptape.utils.import_utils.is_dependency_installed"></span>

## is\_dependency\_installed(name)

Check if an optional dependency is available.

### Parameters

| Name   | Type  | Description           | Default    |
| ------ | ----- | --------------------- | ---------- |
| `name` | `str` | The module name.<br/> | `required` |

### Returns

| Type   | Description                                    |
| ------ | ---------------------------------------------- |
| `bool` | True if the dependency is available.<br/>      |
| `bool` | False if the dependency is not available.<br/> |

<details>

<summary>

Source Code in <code>griptape/utils/import\_utils.py</code>

</summary>

```python
def is_dependency_installed(name: str) -> bool:
    """Check if an optional dependency is available.

    Args:
        name: The module name.

    Returns:
        True if the dependency is available.
        False if the dependency is not available.
    """
    try:
        import_optional_dependency(name)
    except ImportError:
        return False

    return True
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
