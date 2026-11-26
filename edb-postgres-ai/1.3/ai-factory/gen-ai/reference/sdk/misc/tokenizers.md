---
title: Tokenizers
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/misc/tokenizers/
lastModified: 2025-11-07T18:06:05Z
---

# Tokenizers

## Overview

Tokenizers are used throughout Gen AI Builder to calculate the number of [tokens](https://learn.microsoft.com/en-us/semantic-kernel/prompt-engineering/tokens) in a piece of text.
They are particularly useful for ensuring that the LLM token limits are not exceeded.

Tokenizers are a low level abstraction that you will rarely interact with directly.

## Tokenizers

### OpenAI

#### Code

```python
from griptape.tokenizers import OpenAiTokenizer

tokenizer = OpenAiTokenizer(model="gpt-4.1")

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
3
127989
4093

```

### Cohere

#### Code

```python
import os

from cohere import Client

from griptape.tokenizers import CohereTokenizer

tokenizer = CohereTokenizer(model="command", client=Client(os.environ["COHERE_API_KEY"]))

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
3
4093
4093

```

### Anthropic

#### Code

```python
from griptape.tokenizers import AnthropicTokenizer

tokenizer = AnthropicTokenizer(model="claude-3-opus-20240229")

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
10
199990
4086

```

### Google

#### Code

```python
import os

from griptape.tokenizers import GoogleTokenizer

tokenizer = GoogleTokenizer(model="gemini-2.0-flash", api_key=os.environ["GOOGLE_API_KEY"])

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
3
1048573
8189

```

### Hugging Face

#### Code

```python
from griptape.tokenizers import HuggingFaceTokenizer

tokenizer = HuggingFaceTokenizer(
    model="sentence-transformers/all-MiniLM-L6-v2",
    max_output_tokens=512,
)

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
5
507
507

```

### Amazon Bedrock

#### Code

```python
from griptape.tokenizers import AmazonBedrockTokenizer

tokenizer = AmazonBedrockTokenizer(model="amazon.titan-text-express-v1")

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
3
7997
8189

```

### Grok

#### Code

```python
import os

from griptape.tokenizers import GrokTokenizer

tokenizer = GrokTokenizer(
    model="grok-2-latest",
    api_key=os.environ["GROK_API_KEY"],
)

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
3
131069
4093

```

### Simple

Not all LLM providers have a public tokenizer API. In this case, you can use the `SimpleTokenizer` to count tokens based on a simple heuristic.

#### Code

```python
from griptape.tokenizers import SimpleTokenizer

tokenizer = SimpleTokenizer(max_input_tokens=1024, max_output_tokens=1024, characters_per_token=6)

print(tokenizer.count_tokens("Hello world!"))
print(tokenizer.count_input_tokens_left("Hello world!"))
print(tokenizer.count_output_tokens_left("Hello world!"))

```

#### Logs

```text
2
1022
1022

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
