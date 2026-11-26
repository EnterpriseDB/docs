---
title: audio_loader
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/audio_loader/
lastModified: 2025-11-07T18:06:05Z
---

# audio\_loader

<span id="griptape.loaders.audio_loader.AudioLoader"></span>

Bases:
[`BaseFileLoader[AudioArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/loaders/base_file_loader/#griptape.loaders.base_file_loader.BaseFileLoader "BaseFileLoader (griptape.loaders.base_file_loader.BaseFileLoader)")

<details>

<summary>

Source Code in <code>griptape/loaders/audio\_loader.py</code>

</summary>

```python
@define
class AudioLoader(BaseFileLoader[AudioArtifact]):
    """Loads audio content into audio artifacts."""

    def try_parse(self, data: bytes) -> AudioArtifact:
        filetype_guess = filetype.guess(data)
        if filetype_guess is None:
            raise ValueError("Could not determine the file type of the audio data")
        return AudioArtifact(data, format=filetype_guess.extension)
```

</details>

<span id="griptape.loaders.audio_loader.AudioLoader.try_parse"></span>

### try\_parse(data)

<details>

<summary>

Source Code in <code>griptape/loaders/audio\_loader.py</code>

</summary>

```python
def try_parse(self, data: bytes) -> AudioArtifact:
    filetype_guess = filetype.guess(data)
    if filetype_guess is None:
        raise ValueError("Could not determine the file type of the audio data")
    return AudioArtifact(data, format=filetype_guess.extension)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
