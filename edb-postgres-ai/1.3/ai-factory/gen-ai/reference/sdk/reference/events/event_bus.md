---
title: event_bus
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/event_bus/
lastModified: 2025-11-07T18:06:05Z
---

# event\_bus

- `EventBus = _EventBus()` <small>module-attribute</small>  <span id="griptape.events.event_bus.EventBus"></span>

- `_event_listeners = ContextVar('event_listeners', default=None)` <small>module-attribute</small>  <span id="griptape.events.event_bus._event_listeners"></span>

<span id="griptape.events.event_bus._EventBus"></span>

Bases:
[`SingletonMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/singleton_mixin/#griptape.mixins.singleton_mixin.SingletonMixin "SingletonMixin (griptape.mixins.singleton_mixin.SingletonMixin)")

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
@define
class _EventBus(SingletonMixin):
    @property
    def event_listeners(self) -> list[EventListener]:
        event_listeners_val = _event_listeners.get()
        if event_listeners_val is None:
            event_listeners_val = []
            _event_listeners.set(event_listeners_val)
        return event_listeners_val

    @event_listeners.setter
    def event_listeners(self, event_listeners: list[EventListener]) -> None:
        _event_listeners.set(event_listeners)

    def add_event_listeners(self, event_listeners: list[EventListener]) -> list[EventListener]:
        return [self.add_event_listener(event_listener) for event_listener in event_listeners]

    def remove_event_listeners(self, event_listeners: list[EventListener]) -> None:
        for event_listener in event_listeners:
            self.remove_event_listener(event_listener)

    def add_event_listener(self, event_listener: EventListener) -> EventListener:
        if event_listener not in self.event_listeners:
            self.event_listeners = self.event_listeners + [event_listener]

        return event_listener

    def remove_event_listener(self, event_listener: EventListener) -> None:
        if event_listener in self.event_listeners:
            self.event_listeners = [listener for listener in self.event_listeners if listener != event_listener]

    def publish_event(self, event: BaseEvent, *, flush: bool = False) -> None:
        for event_listener in self.event_listeners:
            event_listener.publish_event(event, flush=flush)

    def clear_event_listeners(self) -> None:
        self.event_listeners = []
```

</details>

- `event_listeners` <small>property</small> <small>writable</small>  <span id="griptape.events.event_bus._EventBus.event_listeners"></span>

<span id="griptape.events.event_bus._EventBus.add_event_listener"></span>

### add\_event\_listener(event\_listener)

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def add_event_listener(self, event_listener: EventListener) -> EventListener:
    if event_listener not in self.event_listeners:
        self.event_listeners = self.event_listeners + [event_listener]

    return event_listener
```

</details>

<span id="griptape.events.event_bus._EventBus.add_event_listeners"></span>

### add\_event\_listeners(event\_listeners)

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def add_event_listeners(self, event_listeners: list[EventListener]) -> list[EventListener]:
    return [self.add_event_listener(event_listener) for event_listener in event_listeners]
```

</details>

<span id="griptape.events.event_bus._EventBus.clear_event_listeners"></span>

### clear\_event\_listeners()

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def clear_event_listeners(self) -> None:
    self.event_listeners = []
```

</details>

<span id="griptape.events.event_bus._EventBus.publish_event"></span>

### publish\_event(event, \*, flush=False)

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def publish_event(self, event: BaseEvent, *, flush: bool = False) -> None:
    for event_listener in self.event_listeners:
        event_listener.publish_event(event, flush=flush)
```

</details>

<span id="griptape.events.event_bus._EventBus.remove_event_listener"></span>

### remove\_event\_listener(event\_listener)

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def remove_event_listener(self, event_listener: EventListener) -> None:
    if event_listener in self.event_listeners:
        self.event_listeners = [listener for listener in self.event_listeners if listener != event_listener]
```

</details>

<span id="griptape.events.event_bus._EventBus.remove_event_listeners"></span>

### remove\_event\_listeners(event\_listeners)

<details>

<summary>

Source Code in <code>griptape/events/event\_bus.py</code>

</summary>

```python
def remove_event_listeners(self, event_listeners: list[EventListener]) -> None:
    for event_listener in event_listeners:
        self.remove_event_listener(event_listener)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
