---
title: amazon_sqs
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/amazon_sqs/
lastModified: 2025-11-07T18:06:05Z
---

# amazon\_sqs

- `__all__ = ['AmazonSqsEventListenerDriver']` <small>module-attribute</small>  <span id="griptape.drivers.event_listener.amazon_sqs.__all__"></span>

<span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver"></span>

Bases:
[`BaseEventListenerDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/base_event_listener_driver/#griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver "BaseEventListenerDriver (griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/amazon\_sqs\_event\_listener\_driver.py</code>

</summary>

```python
@define
class AmazonSqsEventListenerDriver(BaseEventListenerDriver):
    queue_url: str = field(kw_only=True)
    session: boto3.Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    _client: Optional[SQSClient] = field(default=None, kw_only=True, alias="client", metadata={"serializable": False})

    @lazy_property()
    def client(self) -> SQSClient:
        return self.session.client("sqs")

    def try_publish_event_payload(self, event_payload: dict) -> None:
        self.client.send_message(QueueUrl=self.queue_url, MessageBody=json.dumps(event_payload))

    def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
        entries: Sequence[SendMessageBatchRequestEntryTypeDef] = [
            {"Id": str(event_payload["id"]), "MessageBody": json.dumps(event_payload)}
            for event_payload in event_payload_batch
        ]

        self.client.send_message_batch(QueueUrl=self.queue_url, Entries=entries)
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver._client"></span>

- `queue_url = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver.queue_url"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver.session"></span>

<span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/amazon\_sqs\_event\_listener\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> SQSClient:
    return self.session.client("sqs")
```

</details>

<span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver.try_publish_event_payload"></span>

### try\_publish\_event\_payload(event\_payload)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/amazon\_sqs\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload(self, event_payload: dict) -> None:
    self.client.send_message(QueueUrl=self.queue_url, MessageBody=json.dumps(event_payload))
```

</details>

<span id="griptape.drivers.event_listener.amazon_sqs.AmazonSqsEventListenerDriver.try_publish_event_payload_batch"></span>

### try\_publish\_event\_payload\_batch(event\_payload\_batch)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/amazon\_sqs\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
    entries: Sequence[SendMessageBatchRequestEntryTypeDef] = [
        {"Id": str(event_payload["id"]), "MessageBody": json.dumps(event_payload)}
        for event_payload in event_payload_batch
    ]

    self.client.send_message_batch(QueueUrl=self.queue_url, Entries=entries)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
