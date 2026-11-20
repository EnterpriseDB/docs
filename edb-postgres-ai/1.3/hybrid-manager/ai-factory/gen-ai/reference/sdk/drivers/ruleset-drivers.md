---
title: Ruleset
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/ruleset-drivers/
lastModified: 2026-05-22T19:45:14+05:30
---

# Ruleset

## Overview

Ruleset Drivers can be used to load rules in from external sources.

## Ruleset Drivers

### Local

The [LocalRulesetDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/local_ruleset_driver/) allows you to load a Ruleset from a local JSON file. The `persist_dir` parameter is used to specify a local directory where one or more Ruleset files are located. If no `persist_dir` parameter is given, the `.load` method is a no-op.

```python
import json
import os
from pathlib import Path

from griptape.drivers.ruleset.local import LocalRulesetDriver
from griptape.rules import Ruleset

ruleset_dir = "path/to/ruleset/dir"
ruleset_name = "my_local_ruleset.json"
ruleset_path = Path(os.path.join(ruleset_dir, ruleset_name))

os.makedirs(ruleset_dir, exist_ok=True)

ruleset_path.write_text(json.dumps({"rules": [{"value": "Always talk like a pirate."}]}))

ruleset = Ruleset(
    name=ruleset_name,
    ruleset_driver=LocalRulesetDriver(persist_dir=ruleset_dir),
)

```

### Gen AI Builder

The [GriptapeCloudRulesetDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/griptape_cloud_ruleset_driver/) allows you to load a Gen AI Builder Ruleset resource. `Ruleset.name` is used to try and find a Gen AI Builder Ruleset with that alias.

```python
from griptape.drivers.ruleset.griptape_cloud import GriptapeCloudRulesetDriver
from griptape.rules import Ruleset

rulset = Ruleset(
    name="my_griptape_cloud_ruleset_alias",
    ruleset_driver=GriptapeCloudRulesetDriver(),
)

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
