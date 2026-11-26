---
title: aws_iot_core
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/aws_iot_core/
lastModified: 2025-11-07T18:06:05Z
---

# aws\_iot\_core

- `__all__ = ['AwsIotCoreEventListenerDriver']` <small>module-attribute</small>  <span id="griptape.drivers.event_listener.aws_iot_core.__all__"></span>

<span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver"></span>

Bases:
[`BaseEventListenerDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/base_event_listener_driver/#griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver "BaseEventListenerDriver (griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/aws\_iot\_core\_event\_listener\_driver.py</code>

</summary>

```python
@define
class AwsIotCoreEventListenerDriver(BaseEventListenerDriver):
    iot_endpoint: str = field(kw_only=True)
    topic: str = field(kw_only=True)
    session: boto3.Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    _client: Optional[IoTDataPlaneClient] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> IoTDataPlaneClient:
        return self.session.client("iot-data")

    def try_publish_event_payload(self, event_payload: dict) -> None:
        self.client.publish(topic=self.topic, payload=json.dumps(event_payload))

    def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
        self.client.publish(topic=self.topic, payload=json.dumps(event_payload_batch))
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver._client"></span>

- `iot_endpoint = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.iot_endpoint"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.session"></span>

- `topic = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.topic"></span>

<span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/aws\_iot\_core\_event\_listener\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> IoTDataPlaneClient:
    return self.session.client("iot-data")
```

</details>

<span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.try_publish_event_payload"></span>

### try\_publish\_event\_payload(event\_payload)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/aws\_iot\_core\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload(self, event_payload: dict) -> None:
    self.client.publish(topic=self.topic, payload=json.dumps(event_payload))
```

</details>

<span id="griptape.drivers.event_listener.aws_iot_core.AwsIotCoreEventListenerDriver.try_publish_event_payload_batch"></span>

### try\_publish\_event\_payload\_batch(event\_payload\_batch)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/aws\_iot\_core\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
    self.client.publish(topic=self.topic, payload=json.dumps(event_payload_batch))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
