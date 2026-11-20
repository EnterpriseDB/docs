---
title: dict_utils
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/utils/dict_utils/
lastModified: 2026-05-22T19:45:14+05:30
---

# dict\_utils

<span id="griptape.utils.dict_utils.add_key_in_dict_recursively"></span>

Add a key in a dictionary recursively.

### Parameters

| Name       | Type                               | Description                                                        | Default    |
| ---------- | ---------------------------------- | ------------------------------------------------------------------ | ---------- |
| `d`        | `Any`                              | The dictionary to add the key to.<br/>                             | `required` |
| `key`      | `str`                              | The key to add.<br/>                                               | `required` |
| `value`    | `Any`                              | The value to add.<br/>                                             | `required` |
| `criteria` | `Optional[Callable[[dict], bool]]` | An optional function to determine if the key should be added.<br/> | `None`     |

<details>

<summary>

Source Code in <code>griptape/utils/dict\_utils.py</code>

</summary>

```python
def add_key_in_dict_recursively(
    d: Any, key: str, value: Any, criteria: Optional[Callable[[dict], bool]] = None
) -> dict:
    """Add a key in a dictionary recursively.

    Args:
        d: The dictionary to add the key to.
        key: The key to add.
        value: The value to add.
        criteria: An optional function to determine if the key should be added.
    """
    if isinstance(d, dict):
        if criteria is None or criteria(d):
            d[key] = value
        return {k: add_key_in_dict_recursively(v, key, value, criteria) for k, v in d.items()}
    return d
```

</details>

<span id="griptape.utils.dict_utils.dict_merge"></span>

## dict\_merge(dct, merge\_dct, \*, add\_keys=True)

Recursive dict merge.

Inspired by :meth:`dict.update()`, instead of updating only top-level keys, dict\_merge recurses down into dicts nested to an arbitrary depth, updating keys. The `merge_dct` is merged into `dct`.

This version will return a copy of the dictionary and leave the original arguments untouched.

The optional argument `add_keys`, determines whether keys which are present in `merge_dict` but not `dct` should be included in the new dict.

### Parameters

| Name        | Type             | Description                           | Default    |
| ----------- | ---------------- | ------------------------------------- | ---------- |
| `dct`       | `Optional[dict]` | onto which the merge is executed<br/> | `required` |
| `merge_dct` | `Optional[dict]` | dct merged into dct<br/>              | `required` |
| `add_keys`  | `bool`           | whether to add new keys<br/>          | `True`     |

### Returns

| Name   | Type   | Description       |
| ------ | ------ | ----------------- |
| `dict` | `dict` | updated dict<br/> |

<details>

<summary>

Source Code in <code>griptape/utils/dict\_utils.py</code>

</summary>

```python
def dict_merge(dct: Optional[dict], merge_dct: Optional[dict], *, add_keys: bool = True) -> dict:
    """Recursive dict merge.

    Inspired by :meth:``dict.update()``, instead of
    updating only top-level keys, dict_merge recurses down into dicts nested
    to an arbitrary depth, updating keys. The ``merge_dct`` is merged into
    ``dct``.

    This version will return a copy of the dictionary and leave the original
    arguments untouched.

    The optional argument ``add_keys``, determines whether keys which are
    present in ``merge_dict`` but not ``dct`` should be included in the
    new dict.

    Args:
        dct: onto which the merge is executed
        merge_dct: dct merged into dct
        add_keys: whether to add new keys

    Returns:
        dict: updated dict
    """
    dct = {} if dct is None else dct
    merge_dct = {} if merge_dct is None else merge_dct

    dct = dct.copy()

    if not add_keys:
        merge_dct = {k: merge_dct[k] for k in set(dct).intersection(set(merge_dct))}

    for key in merge_dct:
        if key in dct and isinstance(dct[key], dict):
            dct[key] = dict_merge(dct[key], merge_dct[key], add_keys=add_keys)
        else:
            dct[key] = merge_dct[key]

    return dct
```

</details>

<span id="griptape.utils.dict_utils.remove_key_in_dict_recursively"></span>

## remove\_key\_in\_dict\_recursively(d, key)

<details>

<summary>

Source Code in <code>griptape/utils/dict\_utils.py</code>

</summary>

```python
def remove_key_in_dict_recursively(d: dict, key: str) -> dict:
    if isinstance(d, dict):
        return {k: remove_key_in_dict_recursively(v, key) for k, v in d.items() if k != key}
    return d
```

</details>

<span id="griptape.utils.dict_utils.remove_null_values_in_dict_recursively"></span>

## remove\_null\_values\_in\_dict\_recursively(d)

<details>

<summary>

Source Code in <code>griptape/utils/dict\_utils.py</code>

</summary>

```python
def remove_null_values_in_dict_recursively(d: dict) -> dict:
    if isinstance(d, dict):
        return {k: remove_null_values_in_dict_recursively(v) for k, v in d.items() if v is not None}
    return d
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
