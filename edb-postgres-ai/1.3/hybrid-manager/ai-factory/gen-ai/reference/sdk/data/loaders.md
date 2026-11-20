---
title: Loaders
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/loaders/
lastModified: 2026-05-22T19:45:14+05:30
---

# Loaders

## Overview

Loaders are used to load data from sources and parse it into [Artifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/)s.
Each loader can be used to load a single "source" with [load()](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_loader/#griptape.loaders.base_loader.BaseLoader.load) or
multiple sources with [load\_collection()](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/loaders/base_loader/#griptape.loaders.base_loader.BaseLoader.load_collection).

## File

The following Loaders load a file using a [FileManagerDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/file_manager/base_file_manager_driver/) and loads the resulting data into an [Artifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/) for the respective file type.

As a convenience, File Loaders also have a `save()` method that can save an Artifact to a destination.

```python
from griptape.drivers.file_manager.local import LocalFileManagerDriver
from griptape.loaders import TextLoader

loader = TextLoader(file_manager_driver=LocalFileManagerDriver())

data = loader.load("tests/resources/test.txt")

data.value = data.value.replace("foo", "bar")

loader.save("tests/resources/test.txt", data)

```

### Text

Loads text files into [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#text)s:

```python
import urllib.request
from pathlib import Path

from griptape.loaders import TextLoader

TextLoader().load("tests/resources/test.txt")

urllib.request.urlretrieve("https://example-files.online-convert.com/document/txt/example.txt", "example.txt")

TextLoader().load(Path("example.txt"))

TextLoader().load_collection(["tests/resources/test.txt", Path("example.txt")])

```

### PDF

> **Note: Info**
>
> This driver requires the `loaders-pdf` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

Loads PDF files into [ListArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list)s, where each element is a [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#text) containing a page of the PDF:

```python
import urllib.request
from pathlib import Path

from griptape.loaders import PdfLoader

urllib.request.urlretrieve("https://arxiv.org/pdf/1706.03762.pdf", "attention.pdf")

# Load a single PDF file
PdfLoader().load("attention.pdf")
# You can also pass a Path object
PdfLoader().load(Path("attention.pdf"))

urllib.request.urlretrieve("https://arxiv.org/pdf/1706.03762.pdf", "CoT.pdf")

# Load multiple PDF files
PdfLoader().load_collection([Path("attention.pdf"), Path("CoT.pdf")])

```

### CSV

Loads CSV files into [ListArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list)s, where each element is a [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#text) containing a row of the CSV:

```python
from pathlib import Path

from griptape.loaders import CsvLoader

# Load a single CSV file
CsvLoader().load("tests/resources/cities.csv")
# You can also pass a Path object
CsvLoader().load(Path("tests/resources/cities.csv"))

# Load multiple CSV files
CsvLoader().load_collection([Path("tests/resources/cities.csv"), "tests/resources/addresses.csv"])

```

### Image

> **Note: Info**
>
> This driver requires the `loaders-image` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

Loads images into [ImageArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#image)s:

```python
from pathlib import Path

from griptape.loaders import ImageLoader

# Load an image from disk
ImageLoader().load("tests/resources/mountain.png")

# You can also pass a Path object
ImageLoader().load(Path("tests/resources/mountain.png"))

```

By default, the Image Loader will load images in their native format, but not all models work on all formats. To normalize the format of Artifacts returned by the Loader, set the `format` field.

```python
from pathlib import Path

from griptape.loaders import ImageLoader

# Load a single image in BMP format
ImageLoader(format="bmp").load("tests/resources/mountain.png")
# You can also pass a Path object
ImageLoader(format="bmp").load(Path("tests/resources/mountain.png"))

# Load multiple images in BMP format
ImageLoader().load_collection([Path("tests/resources/mountain.png"), "tests/resources/cow.png"])

```

### Audio

Loads audio files into [AudioArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#audio)s:

The Loader will load audio in its native format and populates the resulting Artifact's `format` field by making a best-effort guess of the underlying audio format using the `filetype` package.

```python
from pathlib import Path

from griptape.loaders import AudioLoader

# Load an image from disk
AudioLoader().load("tests/resources/sentences.wav")

# You can also pass a Path object
AudioLoader().load(Path("tests/resources/sentences.wav"))

```

### JSON

Loads JSON files into [JsonArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#json)s:

```python
from pathlib import Path

from griptape.loaders import JsonLoader

# Load an image from disk
JsonLoader().load("tests/resources/test.json")

# You can also pass a Path object
JsonLoader().load(Path("tests/resources/test.json"))

```

## Web

> **Note: Info**
>
> This driver requires the `loaders-web` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

Scrapes web pages using a [WebScraperDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/web-scraper-drivers/) and loads the resulting text into [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#text)s.

```python
from griptape.loaders import WebLoader

WebLoader().load("https://www.griptape.ai")

WebLoader().load_collection(["https://www.griptape.ai", "https://docs.griptape.ai"])

```

## SQL

Loads data from a SQL database using a [SQLDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/sql-drivers/) and loads the resulting data into [ListArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list)s, where each element is a [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#text) containing a row of the SQL query.

```python
from griptape.drivers.sql.sql_driver import SqlDriver
from griptape.loaders import SqlLoader

SqlLoader(sql_driver=SqlDriver(engine_url="sqlite:///:memory:")).load("SELECT 'foo', 'bar'")

SqlLoader(sql_driver=SqlDriver(engine_url="sqlite:///:memory:")).load_collection(
    ["SELECT 'foo', 'bar';", "SELECT 'fizz', 'buzz';"]
)

```

## Email

> **Note: Info**
>
> This driver requires the `loaders-email` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

Loads data from an imap email server into a [ListArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/list_artifact/)s, where each element is a [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/) containing an email.

```python
from griptape.loaders import EmailLoader

loader = EmailLoader(imap_url="an.email.server.hostname", username="username", password="password")

loader.load(EmailLoader.EmailQuery(label="INBOX"))

loader.load_collection([EmailLoader.EmailQuery(label="INBOX"), EmailLoader.EmailQuery(label="SENT")])

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
