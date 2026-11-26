---
title: local_structure_run_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/local_structure_run_driver/
lastModified: 2025-11-07T18:06:05Z
---

# local\_structure\_run\_driver

<span id="griptape.drivers.structure_run.local_structure_run_driver.LocalStructureRunDriver"></span>

Bases:
[`BaseStructureRunDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/#griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver "BaseStructureRunDriver (griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/structure\_run/local\_structure\_run\_driver.py</code>

</summary>

```python
@define
class LocalStructureRunDriver(BaseStructureRunDriver):
    create_structure: Callable[[], Structure] = field(kw_only=True)

    def try_run(self, *args: BaseArtifact) -> BaseArtifact:
        old_env = os.environ.copy()
        try:
            os.environ.update(self.env)
            structure = self.create_structure().run(*[arg.value for arg in args])
        finally:
            os.environ.clear()
            os.environ.update(old_env)

        return structure.output
```

</details>

- `create_structure = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.structure_run.local_structure_run_driver.LocalStructureRunDriver.create_structure"></span>

<span id="griptape.drivers.structure_run.local_structure_run_driver.LocalStructureRunDriver.try_run"></span>

### try\_run(\*args)

<details>

<summary>

Source Code in <code>griptape/drivers/structure\_run/local\_structure\_run\_driver.py</code>

</summary>

```python
def try_run(self, *args: BaseArtifact) -> BaseArtifact:
    old_env = os.environ.copy()
    try:
        os.environ.update(self.env)
        structure = self.create_structure().run(*[arg.value for arg in args])
    finally:
        os.environ.clear()
        os.environ.update(old_env)

    return structure.output
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
