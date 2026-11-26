---
title: NOBR
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/nobr/
lastModified: 2023-11-09T17:35:38+05:30
---

# NOBR

This function and procedure generates the `<NOBR>` and `</NOBR>` tags, which turn off line breaks for the tagged text.

## Syntax

The following is the syntax for HTP:

```
HTP.NOBR(ctext in VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.NOBR(ctext) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                                      |
| --------- | -------------------------------------------- |
| ctext     | The text that to render without a line break |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
