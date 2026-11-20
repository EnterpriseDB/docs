---
title: stream
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/stream/
lastModified: 2025-11-07T18:06:05Z
---

# stream

<span id="griptape.utils.stream.Stream"></span>

A wrapper for Structures filters Events relevant to text output and converts them to TextArtifacts.

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                     | Description                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/stream/#griptape.utils.stream.Stream.structure" title="structure = field()           class-attribute       instance-attribute    (griptape.utils.stream.Stream.structure)"><code class="language-python">structure</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/#griptape.structures.Structure" title="Structure (griptape.structures.Structure)"><code class="language-python">Structure</code></a> | The Structure to wrap.<br/> |

<details>

<summary>

Source Code in <code>griptape/utils/stream.py</code>

</summary>

```python
@define
class Stream:
    """A wrapper for Structures filters Events relevant to text output and converts them to TextArtifacts.

    Attributes:
        structure: The Structure to wrap.
    """

    structure: Structure = field()
    event_types: list[type[BaseEvent]] = field(
        default=Factory(lambda: [TextChunkEvent, ActionChunkEvent, FinishPromptEvent, FinishStructureRunEvent])
    )

    def run(self, *args) -> Iterator[TextArtifact]:
        action_str = ""

        for event in self.structure.run_stream(*args, event_types=self.event_types):
            if isinstance(event, FinishPromptEvent):
                yield TextArtifact(value="\n")
            elif isinstance(event, TextChunkEvent):
                yield TextArtifact(value=event.token)
            elif isinstance(event, ActionChunkEvent):
                if event.tag is not None and event.name is not None and event.path is not None:
                    yield TextArtifact(f"{event.name}.{event.tag} ({event.path})")
                if event.partial_input is not None:
                    action_str += event.partial_input
                    try:
                        yield TextArtifact(json.dumps(json.loads(action_str), indent=2))
                        action_str = ""
                    except Exception:
                        pass
```

</details>

- `event_types = field(default=Factory(lambda: [TextChunkEvent, ActionChunkEvent, FinishPromptEvent, FinishStructureRunEvent]))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.stream.Stream.event_types"></span>

- `structure = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.stream.Stream.structure"></span>

<span id="griptape.utils.stream.Stream.run"></span>

### run(\*args)

<details>

<summary>

Source Code in <code>griptape/utils/stream.py</code>

</summary>

```python
def run(self, *args) -> Iterator[TextArtifact]:
    action_str = ""

    for event in self.structure.run_stream(*args, event_types=self.event_types):
        if isinstance(event, FinishPromptEvent):
            yield TextArtifact(value="\n")
        elif isinstance(event, TextChunkEvent):
            yield TextArtifact(value=event.token)
        elif isinstance(event, ActionChunkEvent):
            if event.tag is not None and event.name is not None and event.path is not None:
                yield TextArtifact(f"{event.name}.{event.tag} ({event.path})")
            if event.partial_input is not None:
                action_str += event.partial_input
                try:
                    yield TextArtifact(json.dumps(json.loads(action_str), indent=2))
                    action_str = ""
                except Exception:
                    pass
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
