---
title: base_structure_run_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_structure\_run\_driver

<span id="griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type             | Description                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | --------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/#griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver.env" title="env = field(default=Factory(dict), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver.env)"><code class="language-python">env</code></a> | `dict[str, str]` | Environment variables to set before running the Structure.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/structure\_run/base\_structure\_run\_driver.py</code>

</summary>

```python
@define
class BaseStructureRunDriver(ABC):
    """Base class for Structure Run Drivers.

    Attributes:
        env: Environment variables to set before running the Structure.
    """

    env: dict[str, str] = field(default=Factory(dict), kw_only=True)

    def run(self, *args: BaseArtifact) -> BaseArtifact:
        return self.try_run(*args)

    @abstractmethod
    def try_run(self, *args: BaseArtifact) -> BaseArtifact: ...
```

</details>

- `env = field(default=Factory(dict), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver.env"></span>

<span id="griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver.run"></span>

### run(\*args)

<details>

<summary>

Source Code in <code>griptape/drivers/structure\_run/base\_structure\_run\_driver.py</code>

</summary>

```python
def run(self, *args: BaseArtifact) -> BaseArtifact:
    return self.try_run(*args)
```

</details>

<span id="griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver.try_run"></span>

### try\_run(\*args)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/structure\_run/base\_structure\_run\_driver.py</code>

</summary>

```python
@abstractmethod
def try_run(self, *args: BaseArtifact) -> BaseArtifact: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
