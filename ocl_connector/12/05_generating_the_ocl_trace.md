---
title: Generating the OCL Trace
product: OCL Connector
version: "12"
url: https://www.enterprisedb.com/docs/ocl_connector/12/05_generating_the_ocl_trace/
lastModified: 2023-05-19T09:02:02-04:00
---

# Generating the OCL Trace

<div id="generating_the_ocl_trace" class="registered_link"></div>

The OCL tracing option logs direct communication (queries, updates, etc.) with the backend in specified `OCI_DEBUG_LOG file`. In addition, it also logs the functions/APIs that were invoked. The trace files are generated in the default working directory (`oci_log_file_name`). If you append the path with a file name (`directory path/oci_log_file_name`), then the trace files are generated at specific location.

A tracefile is generated for each connection in text file (readable) format.

> **Note**
>
> OCL tracing is disabled by default.

To generate the OCL Trace:

1. Enable the EDB Client Side tracing for OCL. You can enable the OCL tracing by setting below environment variables:

`export OCI_DEBUG_LEVEL=4`

`export OCI_DEBUG_LOG=oci_log_file`

2. Once you have exported the environment variables, execute the application. The OCL trace files are generated in the specified directory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
