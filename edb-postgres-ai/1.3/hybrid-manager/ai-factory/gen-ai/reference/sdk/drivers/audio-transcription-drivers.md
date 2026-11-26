---
title: Audio Transcription
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/audio-transcription-drivers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Audio Transcription

## Overview

[Audio Transcription Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/) extract text from spoken audio.

## Audio Transcription Drivers

### OpenAI

The [OpenAI Audio Transcription Driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/openai_audio_transcription_driver/) utilizes OpenAI's sophisticated `whisper` model to accurately transcribe spoken audio into text. This model supports multiple languages, ensuring precise transcription across a wide range of dialects.

#### Code

```python
from griptape.drivers.audio_transcription.openai import OpenAiAudioTranscriptionDriver
from griptape.structures import Agent
from griptape.tools.audio_transcription.tool import AudioTranscriptionTool

driver = OpenAiAudioTranscriptionDriver(model="whisper-1")

tool = AudioTranscriptionTool(
    off_prompt=False,
    audio_transcription_driver=driver,
)

Agent(tools=[tool]).run("Transcribe the following audio file: tests/resources/sentences.wav")

```

#### Logs

```text
[02/27/25 20:26:30] INFO     PromptTask 94b2185c33cf40c0bcea7e52786e01ba        
                             Input: Transcribe the following audio file:        
                             tests/resources/sentences.wav                      
[02/27/25 20:26:32] INFO     Subtask b53698f299d7427a8ef6838940ebcadc           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_nQYS123GY9CCEbBTpYeHdlnM",        
                                 "name": "AudioTranscriptionTool",              
                                 "path": "transcribe_audio_from_disk",          
                                 "input": {                                     
                                   "values": {                                  
                                     "path": "tests/resources/sentences.wav"    
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
[02/27/25 20:26:34] INFO     Subtask b53698f299d7427a8ef6838940ebcadc           
                             Response: The birch canoe slid on the smooth       
                             planks. Glued the sheet to the dark blue           
                             background. It is easy to tell the depth of a well.
                             These days a chicken leg is a rare dish. Rice is   
                             often served in round bowls. The juice of lemons   
                             makes fine punch. The box was thrown beside the    
                             park truck. The hogs were fed chopped corn and     
                             garbage. Four hours of steady work faced us. A     
                             large size in stockings is hard to sell.           
[02/27/25 20:26:36] INFO     PromptTask 94b2185c33cf40c0bcea7e52786e01ba        
                             Output: The transcription of the audio file is as  
                             follows:                                           
                                                                                
                             "The birch canoe slid on the smooth planks. Glued  
                             the sheet to the dark blue background. It is easy  
                             to tell the depth of a well. These days a chicken  
                             leg is a rare dish. Rice is often served in round  
                             bowls. The juice of lemons makes fine punch. The   
                             box was thrown beside the park truck. The hogs were
                             fed chopped corn and garbage. Four hours of steady 
                             work faced us. A large size in stockings is hard to
                             sell."                                             

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
