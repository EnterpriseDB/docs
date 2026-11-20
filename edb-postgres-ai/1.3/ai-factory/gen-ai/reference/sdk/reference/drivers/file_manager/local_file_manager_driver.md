---
title: local_file_manager_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/file_manager/local_file_manager_driver/
lastModified: 2025-11-07T18:06:05Z
---

# local\_file\_manager\_driver

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver"></span>

Bases:
[`BaseFileManagerDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/file_manager/base_file_manager_driver/#griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver "BaseFileManagerDriver (griptape.drivers.file_manager.base_file_manager_driver.BaseFileManagerDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                            | Type  | Description                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/file_manager/local_file_manager_driver/#griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.workdir" title="workdir           property       writable    (griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.workdir)"><code class="language-python">workdir</code></a> | `str` | The working directory as an absolute path. List, load, and save operations will be performed relative to this directory. Defaults to the current working directory. Setting this to None will disable the working directory and all paths will be treated as absolute paths.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
@define
class LocalFileManagerDriver(BaseFileManagerDriver):
    """LocalFileManagerDriver can be used to list, load, and save files on the local file system.

    Attributes:
        workdir: The working directory as an absolute path. List, load, and save operations will be performed relative to this directory.
                 Defaults to the current working directory.
                 Setting this to None will disable the working directory and all paths will be treated as absolute paths.
    """

    _workdir: str = field(default=Factory(lambda: os.getcwd()), kw_only=True, alias="workdir")

    @property
    def workdir(self) -> str:
        if os.path.isabs(self._workdir):
            return self._workdir
        return os.path.join(os.getcwd(), self._workdir)

    @workdir.setter
    def workdir(self, value: str) -> None:
        self._workdir = value

    def try_list_files(self, path: str) -> list[str]:
        full_path = self._full_path(path)
        return os.listdir(full_path)

    def try_load_file(self, path: str) -> bytes:
        full_path = self._full_path(path)
        if self._is_dir(full_path):
            raise IsADirectoryError
        return Path(full_path).read_bytes()

    def try_save_file(self, path: str, value: bytes) -> str:
        full_path = self._full_path(path)
        if self._is_dir(full_path):
            raise IsADirectoryError
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        Path(full_path).write_bytes(value)
        return full_path

    def _full_path(self, path: str) -> str:
        full_path = path if os.path.isabs(path) else os.path.join(self.workdir, path.lstrip("/"))
        # Need to keep the trailing slash if it was there,
        # because it means the path is a directory.
        ended_with_sep = path.endswith("/")
        full_path = os.path.normpath(full_path)
        if ended_with_sep:
            full_path = full_path.rstrip("/") + "/"
        return full_path

    def _is_dir(self, full_path: str) -> bool:
        return full_path.endswith("/") or Path(full_path).is_dir()
```

</details>

- `_workdir = field(default=Factory(lambda: os.getcwd()), kw_only=True, alias='workdir')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver._workdir"></span>

- `workdir` <small>property</small> <small>writable</small>  <span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.workdir"></span>

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver._full_path"></span>

### \_full\_path(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
def _full_path(self, path: str) -> str:
    full_path = path if os.path.isabs(path) else os.path.join(self.workdir, path.lstrip("/"))
    # Need to keep the trailing slash if it was there,
    # because it means the path is a directory.
    ended_with_sep = path.endswith("/")
    full_path = os.path.normpath(full_path)
    if ended_with_sep:
        full_path = full_path.rstrip("/") + "/"
    return full_path
```

</details>

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver._is_dir"></span>

### \_is\_dir(full\_path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
def _is_dir(self, full_path: str) -> bool:
    return full_path.endswith("/") or Path(full_path).is_dir()
```

</details>

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.try_list_files"></span>

### try\_list\_files(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
def try_list_files(self, path: str) -> list[str]:
    full_path = self._full_path(path)
    return os.listdir(full_path)
```

</details>

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.try_load_file"></span>

### try\_load\_file(path)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
def try_load_file(self, path: str) -> bytes:
    full_path = self._full_path(path)
    if self._is_dir(full_path):
        raise IsADirectoryError
    return Path(full_path).read_bytes()
```

</details>

<span id="griptape.drivers.file_manager.local_file_manager_driver.LocalFileManagerDriver.try_save_file"></span>

### try\_save\_file(path, value)

<details>

<summary>

Source Code in <code>griptape/drivers/file\_manager/local\_file\_manager\_driver.py</code>

</summary>

```python
def try_save_file(self, path: str, value: bytes) -> str:
    full_path = self._full_path(path)
    if self._is_dir(full_path):
        raise IsADirectoryError
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    Path(full_path).write_bytes(value)
    return full_path
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
