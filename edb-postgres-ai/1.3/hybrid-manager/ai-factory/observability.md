---
title: Observability (AI Factory on HM)
description: Where to observe Gen AI and Model Serving workloads in Hybrid Manager; links to hub.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/observability/
lastModified: 2026-06-24T12:48:12Z
---

# Observability (AI Factory on HM)

**Hub quick links:**
[Model Serving observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/) — [Gen AI hub](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/)

---

## Observability in Hybrid Manager

When you deploy AI Factory components on Hybrid Manager, the platform gives you integrated observability for both **Model Serving** (KServe) and **Gen AI Builder** workloads.

### Model Serving (KServe)

- Use the platform dashboards and logs to monitor **InferenceServices** and GPU workloads.
- Metrics include request latency, throughput, GPU/CPU utilization, and error rates.
- See: [Monitor InferenceService](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/model/monitor-inferenceservice/)

### Gen AI Builder (Assistants & threads)

- Each **assistant thread** is recorded in the system so you can trace inputs, retrieval context, and outputs.
- Thread data can be viewed in the Gen AI Builder UI inside Hybrid Manager.
- Usage metrics (number of runs, latency, errors) are integrated into the platform’s observability stack.
- See: [View threads (hub)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/view-threads/)

---

## Accessing metrics and logs

- **Dashboards.** Hybrid Manager surfaces AI Factory metrics through the built-in observability dashboards (Grafana).
- **Logs.** Use `kubectl logs` or the HM UI log viewer to inspect Gen AI Builder pods, KServe InferenceServices, and retriever jobs.
- **Tracing.** OpenTelemetry drivers are included in Gen AI Builder for deeper tracing; see [Gen AI observability drivers (hub)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/observability-drivers/).

---

## Typical commands

For cluster-level troubleshooting or custom dashboards, you can also pull metrics and logs directly:

```bash
# Check logs for a running InferenceService
kubectl logs -n <project-namespace> svc/<model-service-name>

# Port-forward Grafana if running locally
kubectl port-forward -n observability svc/grafana 3000:3000
```

---

## Key takeaway

- **Model Serving** → monitored as KServe services with full metrics.
- **Gen AI Builder** → assistants and threads tracked for usage and auditing.
- **Hybrid Manager** provides a unified observability layer — no separate monitoring stack to configure.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
