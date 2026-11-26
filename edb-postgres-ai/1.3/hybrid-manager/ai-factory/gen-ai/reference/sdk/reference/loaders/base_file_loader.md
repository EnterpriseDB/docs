---
title: base_file_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_file_loader/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_file\_loader

- `A = TypeVar('A', bound=BaseArtifact)` <small>module-attribute</small>  <span id="griptape.loaders.base_file_loader.A"></span>

<span id="griptape.loaders.base_file_loader.BaseFileLoader"></span>

Bases:
[`BaseLoader[Union[str, PathLike], bytes, A]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseLoader "BaseLoader (griptape.loaders.BaseLoader)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/loaders/base\_file\_loader.py</code>

</summary>

```python
@define
class BaseFileLoader(BaseLoader[Union[str, PathLike], bytes, A], ABC):
    file_manager_driver: BaseFileManagerDriver = field(
        default=Factory(lambda: LocalFileManagerDriver()),
        kw_only=True,
    )
    encoding: str = field(default="utf-8", kw_only=True)

    def fetch(self, source: str | PathLike) -> bytes:
        # TODO: This is silly. `load_file` decodes the bytes and then we immediately re-encode them.
        data = self.file_manager_driver.load_file(str(source)).value
        if isinstance(data, str):
            return data.encode(self.encoding)
        return data

    def save(self, destination: str | PathLike, artifact: A) -> None:
        """Saves the Artifact to a destination."""
        artifact.encoding = self.encoding
        self.file_manager_driver.save_file(str(destination), artifact.to_bytes())
```

</details>

- `encoding = field(default='utf-8', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.base_file_loader.BaseFileLoader.encoding"></span>

- `file_manager_driver = field(default=Factory(lambda: LocalFileManagerDriver()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.base_file_loader.BaseFileLoader.file_manager_driver"></span>

<span id="griptape.loaders.base_file_loader.BaseFileLoader.fetch"></span>

### fetch(source)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_file\_loader.py</code>

</summary>

```python
def fetch(self, source: str | PathLike) -> bytes:
    # TODO: This is silly. `load_file` decodes the bytes and then we immediately re-encode them.
    data = self.file_manager_driver.load_file(str(source)).value
    if isinstance(data, str):
        return data.encode(self.encoding)
    return data
```

</details>

<span id="griptape.loaders.base_file_loader.BaseFileLoader.save"></span>

### save(destination, artifact)

<details>

<summary>

Source Code in <code>griptape/loaders/base\_file\_loader.py</code>

</summary>

```python
def save(self, destination: str | PathLike, artifact: A) -> None:
    """Saves the Artifact to a destination."""
    artifact.encoding = self.encoding
    self.file_manager_driver.save_file(str(destination), artifact.to_bytes())
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
