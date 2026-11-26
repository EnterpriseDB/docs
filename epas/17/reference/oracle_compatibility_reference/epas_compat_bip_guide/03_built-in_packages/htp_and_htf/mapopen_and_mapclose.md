---
title: MAPOPEN and MAPCLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/mapopen_and_mapclose/
lastModified: 2025-11-25T20:57:39+05:30
---

# MAPOPEN and MAPCLOSE

This function and procedure generates the `<MAP>` and `</MAP>` tags, which mark a set of regions in a client-side image map.

## Syntax

The following is the syntax for HTP:

```
HTP.MAPOPEN(
   cname          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.MAPCLOSE;
```

The following is the syntax for HTF:

```
HTF.MAPOPEN(cname, cattributes) RETURN VARCHAR2;

HTF.MAPCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
