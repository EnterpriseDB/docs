---
title: Installing the External Table Protocol
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/
lastModified: 2026-09-25T15:14:11+01:00
---

# Installing the External Table Protocol

To use the example external table protocol, you use the C compiler `cc` to compile and link the source code to create a shared object that can be dynamically loaded by WarehousePG. The commands to compile and link the source code on a Linux system are similar to this:

`cc -fpic -c gpextprotocal.c cc -shared -o gpextprotocal.so gpextprotocal.o`

The option `-fpic` specifies creating position-independent code (PIC) and the `-c` option compiles the source code without linking and creates an object file. The object file needs to be created as position-independent code (PIC) so that it can be loaded at any arbitrary location in memory by WarehousePG.

The flag `-shared` specifies creating a shared object (shared library) and the `-o` option specifies the shared object file name `gpextprotocal.so`. Refer to the GCC manual for more information on the `cc` options.

The header files that are declared as include files in `gpextprotocal.c` are located in subdirectories of `$GPHOME/include/postgresql/.`

For more information on compiling and linking dynamically-loaded functions and examples of compiling C source code to create a shared library on other operating systems, see the PostgreSQL documentation at <https://www.postgresql.org/docs/12/xfunc-c.html#DFUNC>.

The manual pages for the C compiler `cc` and the link editor `ld` for your operating system also contain information on compiling and linking source code on your system.

The compiled code (shared object file) for the custom protocol must be placed in the same location on every host in your WarehousePG cluster (coordinator and all segments). This location must also be in the `LD_LIBRARY_PATH` so that the server can locate the files. It is recommended to locate shared libraries either relative to `$libdir` (which is located at `$GPHOME/lib`) or through the dynamic library path (set by the `dynamic_library_path` server configuration parameter) on all coordinator segment instances in the WarehousePG cluster. You can use the WarehousePG utilities gpssh and `gpsync` to update segments.

- **[gpextprotocal.c](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/gpextprotocalc/)**

**Parent topic:** [Example Custom Data Access Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/)

- [gpextprotocal.c](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/installing-the-external-table-protocol/gpextprotocalc/): Parent topic: Installing the External Table Protocol

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
