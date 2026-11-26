---
title: structure_run
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/
lastModified: 2026-05-22T19:45:14+05:30
---

# structure\_run

- `__all__ = ['BaseStructureRunDriver']` <small>module-attribute</small>  <span id="griptape.drivers.structure_run.__all__"></span>

<span id="griptape.drivers.structure_run.BaseStructureRunDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                              | Type             | Description                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/#griptape.drivers.structure_run.BaseStructureRunDriver.env" title="env = field(default=Factory(dict), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.structure_run.BaseStructureRunDriver.env)"><code class="language-python">env</code></a> | `dict[str, str]` | Environment variables to set before running the Structure.<br/> |

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

- `env = field(default=Factory(dict), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.structure_run.BaseStructureRunDriver.env"></span>

<span id="griptape.drivers.structure_run.BaseStructureRunDriver.run"></span>

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

<span id="griptape.drivers.structure_run.BaseStructureRunDriver.try_run"></span>

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

- [BaseStructureRunDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/): Bases:
- [GriptapeCloudStructureRunDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/griptape_cloud/): -   all = \['GriptapeCloudStructureRunDriver'] module-attribute
- [GriptapeCloudStructureRunDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/griptape_cloud_structure_run_driver/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [LocalStructureRunDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/local/): -   all = \['LocalStructureRunDriver'] module-attribute
- [LocalStructureRunDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/local_structure_run_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
