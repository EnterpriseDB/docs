---
title: dummy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/dummy/
lastModified: 2026-05-22T19:45:14+05:30
---

# dummy

- `__all__ = ['DummyImageGenerationDriver']` <small>module-attribute</small>  <span id="griptape.drivers.image_generation.dummy.__all__"></span>

<span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver"></span>

Bases:
[`BaseImageGenerationDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver "BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/dummy\_image\_generation\_driver.py</code>

</summary>

```python
@define
class DummyImageGenerationDriver(BaseImageGenerationDriver):
    model: None = field(init=False, default=None, kw_only=True)

    def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
        raise DummyError(__class__.__name__, "try_text_to_image")

    def try_image_variation(
        self,
        prompts: list[str],
        image: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        raise DummyError(__class__.__name__, "try_image_variation")

    def try_image_inpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        raise DummyError(__class__.__name__, "try_image_inpainting")

    def try_image_outpainting(
        self,
        prompts: list[str],
        image: ImageArtifact,
        mask: ImageArtifact,
        negative_prompts: Optional[list[str]] = None,
    ) -> ImageArtifact:
        raise DummyError(__class__.__name__, "try_image_outpainting")
```

</details>

- `model = field(init=False, default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver.model"></span>

<span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver.try_image_inpainting"></span>

### try\_image\_inpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/dummy\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_inpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    raise DummyError(__class__.__name__, "try_image_inpainting")
```

</details>

<span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver.try_image_outpainting"></span>

### try\_image\_outpainting(prompts, image, mask, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/dummy\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_outpainting(
    self,
    prompts: list[str],
    image: ImageArtifact,
    mask: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    raise DummyError(__class__.__name__, "try_image_outpainting")
```

</details>

<span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver.try_image_variation"></span>

### try\_image\_variation(prompts, image, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/dummy\_image\_generation\_driver.py</code>

</summary>

```python
def try_image_variation(
    self,
    prompts: list[str],
    image: ImageArtifact,
    negative_prompts: Optional[list[str]] = None,
) -> ImageArtifact:
    raise DummyError(__class__.__name__, "try_image_variation")
```

</details>

<span id="griptape.drivers.image_generation.dummy.DummyImageGenerationDriver.try_text_to_image"></span>

### try\_text\_to\_image(prompts, negative\_prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/image\_generation/dummy\_image\_generation\_driver.py</code>

</summary>

```python
def try_text_to_image(self, prompts: list[str], negative_prompts: Optional[list[str]] = None) -> ImageArtifact:
    raise DummyError(__class__.__name__, "try_text_to_image")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
