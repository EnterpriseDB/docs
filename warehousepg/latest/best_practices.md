---
title: WarehousePG best practices
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/
lastModified: 2026-09-25T15:14:11+01:00
---

# WarehousePG best practices

A best practice is a method or technique that has consistently shown results superior to those achieved with other means. Best practices are found through experience and are proven to reliably lead to a desired result. Best practices are a commitment to use any product correctly and optimally, by leveraging all the knowledge and expertise available to ensure success.

This document does not teach you how to use WarehousePG features. Links are provided to other relevant parts of the WarehousePG documentation for information on how to use and implement specific WarehousePG features. This document addresses the most important best practices to follow when designing, implementing, and using WarehousePG.

It is not the intent of this document to cover the entire product or compendium of features, but rather to provide a summary of _what matters most_ in WarehousePG. This document does not address _edge_ use cases. While edge use cases can further leverage and benefit from WarehousePG features, they require a proficient knowledge and expertise with these features, as well as a deep understanding of your environment, including SQL access, query execution, concurrency, workload, and other factors.

By following these best practices, you will increase the success of your WarehousePG clusters in the areas of maintenance, support, performance, and scalability.

- **[Best Practices Summary](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/summary/)**\
  A summary of best practices for WarehousePG.
- **[System Configuration](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/sysconfig/)**\
  Requirements and best practices for system administrators who are configuring WarehousePG cluster hosts.
- **[Schema Design](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/schema/)**\
  Best practices for designing WarehousePG schemas.
- **[Memory and Resource Management with Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/resgroups/)**\
  Managing WarehousePG resources with resource groups.
- **[Memory and Resource Management with Resource Queues](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/workloads/)**\
  Avoid memory errors and manage WarehousePG resources.
- **[System Monitoring and Maintenance](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/maintenance/)**\
  Best practices for regular maintenance that will ensure WarehousePG high availability and optimal performance.
- **[Loading Data](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/data_loading/)**\
  Description of the different ways to add data to WarehousePG.
- **[Security](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/security/)**\
  Best practices to ensure the highest level of system security. 
- **[Encrypting Data and Database Connections](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/encryption/)**\
  Best practices for implementing encryption and managing keys.
- **[Tuning SQL Queries](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/tuning_queries/)**\
  The WarehousePG cost-based optimizer evaluates many strategies for running a query and chooses the least costly method.
- **[High Availability](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/ha/)**\
  WarehousePG supports highly available, fault-tolerant database services when you enable and properly configure WarehousePG high availability features. To guarantee a required level of service, each component must have a standby ready to take its place if it should fail.

* [Best Practices Summary](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/summary/): A summary of best practices for WarehousePG.
* [System Configuration](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/sysconfig/): Requirements and best practices for system administrators who are configuring WarehousePG cluster hosts.
* [Schema Design](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/schema/): Best practices for designing WarehousePG schemas.
* [Memory and Resource Management with Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/resgroups/): Managing WarehousePG resources with resource groups.
* [Memory and Resource Management with Resource Queues](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/workloads/): Avoid memory errors and manage WarehousePG resources.
* [System Monitoring and Maintenance](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/maintenance/): Best practices for regular maintenance that will ensure WarehousePG high availability and optimal performance.
* [Loading Data](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/data_loading/): Description of the different ways to add data to WarehousePG.
* [Slow or Hanging Jobs](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/heap_tables/): Symptom:
* [Security](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/security/): Best practices to ensure the highest level of system security.
* [Encrypting Data and Database Connections](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/encryption/): Best practices for implementing encryption and managing keys.
* [Tuning SQL Queries](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/tuning_queries/): The WarehousePG cost-based optimizer evaluates many strategies for running a query and chooses the least costly method.
* [High Availability](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/ha/): WarehousePG supports highly available, fault-tolerant database services when you enable and properly configure WarehousePG high availability features. To guarantee a required level of service, each component must have a standby ready to take its place if it should fail.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
