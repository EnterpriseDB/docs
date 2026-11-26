---
title: webhook
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/webhook/
lastModified: 2026-05-22T19:45:14+05:30
---

# webhook

- `__all__ = ['WebhookEventListenerDriver']` <small>module-attribute</small>  <span id="griptape.drivers.event_listener.webhook.__all__"></span>

<span id="griptape.drivers.event_listener.webhook.WebhookEventListenerDriver"></span>

Bases:
[`BaseEventListenerDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/base_event_listener_driver/#griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver "BaseEventListenerDriver (griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/webhook\_event\_listener\_driver.py</code>

</summary>

```python
@define
class WebhookEventListenerDriver(BaseEventListenerDriver):
    webhook_url: str = field(kw_only=True)
    headers: Optional[dict] = field(default=None, kw_only=True)

    def try_publish_event_payload(self, event_payload: dict) -> None:
        response = requests.post(url=self.webhook_url, json=event_payload, headers=self.headers)
        response.raise_for_status()

    def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
        response = requests.post(url=self.webhook_url, json=event_payload_batch, headers=self.headers)
        response.raise_for_status()
```

</details>

- `headers = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.webhook.WebhookEventListenerDriver.headers"></span>

- `webhook_url = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.webhook.WebhookEventListenerDriver.webhook_url"></span>

<span id="griptape.drivers.event_listener.webhook.WebhookEventListenerDriver.try_publish_event_payload"></span>

### try\_publish\_event\_payload(event\_payload)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/webhook\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload(self, event_payload: dict) -> None:
    response = requests.post(url=self.webhook_url, json=event_payload, headers=self.headers)
    response.raise_for_status()
```

</details>

<span id="griptape.drivers.event_listener.webhook.WebhookEventListenerDriver.try_publish_event_payload_batch"></span>

### try\_publish\_event\_payload\_batch(event\_payload\_batch)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/webhook\_event\_listener\_driver.py</code>

</summary>

```python
def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
    response = requests.post(url=self.webhook_url, json=event_payload_batch, headers=self.headers)
    response.raise_for_status()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
