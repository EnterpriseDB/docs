---
title: Multithreading Support
product: OCL Connector
version: "13"
url: https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/07_multithreading_support/
lastModified: 2023-05-19T09:02:02-04:00
---

# Multithreading Support

<div id="multithreading_support" class="registered_link"></div>

OCL is supported in multithreaded environment. You can enable/use multithreading in a multithreaded environment by making an `OCIEnvNlsCreate()` call with `OCI_THREADED` as the value of the mode parameter.

```text
retCode = OCIEnvNlsCreate( &envp,
                           OCI_THREADED,
                           NULL,
                           NULL,
                           NULL,
                           NULL,
                           0,
                           NULL,
                           0,
                           0 );
```

All subsequent calls to `OCIEnvNlsCreate()` must also be made with `OCI_THREADED`.

OCI library manages mutexes for the application for each environment handle if a multithreaded application is running on a thread-safe operating system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
