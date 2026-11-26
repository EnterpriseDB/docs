---
title: PARAM
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/param/
lastModified: 2023-11-09T17:35:38+05:30
---

# PARAM

This function and procedure generates the `<PARAM>` tag, which specifies parameter values for Java applets.

## Syntax

The following is the syntax for HTP:

```
HTP.PARAM(
   cname          IN       VARCHAR2
   cvalue         IN       VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.PARAM(cname, cvalue) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                           |
| --------- | --------------------------------- |
| cname     | The value for the NAME attribute  |
| cvalue    | The value for the VALUE attribute |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
