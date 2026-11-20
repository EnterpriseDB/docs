---
title: Using Thales CipherTrust Manager
description: Learn how to secure your encryption key with a Thales CipherTrust Manager key.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/
lastModified: 2026-11-02T10:22:59+01:00
---

# Using Thales CipherTrust Manager

You can configure TDE to use an external key from Thales CipherTrust Manager to wrap the data encryption key with a key from the Thales key store. You can use either pykmip or the Thales REST API to perform the cryptographic operations of the integration.

- To use the Python library pykmip for cryptographic operations with Thales CipherTrust Manager, see [Using pykmip](https://www.enterprisedb.com/docs/partner_docs/ThalesCipherTrustManager/05-UsingThalesCipherTrustManager/) in the [Implementing Thales CipherTrust Manager](https://www.enterprisedb.com/docs/partner_docs/ThalesCipherTrustManager/) documentation for instructions. pykmip is a Python library that implements the KMIP industry standard for key management operations.

- To use the Thales REST API for cryptographic operations with Thales CipherTrust Manager, [install the EDB TDE Thales REST API client](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/installing_thales_client/) and then [configure it for use with TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/thales_restapi/). The REST API allows operations to directly connect to Thales CipherTrust, bypassing other intermediate protocols.

* [Installing](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/installing_thales_client/): Select a link to access the applicable installation instructions:
* [Using Thales REST API](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/thales_restapi/): Learn how to secure your encryption key with a Thales management key.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
