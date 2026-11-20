---
title: command_runner
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/utils/command_runner/
lastModified: 2026-05-22T19:45:14+05:30
---

# command\_runner

<span id="griptape.utils.command_runner.CommandRunner"></span>

<details>

<summary>

Source Code in <code>griptape/utils/command\_runner.py</code>

</summary>

```python
@define
class CommandRunner:
    def run(self, command: str) -> BaseArtifact:
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        stdout, stderr = process.communicate()

        if len(stderr) == 0:
            return TextArtifact(stdout.strip().decode())
        return ErrorArtifact(f"error: {stderr.strip()}")
```

</details>

<span id="griptape.utils.command_runner.CommandRunner.run"></span>

### run(command)

<details>

<summary>

Source Code in <code>griptape/utils/command\_runner.py</code>

</summary>

```python
def run(self, command: str) -> BaseArtifact:
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    stdout, stderr = process.communicate()

    if len(stderr) == 0:
        return TextArtifact(stdout.strip().decode())
    return ErrorArtifact(f"error: {stderr.strip()}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
