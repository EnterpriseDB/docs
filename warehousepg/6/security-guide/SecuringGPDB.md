---
title: Securing the Database
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/security-guide/SecuringGPDB/
lastModified: 2026-09-25T15:27:49-07:00
---

# Securing the Database

<a id="topic_iqr_ym2_jr"></a>

Introduces WarehousePG security topics.

The intent of security configuration is to configure the WarehousePG server to eliminate as many security vulnerabilities as possible. This guide provides a baseline for minimum security requirements, and is supplemented by additional security documentation. 

The essential security requirements fall into the following categories:

<a id="ul_fwy_bn2_jr"></a>

- [Authentication](https://www.enterprisedb.com/docs/warehousepg/6/security-guide/Authenticate/) covers the mechanisms that are supported and that can be used by the WarehousePG server to establish the identity of a client application.
- [Authorization](https://www.enterprisedb.com/docs/warehousepg/6/security-guide/Authorization/) pertains to the privilege and permission models used by the database to authorize client access.
- [Auditing](https://www.enterprisedb.com/docs/warehousepg/6/security-guide/Auditing/), or log settings, covers the logging options available in WarehousePG to track successful or failed user actions.
- [Data Encryption](https://www.enterprisedb.com/docs/warehousepg/6/security-guide/Encryption/) addresses the encryption capabilities that are available for protecting data at rest and data in transit. This includes the security certifications that are relevant to the WarehousePG.

<a id="accesskerb">

</a>

## Accessing a Kerberized Hadoop Cluster

You can use the WarehousePG Platform Extension Framework (PXF) to read or write external tables referencing files in a Hadoop file system. If the Hadoop cluster is secured with Kerberos ("Kerberized"), you must configure WarehousePG and PXF to allow users accessing external tables to authenticate with Kerberos. Refer to [Authenticating with Kerberos](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/kerberos/) for the procedure to perform this setup.

<a id="platformhardening">

</a>

## Platform Hardening

Platform hardening involves assessing and minimizing system vulnerability by following best practices and enforcing federal security standards. Hardening the product is based on the US Department of Defense (DoD) guidelines Security Template Implementation Guides (STIG). Hardening removes unnecessary packages, deactivates services that are not required, sets up restrictive file and directory permissions, removes unowned files and directories, performs authentication for single-user mode, and provides options for end users to configure the package to be compliant to the latest STIGs. 

**Parent topic:** [WarehousePG Security Configuration Guide](https://www.enterprisedb.com/docs/warehousepg/6/security-guide/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
