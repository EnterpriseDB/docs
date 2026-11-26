---
title: Text to Speech
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/text-to-speech-drivers/
lastModified: 2025-11-07T18:06:05Z
---

# Text to Speech

## Overview

[Text to Speech Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/) are used to build and execute API calls to audio generation models.

Provide a Driver to a [Tool](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/tools/) for use by an [Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/):

## Text to Speech Drivers

### Eleven Labs

The [Eleven Labs Text to Speech Driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/elevenlabs_text_to_speech_driver/) provides support for text-to-speech models hosted by Eleven Labs. This Driver supports configurations specific to Eleven Labs, like voice selection and output format.

> **Note: Info**
>
> This driver requires the `drivers-text-to-speech-elevenlabs` [extra](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/#installing-optional-dependencies).

#### Code

```python
import os

from griptape.drivers.text_to_speech.elevenlabs import ElevenLabsTextToSpeechDriver
from griptape.structures import Agent
from griptape.tools.text_to_speech.tool import TextToSpeechTool

driver = ElevenLabsTextToSpeechDriver(
    api_key=os.environ["ELEVEN_LABS_API_KEY"],
    model="eleven_multilingual_v2",
    voice="Matilda",
)

tool = TextToSpeechTool(
    text_to_speech_driver=driver,
)

Agent(tools=[tool]).run("Generate audio from this text: 'Hello, world!'")

```

#### Logs

```text
[02/27/25 20:23:06] INFO     PromptTask cbd101c5ddf242c4a2526b217ccdc1aa        
                             Input: Generate audio from this text: 'Hello,      
                             world!'                                            
[02/27/25 20:23:08] INFO     Subtask e2e67690e1844462b0b202eed0bec355           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_AClrmPrfklt1V6Tj8xslZBOO",        
                                 "name": "TextToSpeechTool",                    
                                 "path": "text_to_speech",                      
                                 "input": {                                     
                                   "values": {                                  
                                     "text": "Hello, world!"                    
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
[02/27/25 20:23:10] INFO     Subtask e2e67690e1844462b0b202eed0bec355           
                             Response: Audio, format: mp3, size: 19226 bytes    
[02/27/25 20:23:11] INFO     PromptTask cbd101c5ddf242c4a2526b217ccdc1aa        
                             Output: The audio for the text "Hello, world!" has 
                             been generated successfully.                       

```

## OpenAI

The [OpenAI Text to Speech Driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/openai_text_to_speech_driver/) provides support for text-to-speech models hosted by OpenAI. This Driver supports configurations specific to OpenAI, like voice selection and output format.

### Code

```python
from griptape.drivers.text_to_speech.openai import OpenAiTextToSpeechDriver
from griptape.structures import Agent
from griptape.tools.text_to_speech.tool import TextToSpeechTool

driver = OpenAiTextToSpeechDriver()

tool = TextToSpeechTool(
    text_to_speech_driver=driver,
)

Agent(tools=[tool]).run("Generate audio from this text: 'Hello, world!'")

```

### Logs

```text
[02/27/25 20:26:31] INFO     PromptTask 318fd0d80db749e0ac2e23a1e6be94f8        
                             Input: Generate audio from this text: 'Hello,      
                             world!'                                            
[02/27/25 20:26:33] INFO     Subtask e53fe18c447e4325b0108ce8803ced58           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_nkTaeYE0DDVp7wpJMVqLWnSZ",        
                                 "name": "TextToSpeechTool",                    
                                 "path": "text_to_speech",                      
                                 "input": {                                     
                                   "values": {                                  
                                     "text": "Hello, world!"                    
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
[02/27/25 20:26:35] INFO     Subtask e53fe18c447e4325b0108ce8803ced58           
                             Response: Audio, format: mp3, size: 15360 bytes    
                    INFO     PromptTask 318fd0d80db749e0ac2e23a1e6be94f8        
                             Output: The audio for the text "Hello, world!" has 
                             been generated successfully.                       

```

## Azure OpenAI

The [Azure OpenAI Text to Speech Driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/azure_openai_text_to_speech_driver/) provides support for text-to-speech models hosted in your Azure OpenAI instance. This Driver supports configurations specific to OpenAI, like voice selection and output format.

### Code

```python
import os

from griptape.drivers.text_to_speech.openai import AzureOpenAiTextToSpeechDriver
from griptape.structures import Agent
from griptape.tools.text_to_speech.tool import TextToSpeechTool

driver = AzureOpenAiTextToSpeechDriver(
    api_key=os.environ["AZURE_OPENAI_API_KEY_4"],
    model="tts",
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT_4"],
)

tool = TextToSpeechTool(
    text_to_speech_driver=driver,
)

Agent(tools=[tool]).run("Generate audio from this text: 'Hello, world!'")

```

### Logs

```text
[02/27/25 20:25:20] INFO     PromptTask 23d5174bdca740aba7003927df6825be        
                             Input: Generate audio from this text: 'Hello,      
                             world!'                                            
[02/27/25 20:25:22] INFO     Subtask f770f02a6d5d4148b658d4adc5939ce3           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_UApwJoyADFfmWc76D7F1wjVJ",        
                                 "name": "TextToSpeechTool",                    
                                 "path": "text_to_speech",                      
                                 "input": {                                     
                                   "values": {                                  
                                     "text": "Hello, world!"                    
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
[02/27/25 20:25:23] INFO     Subtask f770f02a6d5d4148b658d4adc5939ce3           
                             Response: Audio, format: mp3, size: 14400 bytes    
[02/27/25 20:25:24] INFO     PromptTask 23d5174bdca740aba7003927df6825be        
                             Output: The audio for the text "Hello, world!" has 
                             been generated successfully.                       

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
