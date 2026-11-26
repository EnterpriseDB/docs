---
title: base_event_listener_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/event_listener/base_event_listener_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_event\_listener\_driver

- `logger = logging.getLogger(__name__)` <small>module-attribute</small>  <span id="griptape.drivers.event_listener.base_event_listener_driver.logger"></span>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver"></span>

Bases:
[`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")
,  [`ExponentialBackoffMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/exponential_backoff_mixin/#griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin "ExponentialBackoffMixin (griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
@define
class BaseEventListenerDriver(FuturesExecutorMixin, ExponentialBackoffMixin, ABC):
    batched: bool = field(default=True, kw_only=True)
    batch_size: int = field(default=10, kw_only=True)

    _batch: list[dict] = field(default=Factory(list), kw_only=True)

    @property
    def batch(self) -> list[dict]:
        return self._batch

    def publish_event(self, event: BaseEvent | dict) -> None:
        event_payload = event if isinstance(event, dict) else event.to_dict()

        with self.create_futures_executor() as futures_executor:
            if self.batched:
                self._batch.append(event_payload)
                if len(self.batch) >= self.batch_size:
                    futures_executor.submit(with_contextvars(self._safe_publish_event_payload_batch), self.batch)
                    self._batch = []
            else:
                futures_executor.submit(with_contextvars(self._safe_publish_event_payload), event_payload)

    def flush_events(self) -> None:
        if self.batch:
            with self.create_futures_executor() as futures_executor:
                futures_executor.submit(with_contextvars(self._safe_publish_event_payload_batch), self.batch)
            self._batch = []

    @abstractmethod
    def try_publish_event_payload(self, event_payload: dict) -> None: ...

    @abstractmethod
    def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None: ...

    def _safe_publish_event_payload(self, event_payload: dict) -> None:
        try:
            for attempt in self.retrying():
                with attempt:
                    self.try_publish_event_payload(event_payload)
        except Exception:
            logger.warning("Failed to publish event after %s attempts", self.max_attempts, exc_info=True)

    def _safe_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
        try:
            for attempt in self.retrying():
                with attempt:
                    self.try_publish_event_payload_batch(event_payload_batch)
        except Exception:
            logger.warning("Failed to publish event batch after %s attempts", self.max_attempts, exc_info=True)
```

</details>

- `_batch = field(default=Factory(list), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver._batch"></span>

- `batch` <small>property</small>  <span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.batch"></span>

- `batch_size = field(default=10, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.batch_size"></span>

- `batched = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.batched"></span>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver._safe_publish_event_payload"></span>

### \_safe\_publish\_event\_payload(event\_payload)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
def _safe_publish_event_payload(self, event_payload: dict) -> None:
    try:
        for attempt in self.retrying():
            with attempt:
                self.try_publish_event_payload(event_payload)
    except Exception:
        logger.warning("Failed to publish event after %s attempts", self.max_attempts, exc_info=True)
```

</details>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver._safe_publish_event_payload_batch"></span>

### \_safe\_publish\_event\_payload\_batch(event\_payload\_batch)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
def _safe_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None:
    try:
        for attempt in self.retrying():
            with attempt:
                self.try_publish_event_payload_batch(event_payload_batch)
    except Exception:
        logger.warning("Failed to publish event batch after %s attempts", self.max_attempts, exc_info=True)
```

</details>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.flush_events"></span>

### flush\_events()

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
def flush_events(self) -> None:
    if self.batch:
        with self.create_futures_executor() as futures_executor:
            futures_executor.submit(with_contextvars(self._safe_publish_event_payload_batch), self.batch)
        self._batch = []
```

</details>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.publish_event"></span>

### publish\_event(event)

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
def publish_event(self, event: BaseEvent | dict) -> None:
    event_payload = event if isinstance(event, dict) else event.to_dict()

    with self.create_futures_executor() as futures_executor:
        if self.batched:
            self._batch.append(event_payload)
            if len(self.batch) >= self.batch_size:
                futures_executor.submit(with_contextvars(self._safe_publish_event_payload_batch), self.batch)
                self._batch = []
        else:
            futures_executor.submit(with_contextvars(self._safe_publish_event_payload), event_payload)
```

</details>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.try_publish_event_payload"></span>

### try\_publish\_event\_payload(event\_payload)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
@abstractmethod
def try_publish_event_payload(self, event_payload: dict) -> None: ...
```

</details>

<span id="griptape.drivers.event_listener.base_event_listener_driver.BaseEventListenerDriver.try_publish_event_payload_batch"></span>

### try\_publish\_event\_payload\_batch(event\_payload\_batch)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/event\_listener/base\_event\_listener\_driver.py</code>

</summary>

```python
@abstractmethod
def try_publish_event_payload_batch(self, event_payload_batch: list[dict]) -> None: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
