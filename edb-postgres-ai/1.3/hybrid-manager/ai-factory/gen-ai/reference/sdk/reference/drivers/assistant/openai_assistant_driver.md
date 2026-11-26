---
title: openai_assistant_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/openai_assistant_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# openai\_assistant\_driver

<span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver"></span>

Bases:
[`BaseAssistantDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/#griptape.drivers.assistant.BaseAssistantDriver "BaseAssistantDriver (griptape.drivers.assistant.BaseAssistantDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/openai\_assistant\_driver.py</code>

</summary>

```python
@define
class OpenAiAssistantDriver(BaseAssistantDriver):
    class EventHandler(AssistantEventHandler):
        @override
        def on_text_delta(self, delta: TextDelta, snapshot: Text) -> None:
            if delta.value is not None:
                EventBus.publish_event(TextChunkEvent(token=delta.value))

        @override
        def on_tool_call_delta(self, delta: ToolCallDelta, snapshot: ToolCall) -> None:
            if delta.type == "code_interpreter" and delta.code_interpreter is not None:
                if delta.code_interpreter.input:
                    EventBus.publish_event(TextChunkEvent(token=delta.code_interpreter.input))
                if delta.code_interpreter.outputs:
                    EventBus.publish_event(TextChunkEvent(token="\n\noutput >"))
                    for output in delta.code_interpreter.outputs:
                        if output.type == "logs" and output.logs:
                            EventBus.publish_event(TextChunkEvent(token=output.logs))

    base_url: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    organization: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    thread_id: Optional[str] = field(default=None, kw_only=True)
    assistant_id: str = field(kw_only=True)
    event_handler: AssistantEventHandler = field(
        default=Factory(lambda: OpenAiAssistantDriver.EventHandler()), kw_only=True, metadata={"serializable": False}
    )
    auto_create_thread: bool = field(default=True, kw_only=True)

    _client: Optional[openai.OpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.OpenAI:
        return openai.OpenAI(
            base_url=self.base_url,
            api_key=self.api_key,
            organization=self.organization,
        )

    def try_run(self, *args: BaseArtifact) -> TextArtifact:
        if self.thread_id is None:
            if self.auto_create_thread:
                thread_id = self.client.beta.threads.create().id
                self.thread_id = thread_id
            else:
                raise ValueError("Thread ID is required but not provided and auto_create_thread is disabled.")
        else:
            thread_id = self.thread_id

        response = self._create_run(thread_id, *args)

        response.meta.update({"assistant_id": self.assistant_id, "thread_id": self.thread_id})

        return response

    def _create_run(self, thread_id: str, *args: BaseArtifact) -> TextArtifact:
        content = "\n".join(arg.value for arg in args)
        message_id = self.client.beta.threads.messages.create(thread_id=thread_id, role="user", content=content)
        with self.client.beta.threads.runs.stream(
            thread_id=thread_id,
            assistant_id=self.assistant_id,
            event_handler=self.event_handler,
        ) as stream:
            stream.until_done()
            last_messages = stream.get_final_messages()

            message_contents = []
            for message in last_messages:
                message_contents.append(
                    "".join(content.text.value for content in message.content if content.type == "TextContentBlock")
                )
            message_text = "\n".join(message_contents)

            response = TextArtifact(message_text)

            response.meta.update(
                {"assistant_id": self.assistant_id, "thread_id": self.thread_id, "message_id": message_id}
            )
            return response
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver._client"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.api_key"></span>

- `assistant_id = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.assistant_id"></span>

- `auto_create_thread = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.auto_create_thread"></span>

- `base_url = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.base_url"></span>

- `event_handler = field(default=Factory(lambda: OpenAiAssistantDriver.EventHandler()), kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.event_handler"></span>

- `organization = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.organization"></span>

- `thread_id = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.thread_id"></span>

<span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.EventHandler"></span>

### EventHandler

Bases:

<span title="openai.AssistantEventHandler">AssistantEventHandler</span>

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/openai\_assistant\_driver.py</code>

</summary>

```python
class EventHandler(AssistantEventHandler):
    @override
    def on_text_delta(self, delta: TextDelta, snapshot: Text) -> None:
        if delta.value is not None:
            EventBus.publish_event(TextChunkEvent(token=delta.value))

    @override
    def on_tool_call_delta(self, delta: ToolCallDelta, snapshot: ToolCall) -> None:
        if delta.type == "code_interpreter" and delta.code_interpreter is not None:
            if delta.code_interpreter.input:
                EventBus.publish_event(TextChunkEvent(token=delta.code_interpreter.input))
            if delta.code_interpreter.outputs:
                EventBus.publish_event(TextChunkEvent(token="\n\noutput >"))
                for output in delta.code_interpreter.outputs:
                    if output.type == "logs" and output.logs:
                        EventBus.publish_event(TextChunkEvent(token=output.logs))
```

</details>

<span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver._create_run"></span>

### \_create\_run(thread\_id, \*args)

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/openai\_assistant\_driver.py</code>

</summary>

```python
def _create_run(self, thread_id: str, *args: BaseArtifact) -> TextArtifact:
    content = "\n".join(arg.value for arg in args)
    message_id = self.client.beta.threads.messages.create(thread_id=thread_id, role="user", content=content)
    with self.client.beta.threads.runs.stream(
        thread_id=thread_id,
        assistant_id=self.assistant_id,
        event_handler=self.event_handler,
    ) as stream:
        stream.until_done()
        last_messages = stream.get_final_messages()

        message_contents = []
        for message in last_messages:
            message_contents.append(
                "".join(content.text.value for content in message.content if content.type == "TextContentBlock")
            )
        message_text = "\n".join(message_contents)

        response = TextArtifact(message_text)

        response.meta.update(
            {"assistant_id": self.assistant_id, "thread_id": self.thread_id, "message_id": message_id}
        )
        return response
```

</details>

<span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/openai\_assistant\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.OpenAI:
    return openai.OpenAI(
        base_url=self.base_url,
        api_key=self.api_key,
        organization=self.organization,
    )
```

</details>

<span id="griptape.drivers.assistant.openai_assistant_driver.OpenAiAssistantDriver.try_run"></span>

### try\_run(\*args)

<details>

<summary>

Source Code in <code>griptape/drivers/assistant/openai\_assistant\_driver.py</code>

</summary>

```python
def try_run(self, *args: BaseArtifact) -> TextArtifact:
    if self.thread_id is None:
        if self.auto_create_thread:
            thread_id = self.client.beta.threads.create().id
            self.thread_id = thread_id
        else:
            raise ValueError("Thread ID is required but not provided and auto_create_thread is disabled.")
    else:
        thread_id = self.thread_id

    response = self._create_run(thread_id, *args)

    response.meta.update({"assistant_id": self.assistant_id, "thread_id": self.thread_id})

    return response
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
