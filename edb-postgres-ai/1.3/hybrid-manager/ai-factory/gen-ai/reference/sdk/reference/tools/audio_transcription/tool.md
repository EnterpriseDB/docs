---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/audio_transcription/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.audio_transcription.tool.AudioTranscriptionTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/audio\_transcription/tool.py</code>

</summary>

```python
@define
class AudioTranscriptionTool(BaseTool):
    """A tool that can be used to generate transcriptions from input audio."""

    audio_transcription_driver: BaseAudioTranscriptionDriver = field(kw_only=True)
    audio_loader: AudioLoader = field(default=Factory(lambda: AudioLoader()), kw_only=True)

    @activity(
        config={
            "description": "This tool can be used to generate transcriptions of audio files on disk.",
            "schema": Schema({Literal("path", description="The paths to an audio file on disk."): str}),
        },
    )
    def transcribe_audio_from_disk(self, params: dict) -> TextArtifact | ErrorArtifact:
        audio_path = params["values"]["path"]

        audio_artifact = self.audio_loader.load(audio_path)

        return self.audio_transcription_driver.run(audio_artifact)

    @activity(
        config={
            "description": "This tool can be used to generate the transcription of an audio artifact in memory.",
            "schema": Schema({"schema": Schema({"memory_name": str, "artifact_namespace": str, "artifact_name": str})}),
        },
    )
    def transcribe_audio_from_memory(self, params: dict[str, Any]) -> TextArtifact | ErrorArtifact:
        memory = self.find_input_memory(params["values"]["memory_name"])
        artifact_namespace = params["values"]["artifact_namespace"]
        artifact_name = params["values"]["artifact_name"]

        if memory is None:
            return ErrorArtifact("memory not found")

        audio_artifact = cast(
            "AudioArtifact",
            load_artifact_from_memory(memory, artifact_namespace, artifact_name, AudioArtifact),
        )

        return self.audio_transcription_driver.run(audio_artifact)
```

</details>

- `audio_loader = field(default=Factory(lambda: AudioLoader()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.audio_transcription.tool.AudioTranscriptionTool.audio_loader"></span>

- `audio_transcription_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.audio_transcription.tool.AudioTranscriptionTool.audio_transcription_driver"></span>

<span id="griptape.tools.audio_transcription.tool.AudioTranscriptionTool.transcribe_audio_from_disk"></span>

### transcribe\_audio\_from\_disk(params)

<details>

<summary>

Source Code in <code>griptape/tools/audio\_transcription/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "This tool can be used to generate transcriptions of audio files on disk.",
        "schema": Schema({Literal("path", description="The paths to an audio file on disk."): str}),
    },
)
def transcribe_audio_from_disk(self, params: dict) -> TextArtifact | ErrorArtifact:
    audio_path = params["values"]["path"]

    audio_artifact = self.audio_loader.load(audio_path)

    return self.audio_transcription_driver.run(audio_artifact)
```

</details>

<span id="griptape.tools.audio_transcription.tool.AudioTranscriptionTool.transcribe_audio_from_memory"></span>

### transcribe\_audio\_from\_memory(params)

<details>

<summary>

Source Code in <code>griptape/tools/audio\_transcription/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "This tool can be used to generate the transcription of an audio artifact in memory.",
        "schema": Schema({"schema": Schema({"memory_name": str, "artifact_namespace": str, "artifact_name": str})}),
    },
)
def transcribe_audio_from_memory(self, params: dict[str, Any]) -> TextArtifact | ErrorArtifact:
    memory = self.find_input_memory(params["values"]["memory_name"])
    artifact_namespace = params["values"]["artifact_namespace"]
    artifact_name = params["values"]["artifact_name"]

    if memory is None:
        return ErrorArtifact("memory not found")

    audio_artifact = cast(
        "AudioArtifact",
        load_artifact_from_memory(memory, artifact_namespace, artifact_name, AudioArtifact),
    )

    return self.audio_transcription_driver.run(audio_artifact)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
