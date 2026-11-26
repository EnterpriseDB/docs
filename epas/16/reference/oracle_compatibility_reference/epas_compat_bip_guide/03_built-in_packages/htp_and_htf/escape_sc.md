---
title: ESCAPE_SC
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/escape_sc/
lastModified: 2024-11-22T12:16:04+01:00
---

# ESCAPE\_SC

This function and procedure replaces characters that have special meaning in HTML with their escape sequences. The following characters are converted:

- `&` to `&amp;`
- `""` to `&quot:`
- `<` to `&lt;`
- `>` to `&gt;`

## Syntax

The following is the syntax for HTP:

```
HTP.ESCAPE_SC(ctext IN VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.ESCAPE_SC(ctext in VARCHAR2) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose               |
| --------- | --------------------- |
| ctext     | The string to convert |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
