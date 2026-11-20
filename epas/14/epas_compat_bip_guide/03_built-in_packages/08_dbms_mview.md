---
title: DBMS_MVIEW
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBMS\_MVIEW

Use procedures in the `DBMS_MVIEW` package to manage and refresh materialized views and their dependencies. EDB Postgres Advanced Server provides support for the following `DBMS_MVIEW` procedures:

| Procedure                                                                                                                                                                                                                                   | Return type | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET_MV_DEPENDENCIES(list VARCHAR2, deplist VARCHAR2);`                                                                                                                                                                                     | n/a         | The `GET_MV_DEPENDENCIES` procedure returns a list of dependencies for a specified view.                                                                |
| `REFRESH(list VARCHAR2, method VARCHAR2, rollback_seg VARCHAR2 , push_deferred_rpc BOOLEAN, refresh_after_errors BOOLEAN , purge_option NUMBER, parallelism NUMBER, heap_size NUMBER , atomic_refresh BOOLEAN , nested BOOLEAN);`           | n/a         | This variation of the `REFRESH` procedure refreshes all views named in a comma-separated list of view names.                                            |
| `REFRESH(tab dbms_utility.uncl_array, method VARCHAR2, rollback_seg VARCHAR2, push_deferred_rpc BOOLEAN, refresh_after_errors BOOLEAN, purge_option NUMBER, parallelism NUMBER, heap_size NUMBER, atomic_refresh BOOLEAN, nested BOOLEAN);` | n/a         | This variation of the `REFRESH` procedure refreshes all views named in a table of `dbms_utility.uncl_array` values.                                     |
| `REFRESH_ALL_MVIEWS(number_of_failures BINARY_INTEGER, method VARCHAR2, rollback_seg VARCHAR2, refresh_after_errors BOOLEAN, atomic_refresh BOOLEAN);`                                                                                      | n/a         | The `REFRESH_ALL_MVIEWS` procedure refreshes all materialized views.                                                                                    |
| `REFRESH_DEPENDENT(number_of_failures BINARY_INTEGER, list VARCHAR2, method VARCHAR2, rollback_seg VARCHAR2, refresh_after_errors BOOLEAN, atomic_refresh BOOLEAN, nested BOOLEAN);`                                                        | n/a         | This variation of the `REFRESH_DEPENDENT` procedure refreshes all views that depend on the views listed in a comma-separated list.                      |
| `REFRESH_DEPENDENT(number_of_failures BINARY_INTEGER, tab dbms_utility.uncl_array, method VARCHAR2, rollback_seg VARCHAR2, refresh_after_errors BOOLEAN, atomic_refresh BOOLEAN, nested BOOLEAN);`                                          | n/a         | This variation of the `REFRESH_DEPENDENT` procedure refreshes all views that depend on the views listed in a table of `dbms_utility.uncl_array` values. |

EDB Postgres Advanced Server's implementation of `DBMS_MVIEW` is a partial implementation when compared to Oracle's version. Only those functions and procedures listed in the table are supported.

- [GET\_MV\_DEPENDENCIES](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/01_get_mv_dependencies/): When given the name of a materialized view, GETMVDEPENDENCIES returns a list of items that depend on the specified view. The signature is:
- [REFRESH](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/02_refresh/): Use the REFRESH procedure to refresh all views specified in either a comma-separated list of view names or a table of DBMSUTILITY.UNCLARRAY values. The procedure has two signatures. Use the first form when specifying a comma-separated list of view names:
- [REFRESH\_ALL\_MVIEWS](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/03_refresh_all_mviews/): Use the REFRESHALLMVIEWS procedure to refresh any materialized views that weren't refreshed since the table or view on which the view depends was modified. The signature is:
- [REFRESH\_DEPENDENT](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/08_dbms_mview/04_refresh_dependent/): Use the REFRESHDEPENDENT procedure to refresh all material views that depend on the views specified in the call to the procedure. You can specify a comma-separated list or provide the view names in a table of DBMSUTILITY.UNCL\_ARRAY values.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
