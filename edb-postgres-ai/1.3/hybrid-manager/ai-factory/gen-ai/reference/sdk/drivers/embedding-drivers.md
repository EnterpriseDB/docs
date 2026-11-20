---
title: Embedding
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/embedding-drivers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Embedding

## Overview

Embeddings in Gen AI Builder are multidimensional representations of text or image data.
Embeddings carry semantic information, making them powerful for use-cases like text or image similarity search in a [Rag Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/).

## Embedding Drivers

### OpenAI

The [OpenAiEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai_embedding_driver/) uses the [OpenAI Embeddings API](https://platform.openai.com/docs/guides/embeddings).

#### Code

```python
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver

embeddings = OpenAiEmbeddingDriver().embed("Hello Griptape!")

# display the first 3 embeddings
print(embeddings[:3])

```

#### Logs

```text
[0.025706132873892784, -0.00652786111459136, -0.05880141258239746]

```

```
[0.0017853748286142945, 0.006118456833064556, -0.005811543669551611]
```

### OpenAI Compatible

Many services such as [LMStudio](https://lmstudio.ai/) and [OhMyGPT](https://www.ohmygpt.com/) provide OpenAI-compatible APIs. You can use the [OpenAiEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai_embedding_driver/) to interact with these services.
Simply set the `base_url` to the service's API endpoint and the `model` to the model name. If the service requires an API key, you can set it in the `api_key` field.

```python
from griptape.drivers.embedding.openai import OpenAiEmbeddingDriver

embedding_driver = OpenAiEmbeddingDriver(
    base_url="http://127.0.0.1:1234/v1",
    model="nomic-ai/nomic-embed-text-v1.5-GGUF/nomic-embed-text-v1.5.Q2_K",
)

embeddings = embedding_driver.embed("Hello world!")

# display the first 3 embeddings
print(embeddings[:3])

```

> **Tip**
>
> Make sure to include `v1` at the end of the `base_url` to match the OpenAI API endpoint.

### Azure OpenAI

The [AzureOpenAiEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/azure_openai_embedding_driver/) uses the same parameters as [OpenAiEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/openai_embedding_driver/)
with updated defaults.

### Bedrock Titan

> **Note: Info**
>
> This driver requires the `drivers-embedding-amazon-bedrock` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [AmazonBedrockTitanEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_bedrock_titan_embedding_driver/) uses the [Amazon Bedrock Embeddings API](https://docs.aws.amazon.com/bedrock/latest/userguide/embeddings.html).

#### Code

```python
from griptape.drivers.embedding.amazon_bedrock import AmazonBedrockTitanEmbeddingDriver
from griptape.loaders import ImageLoader

embedding_driver = AmazonBedrockTitanEmbeddingDriver()
embeddings = embedding_driver.embed("Hello world!")

print(embeddings[:3])

# Some models support images!
multi_modal_embedding_driver = AmazonBedrockTitanEmbeddingDriver(model="amazon.titan-embed-image-v1")
image = ImageLoader().load("tests/resources/cow.png")
image_embeddings = multi_modal_embedding_driver.embed(image)

print(image_embeddings[:3])

```

#### Logs

```text
[0.10888671875, 0.291015625, 0.2265625]

```

```
[-0.234375, -0.024902344, -0.14941406]
```

### Google

> **Note: Info**
>
> This driver requires the `drivers-embedding-google` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [GoogleEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/google_embedding_driver/) uses the [Google Embeddings API](https://ai.google.dev/tutorials/python_quickstart#use_embeddings).

#### Code

```python
from griptape.drivers.embedding.google import GoogleEmbeddingDriver

embeddings = GoogleEmbeddingDriver().embed("Hello world!")

# display the first 3 embeddings
print(embeddings[:3])

```

#### Logs

```text
[0.05886331, 0.0033929434, -0.072810836]

```

```
[0.0588633, 0.0033929371, -0.072810836]
```

### Hugging Face Hub

> **Note: Info**
>
> This driver requires the `drivers-embedding-huggingface` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [HuggingFaceHubEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/huggingface_hub_embedding_driver/) connects to the [Hugging Face Hub API](https://huggingface.co/docs/hub/api). It supports models with the following tasks:

- feature-extraction

#### Code

```python
import os

from griptape.drivers.embedding.huggingface_hub import HuggingFaceHubEmbeddingDriver
from griptape.tokenizers import HuggingFaceTokenizer

driver = HuggingFaceHubEmbeddingDriver(
    api_token=os.environ["HUGGINGFACE_HUB_ACCESS_TOKEN"],
    model="sentence-transformers/all-MiniLM-L6-v2",
    tokenizer=HuggingFaceTokenizer(
        model="sentence-transformers/all-MiniLM-L6-v2",
        max_output_tokens=512,
    ),
)

embeddings = driver.embed("Hello world!")

# display the first 3 embeddings
print(embeddings[:3])

```

#### Logs

```text
[-0.02038687840104103, 0.02528087981045246, -0.0005662207258865237]

```

### Ollama

> **Note: Info**
>
> This driver requires the `drivers-embedding-ollama` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

The [OllamaEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/ollama_embedding_driver/) uses the [Ollama Embeddings API](https://ollama.com/blog/embedding-models).

```python
from griptape.drivers.embedding.ollama import OllamaEmbeddingDriver

driver = OllamaEmbeddingDriver(
    model="all-minilm",
)

results = driver.embed("Hello world!")

# display the first 3 embeddings
print(results[:3])

```

### Amazon SageMaker Jumpstart

The [AmazonSageMakerJumpstartEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/amazon_sagemaker_jumpstart_embedding_driver/) uses the [Amazon SageMaker Endpoints](https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html) to generate embeddings on AWS.

> **Note: Info**
>
> This driver requires the `drivers-embedding-amazon-sagemaker` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

```python
import os

from griptape.drivers.embedding.amazon_sagemaker_jumpstart import AmazonSageMakerJumpstartEmbeddingDriver

driver = AmazonSageMakerJumpstartEmbeddingDriver(
    endpoint=os.environ["SAGEMAKER_ENDPOINT"],
    model=os.environ["SAGEMAKER_TENSORFLOW_HUB_MODEL"],
)

embeddings = driver.embed("Hello world!")

# display the first 3 embeddings
print(embeddings[:3])

```

### VoyageAI

The [VoyageAiEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/voyageai_embedding_driver/) uses the [VoyageAI Embeddings API](https://www.voyageai.com/).

> **Note: Info**
>
> This driver requires the `drivers-embedding-voyageai` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

#### Code

```python
import os

from griptape.drivers.embedding.voyageai import VoyageAiEmbeddingDriver
from griptape.loaders import ImageLoader

embedding_driver = VoyageAiEmbeddingDriver(api_key=os.environ["VOYAGE_API_KEY"])
embeddings = embedding_driver.embed("Hello world!")

print(embeddings[:3])

# Some models support images!
multi_modal_embedding_driver = VoyageAiEmbeddingDriver(
    api_key=os.environ["VOYAGE_API_KEY"], model="voyage-multimodal-3"
)
image = ImageLoader().load("tests/resources/cow.png")
image_embeddings = multi_modal_embedding_driver.embed(image)

print(image_embeddings[:3])

```

#### Logs

```text
[-0.01390501856803894, 0.003788162022829056, 0.02040485292673111]

```

### Cohere

The [CohereEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/cohere_embedding_driver/) uses the [Cohere Embeddings API](https://docs.cohere.com/docs/embeddings).

> **Note: Info**
>
> This driver requires the `drivers-embedding-cohere` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

#### Code

```python
import os

from griptape.drivers.embedding.cohere import CohereEmbeddingDriver

embedding_driver = CohereEmbeddingDriver(
    model="embed-english-v3.0",
    api_key=os.environ["COHERE_API_KEY"],
    input_type="search_document",
)

embeddings = embedding_driver.embed("Hello world!")

# display the first 3 embeddings
print(embeddings[:3])

```

#### Logs

```text
[-0.041656494, -0.025970459, -0.07055664]

```

### Nvidia NIM

The [NvidiaNimEmbeddingDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/embedding/nvidia_nim_embedding_driver/) uses the [Nvidia NIM API](https://developer.nvidia.com/nim).

> **Note: Info**
>
> The Nvidia NIM API is OpenAI compatible, except for a single parameter: `input_type`. This parameter is controlled by the keyword argument `vector_operation` when calling the driver `embed` methods.

### Override Default Structure Embedding Driver

Here is how you can override the Embedding Driver that is used by default in Structures.

#### Code

```python
from griptape.configs import Defaults
from griptape.configs.drivers import DriversConfig
from griptape.drivers.embedding.voyageai import VoyageAiEmbeddingDriver
from griptape.drivers.prompt.openai import OpenAiChatPromptDriver
from griptape.structures import Agent
from griptape.tools import PromptSummaryTool, WebScraperTool

Defaults.drivers_config = DriversConfig(
    prompt_driver=OpenAiChatPromptDriver(model="gpt-4.1"),
    embedding_driver=VoyageAiEmbeddingDriver(),
)

Defaults.drivers_config = DriversConfig(
    prompt_driver=OpenAiChatPromptDriver(model="gpt-4.1"),
    embedding_driver=VoyageAiEmbeddingDriver(),
)

agent = Agent(
    tools=[WebScraperTool(off_prompt=True), PromptSummaryTool(off_prompt=False)],
)

agent.run("based on https://www.griptape.ai/, tell me what Griptape is")

```

#### Logs

```text
[02/27/25 20:23:16] INFO     PromptTask 4b8f768651fd4ac39d06cd14238e4936        
                             Input: based on https://www.griptape.ai/, tell me  
                             what Griptape is                                   
[02/27/25 20:23:17] INFO     Subtask 732b03a0ea584eae96fa88b3939c7caa           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_1Ojazp5tjlXr2dUReQysFYkD",        
                                 "name": "WebScraperTool",                      
                                 "path": "get_content",                         
                                 "input": {                                     
                                   "values": {                                  
                                     "url": "https://www.griptape.ai/"          
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
[02/27/25 20:23:19] INFO     Subtask 732b03a0ea584eae96fa88b3939c7caa           
                             Response: You have attempted to use a              
                             DummyVectorStoreDriver's upsert_vector method. This
                             likely originated from using a `DriversConfig`     
                             without providing a Driver required for this       
                             feature.                                           
[02/27/25 20:23:20] INFO     Subtask 48815995dad34e5ca0232348543d4832           
                             Thought: I encountered an issue while trying to    
                             access the content of the Griptape website. Let me 
                             try to summarize the content again.                
                             Actions: [                                         
                               {                                                
                                 "tag": "call_AD6qAAlDndUZ7upj3riWNppE",        
                                 "name": "WebScraperTool",                      
                                 "path": "get_content",                         
                                 "input": {                                     
                                   "values": {                                  
                                     "url": "https://www.griptape.ai/"          
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
                    INFO     Subtask 48815995dad34e5ca0232348543d4832           
                             Response: You have attempted to use a              
                             DummyVectorStoreDriver's upsert_vector method. This
                             likely originated from using a `DriversConfig`     
                             without providing a Driver required for this       
                             feature.                                           
[02/27/25 20:23:21] INFO     PromptTask 4b8f768651fd4ac39d06cd14238e4936        
                             Output: I am unable to access the content of the   
                             Griptape website directly due to a technical issue.
                             However, you can visit the website                 
                             [Griptape](https://www.griptape.ai/) to learn more 
                             about what Griptape is. If you have any specific   
                             questions or need information on a particular      
                             aspect, feel free to ask!                          

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
