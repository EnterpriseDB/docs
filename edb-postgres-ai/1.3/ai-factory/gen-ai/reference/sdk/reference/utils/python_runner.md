---
title: python_runner
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/python_runner/
lastModified: 2025-11-07T18:06:05Z
---

# python\_runner

<span id="griptape.utils.python_runner.PythonRunner"></span>

<details>

<summary>

Source Code in <code>griptape/utils/python\_runner.py</code>

</summary>

```python
@define
class PythonRunner:
    libs: dict[str, str] = field(factory=dict, kw_only=True)

    def run(self, code: str) -> str:
        global_stdout = sys.stdout
        sys.stdout = local_stdout = StringIO()

        try:
            for lib, alias in self.libs.items():
                imported_lib = importlib.import_module(lib)
                globals()[alias] = imported_lib

            exec(f"print({code})", {}, {alias: eval(alias) for alias in self.libs.values()})

            output = local_stdout.getvalue()
        except Exception as e:
            output = str(e)
        finally:
            sys.stdout = global_stdout

        return output.strip()
```

</details>

- `libs = field(factory=dict, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.python_runner.PythonRunner.libs"></span>

<span id="griptape.utils.python_runner.PythonRunner.run"></span>

### run(code)

<details>

<summary>

Source Code in <code>griptape/utils/python\_runner.py</code>

</summary>

```python
def run(self, code: str) -> str:
    global_stdout = sys.stdout
    sys.stdout = local_stdout = StringIO()

    try:
        for lib, alias in self.libs.items():
            imported_lib = importlib.import_module(lib)
            globals()[alias] = imported_lib

        exec(f"print({code})", {}, {alias: eval(alias) for alias in self.libs.values()})

        output = local_stdout.getvalue()
    except Exception as e:
        output = str(e)
    finally:
        sys.stdout = global_stdout

    return output.strip()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
