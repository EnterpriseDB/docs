---
title: NIM OCR
description: NIM OCR (Optical Character Recognition) is a model that extracts text from images on NVIDIA NIM.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/models/supported-models/nim_paddle_ocr/
lastModified: 2025-11-07T18:06:05Z
---

# NIM OCR

Model name: `nim_paddle_ocr`

## About NVIDIA NIM Image OCR

The [NVIDIA NIM for Image OCR API](https://docs.nvidia.com/nim/ingestion/table-extraction/latest/overview.html) is an (Optical Character Recognition) microservice and interface that extracts text from images on NVIDIA NIM.

## Supported aidb operations

- perform\_ocr

## Supported models

### NVIDIA NIM for Image OCR

- [baidu/paddleocr](https://build.nvidia.com/baidu/paddleocr/modelcard) (default)

## Creating the default model

```sql
SELECT aidb.create_model(
    'my_paddle_ocr_model',
    'nim_paddle_ocr',
    credentials => '{"api_key": "__NVIDIA_NIM_API_KEY__" }'::JSONB
);
```

There is currently only one model supported by [NVIDIA NIM for Image OCR API](https://docs.nvidia.com/nim/ingestion/table-extraction/latest/support-matrix.html), the default `baidu/paddleocr`, so you don't need to specify the model in the configuration.

## Model configuration settings

The following configuration settings are available for PADDLE\_OCR models:

- `url` — The default is `https://ai.api.nvidia.com/v1/cv/baidu/paddleocr`.

## Model credentials

The following credentials are required if executing inside build.nvidia.com:

- `api_key` — The build.nvidia.com API key to use for authentication.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
