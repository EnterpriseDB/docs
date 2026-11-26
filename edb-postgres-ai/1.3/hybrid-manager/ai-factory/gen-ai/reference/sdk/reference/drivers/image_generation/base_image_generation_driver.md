---
title: base_image_generation_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/base_image_generation_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_image\_generation\_driver

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
,  [`ExponentialBackoffMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/exponential_backoff_mixin/#griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin "ExponentialBackoffMixin (griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
@define
class BaseImageGenerationDriver(SerializableMixin, ExponentialBackoffMixin, ABC):
    model: str = field(kw_only=True, metadata={"serializable": True})

    def before_run(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> None:
        EventBus.publish_event(StartImageGenerationEvent(prompts=prompts, negative_prompts=negative_prompts))

    def after_run(self) -> None:
        EventBus.publish_event(FinishImageGenerationEvent())

    def run_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run(prompts, negative_prompts)
                result = self.try_text_to_image(prompts, negative_prompts)
                self.after_run()

                return result

        raise Exception("Failed to run text to image generation")

    def run_image_variation(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run(prompts, negative_prompts)
                result = self.try_image_variation(prompts, image, negative_prompts)
                self.after_run()

                return result

        raise Exception("Failed to generate image variations")

    def run_image_inpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run(prompts, negative_prompts)
                result = self.try_image_inpainting(prompts, image, mask, negative_prompts)
                self.after_run()

                return result

        raise Exception("Failed to run image inpainting")

    def run_image_outpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run(prompts, negative_prompts)
                result = self.try_image_outpainting(prompts, image, mask, negative_prompts)
                self.after_run()

                return result

        raise Exception("Failed to run image outpainting")

    @abstractmethod
    def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact: ...

    @abstractmethod
    def try_image_variation(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact: ...

    @abstractmethod
    def try_image_inpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact: ...

    @abstractmethod
    def try_image_outpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact: ...
```

</details>

- `model = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.model"></span>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def after_run(self) -> None:
    EventBus.publish_event(FinishImageGenerationEvent())
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.before_run"></span>

### before\_run(prompts, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def before_run(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> None:
    EventBus.publish_event(StartImageGenerationEvent(prompts=prompts, negative_prompts=negative_prompts))
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.run_image_inpainting"></span>

### run\_image\_inpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def run_image_inpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run(prompts, negative_prompts)
            result = self.try_image_inpainting(prompts, image, mask, negative_prompts)
            self.after_run()

            return result

    raise Exception("Failed to run image inpainting")
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.run_image_outpainting"></span>

### run\_image\_outpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def run_image_outpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run(prompts, negative_prompts)
            result = self.try_image_outpainting(prompts, image, mask, negative_prompts)
            self.after_run()

            return result

    raise Exception("Failed to run image outpainting")
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.run_image_variation"></span>

### run\_image\_variation(prompts, image, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def run_image_variation(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run(prompts, negative_prompts)
            result = self.try_image_variation(prompts, image, negative_prompts)
            self.after_run()

            return result

    raise Exception("Failed to generate image variations")
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.run_text_to_image"></span>

### run\_text\_to\_image(prompts, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
def run_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run(prompts, negative_prompts)
            result = self.try_text_to_image(prompts, negative_prompts)
            self.after_run()

            return result

    raise Exception("Failed to run text to image generation")
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.try_image_inpainting"></span>

### try\_image\_inpainting(prompts, image, mask, negative\_prompts=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
@abstractmethod
def try_image_inpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact: ...
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.try_image_outpainting"></span>

### try\_image\_outpainting(prompts, image, mask, negative\_prompts=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
@abstractmethod
def try_image_outpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact: ...
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.try_image_variation"></span>

### try\_image\_variation(prompts, image, negative\_prompts=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
@abstractmethod
def try_image_variation(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact: ...
```

</details>

<span id="griptape.drivers.image_generation.base_image_generation_driver.BaseImageGenerationDriver.try_text_to_image"></span>

### try\_text\_to\_image(prompts, negative\_prompts=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/base\_image\_generation\_driver.py</code>

</summary>

```python
@abstractmethod
def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
