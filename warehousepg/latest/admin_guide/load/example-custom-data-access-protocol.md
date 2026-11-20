---
title: Example Custom Data Access Protocol
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example Custom Data Access Protocol

The following is the API for the WarehousePG custom data access protocol. The example protocol implementation [gpextprotocal.c](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/gpextprotocalc/) is written in C and shows how the API can be used. For information about accessing a custom data access protocol, see [Using a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-protocol/).

```
/* ---- Read/Write function API ------*/
CALLED_AS_EXTPROTOCOL(fcinfo)
EXTPROTOCOL_GET_URL(fcinfo)(fcinfo) 
EXTPROTOCOL_GET_DATABUF(fcinfo) 
EXTPROTOCOL_GET_DATALEN(fcinfo) 
EXTPROTOCOL_GET_SCANQUALS(fcinfo) 
EXTPROTOCOL_GET_USER_CTX(fcinfo) 
EXTPROTOCOL_IS_LAST_CALL(fcinfo) 
EXTPROTOCOL_SET_LAST_CALL(fcinfo) 
EXTPROTOCOL_SET_USER_CTX(fcinfo, p)

/* ------ Validator function API ------*/
CALLED_AS_EXTPROTOCOL_VALIDATOR(fcinfo)
EXTPROTOCOL_VALIDATOR_GET_URL_LIST(fcinfo) 
EXTPROTOCOL_VALIDATOR_GET_NUM_URLS(fcinfo) 
EXTPROTOCOL_VALIDATOR_GET_NTH_URL(fcinfo, n) 
EXTPROTOCOL_VALIDATOR_GET_DIRECTION(fcinfo)
```

<a id="notes1"></a>

## Notes

The protocol corresponds to the example described in [Using a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-protocol/). The source code file name and shared object are `gpextprotocol.c` and `gpextprotocol.so`.

The protocol has the following properties:

- The name defined for the protocol is `myprot`.

- The protocol has the following simple form: the protocol name and a path, separated by `://`.

  `myprot://` `path`

- Three functions are implemented:

  - `myprot_import()` a read function
  - `myprot_export()` a write function
  - `myprot_validate_urls()` a validation function
    These functions are referenced in the `CREATE PROTOCOL` statement when the protocol is created and declared in the database.

The example implementation [gpextprotocal.c](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/gpextprotocalc/) uses `fopen()` and `fread()` to simulate a simple protocol that reads local files. In practice, however, the protocol would implement functionality such as a remote connection to some process over the network.

- **[Installing the External Table Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/)**

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/)

- [Installing the External Table Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/): To use the example external table protocol, you use the C compiler cc to compile and link the source code to create a shared object that can be dynamically loaded by WarehousePG. The commands to compile and link the source code on a Linux system are similar to this:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
