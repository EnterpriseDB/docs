---
title: Generating SSL certificates
description: The sslutils Postgres extension provides SSL certificate generation functions to EDB Postgres Advanced Server for use by the EDB Postgres Enterprise Manager server
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_security_guide/04_sslutils/
lastModified: 2024-11-22T12:16:04+01:00
---

# Generating SSL certificates

<div id="sslutils" class="registered_link"></div>

`sslutils` is a Postgres extension that provides SSL certificate generation functions to EDB Postgres Advanced Server for use by the EDB Postgres Enterprise Manager server.

## Installing the extension

You install `sslutils` by using the `edb-as<xx>-server-sslutils` RPM package, where `<xx>` is the EDB Postgres Advanced Server version number.

Each parameter in the function’s parameter list is described by `parameter n`, where `n` refers to the `nth` ordinal position (for example, first, second, or third) in the function’s parameter list.

## openssl\_rsa\_generate\_key

The `openssl_rsa_generate_key` function generates an RSA private key. The function signature is:

```sql
openssl_rsa_generate_key(<integer>) RETURNS <text>
```

When invoking the function, pass the number of bits as an integer value. The function returns the generated key.

## openssl\_rsa\_key\_to\_csr

The `openssl_rsa_key_to_csr` function generates a certificate signing request (CSR). The signature is:

```sql
openssl_rsa_key_to_csr(<text>, <text>, <text>, <text>, <text>, <text>,
<text>) RETURNS <text>
```

The function generates and returns the certificate signing request.

### Parameters

`parameter 1`

The name of the RSA key file.

`parameter 2`

The common name (e.g., `agentN`) of the agent to use the signing request.

`parameter 3`

The name of the country where the server resides.

`parameter 4`

The name of the state where the server resides.

`parameter 5`

The location (city) in the state where the server resides.

`parameter 6`

The name of the organization unit requesting the certificate.

`parameter 7`

The email address of the user requesting the certificate.

## openssl\_csr\_to\_crt

The `openssl_csr_to_crt` function generates a self-signed certificate or a certificate authority certificate. The signature is:

```sql
openssl_csr_to_crt(<text>, <text>, <text>) RETURNS <text>
```

The function returns the self-signed certificate or certificate authority certificate.

### Parameters

`parameter 1`

The name of the certificate signing the request.

`parameter 2`

The path to the certificate authority certificate, or `NULL` if generating a certificate authority certificate.

`parameter 3`

The path to the certificate authority’s private key or, if argument `2` is `NULL`, the path to a private key.

## openssl\_rsa\_generate\_crl

The `openssl_rsa_generate_crl` function generates a default certificate revocation list. The signature is:

```sql
openssl_rsa_generate_crl(<text>, <text>) RETURNS <text>
```

The function returns the certificate revocation list.

### Parameters

`parameter 1`

The path to the certificate authority certificate.

`parameter 2`

The path to the certificate authority private key.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
