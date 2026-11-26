---
title: datadog_observability_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/datadog_observability_driver/
lastModified: 2025-11-07T18:06:05Z
---

# datadog\_observability\_driver

<span id="griptape.drivers.observability.datadog_observability_driver.DatadogObservabilityDriver"></span>

Bases:
[`OpenTelemetryObservabilityDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/open_telemetry_observability_driver/#griptape.drivers.observability.open_telemetry_observability_driver.OpenTelemetryObservabilityDriver "OpenTelemetryObservabilityDriver (griptape.drivers.observability.open_telemetry_observability_driver.OpenTelemetryObservabilityDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/observability/datadog\_observability\_driver.py</code>

</summary>

```python
@define
class DatadogObservabilityDriver(OpenTelemetryObservabilityDriver):
    datadog_agent_endpoint: str = field(
        default=Factory(lambda: os.getenv("DD_AGENT_ENDPOINT", "http://localhost:4318")), kw_only=True
    )
    span_processor: SpanProcessor = field(
        default=Factory(
            lambda self: import_optional_dependency("opentelemetry.sdk.trace.export").BatchSpanProcessor(
                import_optional_dependency("opentelemetry.exporter.otlp.proto.http.trace_exporter").OTLPSpanExporter(
                    endpoint=f"{self.datadog_agent_endpoint}/v1/traces"
                )
            ),
            takes_self=True,
        ),
        kw_only=True,
    )
```

</details>

- `datadog_agent_endpoint = field(default=Factory(lambda: os.getenv('DD_AGENT_ENDPOINT', 'http://localhost:4318')), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.observability.datadog_observability_driver.DatadogObservabilityDriver.datadog_agent_endpoint"></span>

- `span_processor = field(default=Factory(lambda self: import_optional_dependency('opentelemetry.sdk.trace.export').BatchSpanProcessor(import_optional_dependency('opentelemetry.exporter.otlp.proto.http.trace_exporter').OTLPSpanExporter(endpoint=f'{self.datadog_agent_endpoint}/v1/traces')), takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.observability.datadog_observability_driver.DatadogObservabilityDriver.span_processor"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
