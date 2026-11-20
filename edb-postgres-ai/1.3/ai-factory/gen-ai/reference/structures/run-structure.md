---
title: Running a Structure
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/run-structure/
lastModified: 2026-03-17T02:16:04Z
---

# Running a Structure

Once your Structure is created and deployed, you can run your Structure one of three ways outlined below. You may view the details of any of your runs, no matter how you created them, in the `Runs` tab of your Structure.

To learn more about Structure Run details and output, look at the [Structure Run Events](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/structure-run-events/) documentation.

## From the Cloud Console

In the cloud console, click on the name of the Structure you wish to run and then go to the _Runs_ tab. Then hit the _Create Run_ button. Here you can specify arguments to pass to your Structure run and any run-specific environment variables you need.

When passing arguments through the cloud console, pass each new argument on a new line. For example if your local code is ran with the inputs `-i input_file.txt` then the arguments you would pass in the cloud would be:

```bash
-i
input_file.txt
```

## From the API

You can run your Structure via the API using cURL or any other code that can make HTTP requests. You will need a Gen AI Builder API Key and the `Structure Invocation URL` which is located on the `Config` tab of your Structure.

The example below will kick off a run with the args you pass as a json object.

```shell
export GT_CLOUD_API_KEY=<your API key here>
export INVOCATION_URL=<your structure invocation URL>
curl -H "Authorization: Bearer ${GT_CLOUD_API_KEY}" --json '{"args": ["arg1"], "env_vars": [{"name":"var1", "value": "value"}]}' "${INVOCATION_URL}"
```

For more information on other Structure run APIs, check out the [StructureRuns API docs](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/api/#structureruns).

## Using the Gen AI Builder SDK

You can use [StructureRunDrivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/drivers/structure-run-drivers/#gen-ai-builder) to run your Structure with Gen AI Builder.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
