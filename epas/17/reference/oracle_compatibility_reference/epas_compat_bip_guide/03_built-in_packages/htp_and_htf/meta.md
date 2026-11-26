---
title: META
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/meta/
lastModified: 2025-11-25T20:57:39+05:30
---

# META

This function and procedure generates the `<META>` tag, which embeds meta-information about the document and specifies values for HTTP headers.

## Syntax

The following is the syntax for HTP:

```
HTP.META (
   chttp_equiv    IN       VARCHAR2
   cname          IN       VARCHAR2
   ccontent       IN       VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.META (chttp_equiv, cname, ccontent) RETURN VARCHAR2;
```

## Parameters

| Parameter    | Purpose                                |
| ------------ | -------------------------------------- |
| chttp\_equiv | The value for the HTTP-EQUIV attribute |
| cname        | The value for the NAME attribute       |
| ccontent     | The value for the CONTENT attribute    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
