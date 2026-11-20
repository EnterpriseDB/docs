---
title: csv_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/csv_loader/
lastModified: 2025-11-07T18:06:05Z
---

# csv\_loader

<span id="griptape.loaders.csv_loader.CsvLoader"></span>

Bases:
[`BaseFileLoader[ListArtifact[TextArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/#griptape.loaders.BaseFileLoader "BaseFileLoader (griptape.loaders.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/csv\_loader.py</code>

</summary>

```python
@define
class CsvLoader(BaseFileLoader[ListArtifact[TextArtifact]]):
    delimiter: str = field(default=",", kw_only=True)
    encoding: str = field(default="utf-8", kw_only=True)
    format_row: Callable[[dict], str] = field(
        default=lambda value: "\n".join(f"{key}: {val}" for key, val in value.items()), kw_only=True
    )

    def try_parse(self, data: bytes) -> ListArtifact[TextArtifact]:
        reader = csv.DictReader(StringIO(data.decode(self.encoding)), delimiter=self.delimiter)

        return ListArtifact(
            [TextArtifact(self.format_row(row), meta={"row_num": row_num}) for row_num, row in enumerate(reader)]
        )
```

</details>

- `delimiter = field(default=',', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.csv_loader.CsvLoader.delimiter"></span>

- `encoding = field(default='utf-8', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.csv_loader.CsvLoader.encoding"></span>

- `format_row = field(default=lambda value: '\n'.join(f'{key}: {val}' for (key, val) in value.items()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.loaders.csv_loader.CsvLoader.format_row"></span>

<span id="griptape.loaders.csv_loader.CsvLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/csv\_loader.py</code>

</summary>

```python
def try_parse(self, data: bytes) -> ListArtifact[TextArtifact]:
    reader = csv.DictReader(StringIO(data.decode(self.encoding)), delimiter=self.delimiter)

    return ListArtifact(
        [TextArtifact(self.format_row(row), meta={"row_num": row_num}) for row_num, row in enumerate(reader)]
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
