---
title: Collection methods
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/
lastModified: 2023-02-14T16:10:29+05:30
---

# Collection methods

<div id="collection_methods" class="registered_link"></div>

_Collection methods_ are functions and procedures that provide useful information about a collection that can aid in the processing of data in the collection.

- [COUNT](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/01_count/): COUNT is a method that returns the number of elements in a collection. The syntax for using COUNT is:
- [DELETE](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/02_deletes/): The DELETE method deletes entries from a collection. You can call the DELETE method in three different ways.
- [EXISTS](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/03_exists/): The EXISTS method verifies that a subscript exists in a collection. EXISTS returns TRUE if the subscript exists. If the subscript doesn't exist, EXISTS returns FALSE. The method takes a single argument
- [EXTEND](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/04_extend/): The EXTEND method increases the size of a collection. The EXTEND method has three variations. The first variation appends a single NULL element to a collection. The syntax for this variation is:
- [FIRST](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/05_first/): FIRST is a method that returns the subscript of the first element in a collection. The syntax for using FIRST is as follows:
- [LAST](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/06_last/): LAST is a method that returns the subscript of the last element in a collection. The syntax for using LAST is as follows:
- [LIMIT](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/07_limit/): LIMIT is a method that returns the maximum number of elements permitted in a collection. LIMIT applies only to varrays. The syntax for using LIMIT is:
- [NEXT](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/08_next/): NEXT is a method that returns the subscript that follows a specified subscript. The method takes a single argument
- [PRIOR](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/09_prior/): The PRIOR method returns the subscript that precedes a specified subscript in a collection. The method takes a single argument
- [TRIM](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/11_collection_methods/10_trim/): The TRIM method removes one or more elements from the end of a collection. The syntax for the TRIM method is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
