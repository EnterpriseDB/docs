---
title: action_call_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/action_call_message_content/
lastModified: 2025-11-07T18:06:05Z
---

# action\_call\_message\_content

<span id="griptape.common.prompt_stack.contents.action_call_message_content.ActionCallMessageContent"></span>

Bases:
[`BaseMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseMessageContent "BaseMessageContent (griptape.common.BaseMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/action\_call\_message\_content.py</code>

</summary>

```python
@define
class ActionCallMessageContent(BaseMessageContent):
    artifact: ActionArtifact = field(metadata={"serializable": True})

    @classmethod
    def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> ActionCallMessageContent:
        action_call_deltas = [delta for delta in deltas if isinstance(delta, ActionCallDeltaMessageContent)]

        tag = None
        name = None
        path = None
        json_input = ""

        for delta in action_call_deltas:
            if delta.tag is not None:
                tag = delta.tag
            if delta.name is not None:
                name = delta.name
            if delta.path is not None:
                path = delta.path
            if delta.partial_input is not None:
                json_input += delta.partial_input

        if tag is not None and name is not None and path is not None:
            try:
                parsed_input = json.loads(json_input or "{}")
            except json.JSONDecodeError as exc:
                raise ValueError("Invalid JSON input for ToolAction") from exc
            action = ToolAction(tag=tag, name=name, path=path, input=parsed_input)
        else:
            raise ValueError("Missing required fields for ToolAction")

        artifact = ActionArtifact(value=action)

        return cls(artifact=artifact)
```

</details>

- `artifact = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.action_call_message_content.ActionCallMessageContent.artifact"></span>

<span id="griptape.common.prompt_stack.contents.action_call_message_content.ActionCallMessageContent.from_deltas"></span>

### from\_deltas(deltas)classmethod

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/action\_call\_message\_content.py</code>

</summary>

```python
@classmethod
def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> ActionCallMessageContent:
    action_call_deltas = [delta for delta in deltas if isinstance(delta, ActionCallDeltaMessageContent)]

    tag = None
    name = None
    path = None
    json_input = ""

    for delta in action_call_deltas:
        if delta.tag is not None:
            tag = delta.tag
        if delta.name is not None:
            name = delta.name
        if delta.path is not None:
            path = delta.path
        if delta.partial_input is not None:
            json_input += delta.partial_input

    if tag is not None and name is not None and path is not None:
        try:
            parsed_input = json.loads(json_input or "{}")
        except json.JSONDecodeError as exc:
            raise ValueError("Invalid JSON input for ToolAction") from exc
        action = ToolAction(tag=tag, name=name, path=path, input=parsed_input)
    else:
        raise ValueError("Missing required fields for ToolAction")

    artifact = ActionArtifact(value=action)

    return cls(artifact=artifact)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
