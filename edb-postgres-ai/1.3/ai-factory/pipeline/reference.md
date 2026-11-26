---
title: Pipelines reference
description: Reference documentation for AI Accelerator Pipelines.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/
lastModified: 2025-11-07T18:06:05Z
---

# Pipelines reference

## Models

### Tables

- [aidb.model\_providers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbmodel_providers)
- [aidb.models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbmodels)

### Model functions

- [aidb.create\_model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbcreate_model)
- [aidb.get\_model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbget_model)
- [aidb.delete\_model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbdelete_model)
- [aidb.list\_hcp\_models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidblist_hcp_models)
- [aidb.create\_hcp\_model](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbcreate_hcp_model)
- [aidb.sync\_hcp\_models](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbsync_hcp_models)
- [aidb.encode\_text](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbencode_text)
- [aidb.encode\_text\_batch](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbencode_text_batch)
- [aidb.decode\_text](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbdecode_text)
- [aidb.decode\_text\_batch](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbdecode_text_batch)
- [aidb.encode\_image](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbencode_image)
- [aidb.rerank\_text](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/models/#aidbrerank_text)

## Preparers

### Preparer views

- [aidb.preps](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbpreparers)
- [aidb.preparers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbpreparers)

### Preparer types

- [aidb.DataPreparationOperation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbdatapreparationoperation)

### Preparer functions

- [aidb.create\_table\_preparer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbcreate_table_preparer)
- [aidb.create\_preparer\_for\_table](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbcreate_preparer_for_table-deprecated) (deprecated)
- [aidb.create\_volume\_preparer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbcreate_volume_preparer)
- [aidb.create\_preparer\_for\_volume](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbcreate_preparer_for_volume-deprecated) (deprecated)
- [aidb.bulk\_data\_preparation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbbulk_data_preparation)
- [aidb.set\_auto\_preparer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbset_auto_preparer)
- [aidb.set\_preparer\_auto\_processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbset_preparer_auto_processing-deprecated) (deprecated)
- [aidb.delete\_preparer](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/preparers/#aidbdelete_preparer)

## Knowledge bases

### Knowledge base tables

- [aidb.kbs](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbknowledge_bases)
- [aidb.knowledge\_bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbknowledge_bases)

### Knowledge base functions

- [aidb.create\_table\_knowledge\_base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbcreate_table_knowledge_base)
- [aidb.create\_volume\_knowledge\_base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbcreate_volume_knowledge_base)
- [aidb.set\_auto\_knowledge\_base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbset_auto_knowledge_base)
- [aidb.bulk\_embedding](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbbulk_embedding)
- [aidb.retrieve\_key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbretrieve_key)
- [aidb.retrieve\_text](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbretrieve_text)
- [aidb.delete\_knowledge\_base](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbdelete_knowledge_base)
- [aidb.create\_volume](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbcreate_volume)
- [aidb.delete\_volume](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/knowledge_bases/#aidbdelete_volume)

## PGFS

### PGFS functions

- [pgfs.create\_foreign\_table](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfscreate_foreign_table)
- [pgfs.create\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfscreate_storage_location)
- [pgfs.create\_storage\_location\_with\_foreign\_table](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfscreate_storage_location_with_foreign_table)
- [pgfs.delete\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfsdelete_storage_location)
- [pgfs.list\_storage\_locations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfslist_storage_locations)
- [pgfs.get\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfsget_storage_location)
- [pgfs.update\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfsupdate_storage_location)
- [pgfs.set\_default\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfsset_default_storage_location)
- [pgfs.get\_default\_storage\_location](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/pgfs/#pgfsget_default_storage_location)

## Retrievers (deprecated)

### Retrievers functions (deprecated)

- [aidb.create\_retriever\_for\_table](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/retrievers/#aidbcreate_retriever_for_table-deprecated) (deprecated)
- [aidb.create\_retriever\_for\_volume](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/retrievers/#aidbcreate_retriever_for_volume-deprecated) (deprecated)
- [aidb.set\_retriever\_auto\_processing](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/retrievers/#aidbset_retriever_auto_processing-deprecated) (deprecated)
- [aidb.delete\_retriever](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/reference/retrievers/#aidbdelete_retriever-deprecated) (deprecated)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
