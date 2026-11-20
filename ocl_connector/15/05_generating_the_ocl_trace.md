---
title: Generating the OCL trace
product: OCL Connector
version: "15"
url: https://www.enterprisedb.com/docs/ocl_connector/15/05_generating_the_ocl_trace/
lastModified: 2023-08-30T16:17:46-04:00
---

# Generating the OCL trace

<div id="generating_the_ocl_trace" class="registered_link"></div>

The OCL tracing option logs direct communication (queries, updates, and so on) with the backend in the specified `OCI_DEBUG_LOG file`. It also logs the functions/APIs that were invoked. The trace files are generated in the default working directory (`oci_log_file_name`). If you append the path with a file name (`directory path/oci_log_file_name`), then the trace files are generated at that specific location.

A trace file is generated for each connection in text-file (readable) format.

> **Note**
>
> OCL tracing is disabled by default.

To generate the OCL trace:

1. Enable the EDB client-side tracing for OCL. You can enable the OCL tracing by setting these environment variables:

   - `export OCI_DEBUG_LEVEL=4`

   - `export OCI_DEBUG_LOG=oci_log_file`

2. After you export the environment variables, run the application. The OCL trace files are generated in the specified directory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
