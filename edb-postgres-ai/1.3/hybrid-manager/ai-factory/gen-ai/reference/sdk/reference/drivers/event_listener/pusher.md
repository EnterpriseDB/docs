---
title: pusher
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/pusher/
lastModified: 2026-05-22T19:45:14+05:30
---

# pusher

- `__all__ = ['PusherEventListenerDriver']` <small>module-attribute</small>  <span id="griptape.drivers.event_listener.pusher.__all__"></span>

<span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver"></span>

Bases:
[`BaseEventListenerDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/#griptape.drivers.event_listener.BaseEventListenerDriver "BaseEventListenerDriver (griptape.drivers.event_listener.BaseEventListenerDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/pusher\_event\_listener\_driver.py</code>

</summary>

```python
@define
class PusherEventListenerDriver(BaseEventListenerDriver):
    app_id: str = field(kw_only=True, metadata={"serializable": True})
    key: str = field(kw_only=True, metadata={"serializable": True})
    secret: str = field(kw_only=True, metadata={"serializable": False})
    cluster: str = field(kw_only=True, metadata={"serializable": True})
    channel: str = field(kw_only=True, metadata={"serializable": True})
    event_name: str = field(kw_only=True, metadata={"serializable": True})
    ssl: bool = field(default=True, kw_only=True, metadata={"serializable": True})
    _client: Optional[Pusher] = field(default=None, kw_only=True, alias="client", metadata={"serializable": False})

    @lazy_property()
    def client(self) -> Pusher:
        return import_optional_dependency("pusher").Pusher(
            app_id=self.app_id,
            key=self.key,
            secret=self.secret,
            cluster=self.cluster,
            ssl=self.ssl,
        )

    def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
        data = [
            {"channel": self.channel, "name": self.event_name, "data": event_payload}
            for event_payload in event_payload_batch
        ]

        self.client.trigger_batch(data)

    def try_publish_event_payload(self, event_payload: dict) -> None:
        self.client.trigger(channels=self.channel, event_name=self.event_name, data=event_payload)
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver._client"></span>

- `app_id = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.app_id"></span>

- `channel = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.channel"></span>

- `cluster = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.cluster"></span>

- `event_name = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.event_name"></span>

- `key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.key"></span>

- `secret = field(kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.secret"></span>

- `ssl = field(default=True, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.ssl"></span>

<span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/pusher\_event\_listener\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> Pusher:
    return import_optional_dependency("pusher").Pusher(
        app_id=self.app_id,
        key=self.key,
        secret=self.secret,
        cluster=self.cluster,
        ssl=self.ssl,
    )
```

</details>

<span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.try_publish_event_payload"></span>

### try\_publish\_event\_payload(event\_payload)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/pusher\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload(self, event_payload: dict) -> None:
    self.client.trigger(channels=self.channel, event_name=self.event_name, data=event_payload)
```

</details>

<span id="griptape.drivers.event_listener.pusher.PusherEventListenerDriver.try_publish_event_payload_batch"></span>

### try\_publish\_event\_payload\_batch(event\_payload\_batch)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/pusher\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
    data = [
        {"channel": self.channel, "name": self.event_name, "data": event_payload}
        for event_payload in event_payload_batch
    ]

    self.client.trigger_batch(data)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
