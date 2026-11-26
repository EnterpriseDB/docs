---
title: pdf_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/pdf_loader/
lastModified: 2026-05-22T19:45:14+05:30
---

# pdf\_loader

<span id="griptape.loaders.pdf_loader.PdfLoader"></span>

Bases:
[`BaseFileLoader`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_file_loader/#griptape.loaders.base_file_loader.BaseFileLoader "BaseFileLoader (griptape.loaders.base_file_loader.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/pdf\_loader.py</code>

</summary>

```python
@define
class PdfLoader(BaseFileLoader):
    def try_parse(
        self,
        data: bytes,
        *,
        password: Optional[str] = None,
    ) -> ListArtifact:
        pypdf = import_optional_dependency("pypdf")
        reader = pypdf.PdfReader(BytesIO(data), strict=True, password=password)
        pages = [TextArtifact(p.extract_text()) for p in reader.pages]

        return ListArtifact(pages)
```

</details>

<span id="griptape.loaders.pdf_loader.PdfLoader.try_parse"></span>

### try\_parse(data, \*, password=None)

<details>

<summary>

Source Code in <code>griptape/loaders/pdf\_loader.py</code>

</summary>

```python
def try_parse(
    self,
    data: bytes,
    *,
    password: Optional[str] = None,
) -> ListArtifact:
    pypdf = import_optional_dependency("pypdf")
    reader = pypdf.PdfReader(BytesIO(data), strict=True, password=password)
    pages = [TextArtifact(p.extract_text()) for p in reader.pages]

    return ListArtifact(pages)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
