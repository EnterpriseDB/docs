---
title: artifact_file_output_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# artifact\_file\_output\_mixin

<span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin"></span>

<details>

<summary>

Source Code in <code>griptape/mixins/artifact\_file\_output\_mixin.py</code>

</summary>

```python
@define(slots=False)
class ArtifactFileOutputMixin:
    output_dir: Optional[str] = field(default=None, kw_only=True)
    output_file: Optional[str] = field(default=None, kw_only=True)

    @output_dir.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_output_dir(self, _: Attribute, output_dir: str) -> None:
        if not output_dir:
            return

        if self.output_file:
            raise ValueError("Can't have both output_dir and output_file specified.")

    @output_file.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_output_file(self, _: Attribute, output_file: str) -> None:
        if not output_file:
            return

        if self.output_dir:
            raise ValueError("Can't have both output_dir and output_file specified.")

    def _write_to_file(self, artifact: BaseArtifact) -> None:
        if self.output_file:
            outfile = self.output_file
        elif self.output_dir:
            outfile = os.path.join(self.output_dir, artifact.name)
        else:
            raise ValueError("No output_file or output_dir specified.")

        if os.path.dirname(outfile):
            os.makedirs(os.path.dirname(outfile), exist_ok=True)

        Path(outfile).write_bytes(artifact.to_bytes())
```

</details>

- `output_dir = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir"></span>

- `output_file = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file"></span>

<span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin._write_to_file"></span>

### \_write\_to\_file(artifact)

<details>

<summary>

Source Code in <code>griptape/mixins/artifact\_file\_output\_mixin.py</code>

</summary>

```python
def _write_to_file(self, artifact: BaseArtifact) -> None:
    if self.output_file:
        outfile = self.output_file
    elif self.output_dir:
        outfile = os.path.join(self.output_dir, artifact.name)
    else:
        raise ValueError("No output_file or output_dir specified.")

    if os.path.dirname(outfile):
        os.makedirs(os.path.dirname(outfile), exist_ok=True)

    Path(outfile).write_bytes(artifact.to_bytes())
```

</details>

<span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.validate_output_dir"></span>

### validat&#x65;_&#x6F;utput\_dir(_, output\_dir)

<details>

<summary>

Source Code in <code>griptape/mixins/artifact\_file\_output\_mixin.py</code>

</summary>

```python
@output_dir.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_output_dir(self, _: Attribute, output_dir: str) -> None:
    if not output_dir:
        return

    if self.output_file:
        raise ValueError("Can't have both output_dir and output_file specified.")
```

</details>

<span id="griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.validate_output_file"></span>

### validat&#x65;_&#x6F;utput\_file(_, output\_file)

<details>

<summary>

Source Code in <code>griptape/mixins/artifact\_file\_output\_mixin.py</code>

</summary>

```python
@output_file.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_output_file(self, _: Attribute, output_file: str) -> None:
    if not output_file:
        return

    if self.output_dir:
        raise ValueError("Can't have both output_dir and output_file specified.")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
