---
title: EDB OTEL
product: EDB OTEL
url: https://www.enterprisedb.com/docs/pg_extensions/otel/
lastModified: 2026-04-01T20:48:21+05:30
---

# EDB OTEL

EDB OTEL (edb\_otel) is an extension that allows metrics and traces to be sent through the [OpenTelemetry](https://opentelemetry.io) (OTEL) protocol. It communicates with an OTEL endpoint and sends metrics and traces to it. Other extensions can use APIs to pass metrics and traces to edb\_otel, which in turn redirects to the OTEL endpoint.

edb\_otel includes a background worker process that's responsible for managing the metric instruments and exporting the metrics to the OpenTelemetry metrics collector. The worker handles calls to the OpenTelemetry C++ SDK, preventing them from blocking the main backend process. Metric data, reported by other backends via a shared memory queue, is periodically retrieved and processed by the worker.

Tracing support currently does _not_ offload the OpenTelemetry C++ SDK overhead to the background worker.
Each PostgreSQL backend or process that requires tracing support needs to initialize tracing within its own process.
The extension uses OpenTelemetry's `SimpleSpanProcessor` instrumentation API, which exports a span synchronously as it ends.
If there is an attempt to end a span and the export of the span fails due to a network error,
the span is marked ended, and can no longer be exported.
However, spans that end after the network recovery are successfully exported.

Subsequent EDB extension releases will leverage edb\_otel APIs for centralized routing of OTEL metrics.

## Deprecation of support for edb\_otel-1.0

edb\_otel-2.0 breaks compatibility with edb\_otel-1.0 due to API changes essential for improvement
in support for metrics and tracing. You can [upgrade from 1.0 to 2.0](https://www.enterprisedb.com/docs/pg_extensions/otel/upgrading/), as long as you then update any logic
that relies on the 1.0 API to [use the new 2.0 API](https://www.enterprisedb.com/docs/pg_extensions/otel/using/).

Future work on this extension will build on the 2.0 API documented here; there are no plans for future updates to 1.0.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
