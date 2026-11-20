---
title: base_file_manager_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/file_manager/base_file_manager_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_file\_manager\_driver

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

### Attributes

| Name             | Type | Description                                                                                         |
| ---------------- | ---- | --------------------------------------------------------------------------------------------------- |
| `default_loader` | \`\` | The default loader to use for loading file contents into artifacts.<br/>                            |
| `loaders`        | \`\` | Dictionary of file extension specific loaders to use for loading file contents into artifacts.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
@define
class BaseFileManagerDriver(ABC):
    """BaseFileManagerDriver can be used to list, load, and save files.

    Attributes:
        default_loader: The default loader to use for loading file contents into artifacts.
        loaders: Dictionary of file extension specific loaders to use for loading file contents into artifacts.
    """

    _workdir: str = field(kw_only=True, alias="workdir")
    encoding: Optional[str] = field(default=None, kw_only=True)

    @property
    @abstractmethod
    def workdir(self) -> str: ...

    @workdir.setter
    @abstractmethod
    def workdir(self, value: str) -> None: ...

    def list_files(self, path: str) -> TextArtifact:
        entries = self.try_list_files(path)
        return TextArtifact("\n".join(list(entries)))

    @abstractmethod
    def try_list_files(self, path: str) -> list[str]: ...

    def load_file(self, path: str) -> BlobArtifact | TextArtifact:
        if self.encoding is None:
            return BlobArtifact(self.try_load_file(path))
        return TextArtifact(self.try_load_file(path).decode(encoding=self.encoding), encoding=self.encoding)

    @abstractmethod
    def try_load_file(self, path: str) -> bytes: ...

    def save_file(self, path: str, value: bytes | str) -> InfoArtifact:
        if isinstance(value, str):
            value = value.encode() if self.encoding is None else value.encode(encoding=self.encoding)
        elif isinstance(value, (bytearray, memoryview)):
            raise ValueError(f"Unsupported type: {type(value)}")

        location = self.try_save_file(path, value)

        return InfoArtifact(f"Successfully saved file at: {location}")

    @abstractmethod
    def try_save_file(self, path: str, value: bytes) -> str: ...

    def load_artifact(self, path: str) -> BaseArtifact:
        response = self.try_load_file(path)
        return BaseArtifact.from_json(
            response.decode() if self.encoding is None else response.decode(encoding=self.encoding)
        )

    def save_artifact(self, path: str, artifact: BaseArtifact) -> InfoArtifact:
        artifact_json = artifact.to_json()
        value = artifact_json.encode() if self.encoding is None else artifact_json.encode(encoding=self.encoding)

        location = self.try_save_file(path, value)

        return InfoArtifact(f"Successfully saved artifact at: {location}")
```

</details>

- `_workdir = field(kw_only=True, alias='workdir')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver._workdir"></span>

- `encoding = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.encoding"></span>

- `workdir` <small>abstractmethod</small> <small>property</small> <small>writable</small>  <span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.workdir"></span>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.list_files"></span>

### list\_files(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
def list_files(self, path: str) -> TextArtifact:
    entries = self.try_list_files(path)
    return TextArtifact("\n".join(list(entries)))
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.load_artifact"></span>

### load\_artifact(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
def load_artifact(self, path: str) -> BaseArtifact:
    response = self.try_load_file(path)
    return BaseArtifact.from_json(
        response.decode() if self.encoding is None else response.decode(encoding=self.encoding)
    )
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.load_file"></span>

### load\_file(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
def load_file(self, path: str) -> BlobArtifact | TextArtifact:
    if self.encoding is None:
        return BlobArtifact(self.try_load_file(path))
    return TextArtifact(self.try_load_file(path).decode(encoding=self.encoding), encoding=self.encoding)
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.save_artifact"></span>

### save\_artifact(path, artifact)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
def save_artifact(self, path: str, artifact: BaseArtifact) -> InfoArtifact:
    artifact_json = artifact.to_json()
    value = artifact_json.encode() if self.encoding is None else artifact_json.encode(encoding=self.encoding)

    location = self.try_save_file(path, value)

    return InfoArtifact(f"Successfully saved artifact at: {location}")
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.save_file"></span>

### save\_file(path, value)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
def save_file(self, path: str, value: bytes | str) -> InfoArtifact:
    if isinstance(value, str):
        value = value.encode() if self.encoding is None else value.encode(encoding=self.encoding)
    elif isinstance(value, (bytearray, memoryview)):
        raise ValueError(f"Unsupported type: {type(value)}")

    location = self.try_save_file(path, value)

    return InfoArtifact(f"Successfully saved file at: {location}")
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.try_list_files"></span>

### try\_list\_files(path)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
@abstractmethod
def try_list_files(self, path: str) -> list[str]: ...
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.try_load_file"></span>

### try\_load\_file(path)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
@abstractmethod
def try_load_file(self, path: str) -> bytes: ...
```

</details>

<span id="griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver.try_save_file"></span>

### try\_save\_file(path, value)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/base\_file\_manager\_driver.py</code>

</summary>

```python
@abstractmethod
def try_save_file(self, path: str, value: bytes) -> str: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
