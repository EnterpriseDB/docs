---
title: BASE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/base/
lastModified: 2025-11-25T20:39:04+05:30
---

# BASE

This function and procedure generates the `<BASE>` HTML tag, which records the URL of the document.

## Syntax

The following is the syntax for HTP:

```
HTP.BASE(ctarget, cattributes) RETURN VARCHAR2;
```

The following is the syntax for HTF:

```
HTF.BASE(ctarget, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| ctarget     | The value for the TARGET attribute, which establishes a window name to which all links in this document are targeted |
| cattributes | Other attributes to include as is in the tag                                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
