---
title: COMMENT
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/comment/
lastModified: 2025-11-25T20:57:39+05:30
---

# COMMENT

This function and procedure generates the comment tags `<!-- ctext -->`.

## Syntax

The following is the syntax for HTP:

```
HTP.COMMENT (ctext IN VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.COMMENT (ctext IN VARCHAR2) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                 |
| --------- | ----------------------- |
| ctext     | The text in the comment |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
