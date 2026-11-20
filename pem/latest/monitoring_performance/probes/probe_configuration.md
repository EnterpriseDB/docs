---
title: Probe configuration
description: Learn about probe configuration in PEM
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/probe_configuration/
lastModified: 2026-02-19T17:45:35+05:30
---

# Probe configuration

The **Probe Configuration** settings are available when modifying a probe within the Postgres Enterprise Manager (PEM) interface.

You can access these settings by navigating to **Management > Probes > Probe configuration**:

- **Name** — The descriptive name of the specific probe (e.g., Database Statistics, Tablespace Size).

- **Probe enabled?** — A dropdown menu to toggle the probe state. Selecting `Default` follows the global configuration set for the PEM agent. Choosing `Enable` enables the probe regardless of global settings, while `Disable` disables it.

- **Status** — Indicates whether the probe is currently enabled or disabled.
  - **Green checkmark** — The probe is active and enabled.
  - **Red cross mark** — The probe is inactive and disabled.

- **Execution Frequency** — The interval at which the probe runs, defined in minutes and seconds.
  - **Use default?** — A toggle to determine if the probe should use the default execution frequency defined at the PEM agent level. If disabled, you can specify a custom interval.
  - **Time (HH:MM:SS)** — If the default is disabled, you can manually set the specific time interval for probe execution.

- **History Retention** — The number of days that the probe's historical data is retained in the PEM database.
  - **Use default?** — A toggle to determine if the probe should use the default data retention period defined at the PEM agent level. If disabled, you can specify a custom retention period.
  - **In days** — If the default is disabled, you can manually set the number of days to retain historical data for this probe.

## Actions

- **Reset** — A button to reset the probe's configuration settings back to their default values as defined at the global level. This will override any custom settings you have applied for this probe.

- **Copy probes** — A button that allows you to copy the configuration of the current probes from the selected object to other objects. This is useful for quickly applying the same settings across multiple probes without having to configure each one individually.

> **Note**
>
> Any modifications made to probe configurations are not instantaneous. Please allow a few seconds for these changes to be fully reflected and synchronized across the system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
