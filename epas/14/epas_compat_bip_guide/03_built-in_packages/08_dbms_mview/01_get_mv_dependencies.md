---
title: GET_MV_DEPENDENCIES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/01_get_mv_dependencies/
lastModified: 2023-02-14T16:10:29+05:30
---

# GET\_MV\_DEPENDENCIES

When given the name of a materialized view, `GET_MV_DEPENDENCIES` returns a list of items that depend on the specified view. The signature is:

```text
GET_MV_DEPENDENCIES(
  <list> IN VARCHAR2,
  <deplist> OUT VARCHAR2);
```

## Parameters

`list`

`list` specifies the name of a materialized view or a comma-separated list of materialized view names.

`deplist`

`deplist` is a comma-separated list of schema-qualified dependencies. `deplist` is a `VARCHAR2` value.

## Examples

This example displays a list of the dependencies on a materialized view named `public.emp_view`.

```text
DECLARE
  deplist VARCHAR2(1000);
BEGIN
  DBMS_MVIEW.GET_MV_DEPENDENCIES('public.emp_view', deplist);
  DBMS_OUTPUT.PUT_LINE('deplist: ' || deplist);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
