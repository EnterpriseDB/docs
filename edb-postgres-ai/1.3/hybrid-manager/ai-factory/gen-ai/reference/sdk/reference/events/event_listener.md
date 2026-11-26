---
title: event_listener
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/
lastModified: 2026-05-22T19:45:14+05:30
---

# event\_listener

- `T = TypeVar('T', bound=BaseEvent)` <small>module-attribute</small>  <span id="griptape.events.event_listener.T"></span>

<span id="griptape.events.event_listener.EventListener"></span>

Bases:
[`Generic[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/#griptape.events.event_listener.T "typing.Generic")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/#griptape.events.event_listener.EventListener.on_event" title="on_event = field(default=None)           class-attribute       instance-attribute    (griptape.events.event_listener.EventListener.on_event)"><code class="language-python">on\_event</code></a>                                                                    | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/#griptape.events.event_listener.T" title="T = TypeVar('T', bound=BaseEvent)           module-attribute    (griptape.events.event_listener.T)"><code class="language-python">Optional\[Callable\[\[T], Optional\[BaseEvent \| dict]]]</code></a> | The on\_event function that will be called when an event is published. The on\_event function should accept an event and return either the event or a dictionary. If the on\_event returns None, the event will not be published.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/#griptape.events.event_listener.EventListener.event_types" title="event_types = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.events.event_listener.EventListener.event_types)"><code class="language-python">event\_types</code></a>                                          | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">Optional\[list\[type\[T]]]</code></a>                                                                                                                                                                   | A list of event types that the event listener should listen for. If not provided, the event listener will listen for all event types.<br/>                                                                                             |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/event_listener/#griptape.events.event_listener.EventListener.event_listener_driver" title="event_listener_driver = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.events.event_listener.EventListener.event_listener_driver)"><code class="language-python">event\_listener\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/#griptape.drivers.event_listener.BaseEventListenerDriver" title="BaseEventListenerDriver (griptape.drivers.event_listener.BaseEventListenerDriver)"><code class="language-python">Optional\[BaseEventListenerDriver]</code></a>                | The driver that will be used to publish events.<br/>                                                                                                                                                                                   |

<details>

<summary>

Source Code in <code>griptape/events/event\_listener.py</code>

</summary>

```python
@define
class EventListener(Generic[T]):
    """An event listener that listens for events and handles them.

    Attributes:
        on_event: The on_event function that will be called when an event is published.
            The on_event function should accept an event and return either the event or a dictionary.
            If the on_event returns None, the event will not be published.
        event_types: A list of event types that the event listener should listen for.
            If not provided, the event listener will listen for all event types.
        event_listener_driver: The driver that will be used to publish events.
    """

    on_event: Optional[Callable[[T], Optional[BaseEvent | dict]]] = field(default=None)
    event_types: Optional[list[type[T]]] = field(default=None, kw_only=True)
    event_listener_driver: Optional[BaseEventListenerDriver] = field(default=None, kw_only=True)

    def __enter__(self) -> Self:
        from griptape.events import EventBus

        EventBus.add_event_listener(self)

        return self

    def __exit__(self, type, value, traceback) -> None:  # noqa: ANN001, A002
        from griptape.events import EventBus

        EventBus.remove_event_listener(self)

    def publish_event(self, event: T, *, flush: bool = False) -> None:
        event_types = self.event_types

        if event_types is None or any(isinstance(event, event_type) for event_type in event_types):
            handled_event = event
            if self.on_event is not None:
                handled_event = self.on_event(event)

            if self.event_listener_driver is not None and handled_event is not None:
                self.event_listener_driver.publish_event(handled_event)

        if self.event_listener_driver is not None and flush:
            self.event_listener_driver.flush_events()
```

</details>

- `event_listener_driver = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.event_listener.EventListener.event_listener_driver"></span>

- `event_types = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.event_listener.EventListener.event_types"></span>

- `on_event = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.event_listener.EventListener.on_event"></span>

<span id="griptape.events.event_listener.EventListener.__enter__"></span>

### **enter**()

<details>

<summary>

Source Code in <code>griptape/events/event\_listener.py</code>

</summary>

```python
def __enter__(self) -> Self:
    from griptape.events import EventBus

    EventBus.add_event_listener(self)

    return self
```

</details>

<span id="griptape.events.event_listener.EventListener.__exit__"></span>

### **exit**(type, value, traceback)

<details>

<summary>

Source Code in <code>griptape/events/event\_listener.py</code>

</summary>

```python
def __exit__(self, type, value, traceback) -> None:  # noqa: ANN001, A002
    from griptape.events import EventBus

    EventBus.remove_event_listener(self)
```

</details>

<span id="griptape.events.event_listener.EventListener.publish_event"></span>

### publish\_event(event, \*, flush=False)

<details>

<summary>

Source Code in <code>griptape/events/event\_listener.py</code>

</summary>

```python
def publish_event(self, event: T, *, flush: bool = False) -> None:
    event_types = self.event_types

    if event_types is None or any(isinstance(event, event_type) for event_type in event_types):
        handled_event = event
        if self.on_event is not None:
            handled_event = self.on_event(event)

        if self.event_listener_driver is not None and handled_event is not None:
            self.event_listener_driver.publish_event(handled_event)

    if self.event_listener_driver is not None and flush:
        self.event_listener_driver.flush_events()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
