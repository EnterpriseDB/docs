---
title: Loading data with FlowServer
description: Learn how to load data into WarehousePG with FlowServer.
product: FlowServer for WarehousePG
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/
lastModified: 2026-01-21T17:42:05Z
---

# Loading data with FlowServer

FlowServer for WarehousePG (WHPG) supports loading data from Apache Kafka and RabbitMQ sources into a WHPG table.

Apache Kafka is a fault-tolerant, low-latency, distributed publish-subscribe message system. FlowServer for WHPG supports loading Kafka data from the Apache and Confluent Kafka distributions.

The FlowServer supports loading data from a RabbitMQ traditional AMQP queue into WHPG. FlowServer acts as a RabbitMQ consumer.

Perform the following tasks when you use the FlowServer to load data into a WHPG table:

1. Ensure that you meet the [prerequisites](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/prerequisites/).
2. [Construct the load configuration file](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/config_file/).
3. [Create the target table on WHPG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/target_table/) and assign the necessary role permissions.
4. Run the FlowCLI client to [submit and manage the load job](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/submit_job/).

- [Prerequisites](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/prerequisites/): Understand the prerequisites before loading data with FlowServer.
- [Constructing the configuration file](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/config_file/): Learn how to construct the required YAML configuration file to load data to WarehousePG with FlowServer.
- [Creating the target table](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/target_table/): Learn how to create the target table and configure role privileges to load data to WarehousePG with FlowServer.
- [Submitting the FlowServer job](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/submit_job/): Learn how to submit the FlowServer job to load data to WarehousePG.
- [Examples](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/examples/): Understand how to load data using Flowserver through the provided worked examples.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
