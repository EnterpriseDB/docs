---
title: Creating and Managing Views
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/
lastModified: 2026-08-11T09:07:15Z
---

# Creating and Managing Views

Views enable you to save frequently used or complex queries, then access them in a `SELECT` statement as if they were a table. A view is not physically materialized on disk: the query runs as a subquery when you access the view.

These topics describe various aspects of creating and managing views:

- [Best Practices when Creating Views](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-best-practices/) outlines best practices when creating views.
- [Working with View Dependencies](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-find-depend/) contains examples of listing view information and determining what views depend on a certain object.
- [About View Storage in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-storage/) describes the mechanics behind view dependencies.

<a id="topic101"></a>

## Creating Views

The `CREATE VIEW`command defines a view of a query. For example:

```
CREATE VIEW comedies AS SELECT * FROM films WHERE kind = 'comedy';

```

Views ignore `ORDER BY` and `SORT` operations stored in the view.

<a id="topic102"></a>

## Dropping Views

The `DROP VIEW` command removes a view. For example:

```
DROP VIEW topten;

```

The `DROP VIEW...CASCADE` command also removes all dependent objects. As an example, if another view depends on the view which is about to be dropped, the other view will be dropped as well. Without the `CASCADE` option, the `DROP VIEW` command will fail.

- [Best Practices when Creating Views](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-best-practices/): When defining and using a view, remember that a view is just an SQL statement and is replaced by its definition when the query is run.
- [Working with View Dependencies](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-find-depend/): If there are view dependencies on a table you must use the CASCADE keyword to drop it. Also, you cannot alter the table if there are view dependencies on it. This example shows a view dependency on a table.
- [About View Storage in WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/ddl/ddl-view/ddl-view-storage/): A view is similar to a table, both are relations - that is "something with columns". All such objects are stored in the catalog table pgclass. These are the general differences:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
