---
title: Tool Config YAML
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/tools/tool-config/
lastModified: 2026-10-21T00:19:17Z
---

# Tool Config YAML

## Overview

Tool repositories require a configuration file which informs Gen AI Builder of your Tool's dependencies and how it needs to build and run.

## Tool Config File Schema

All relative paths are based off of the directory in which the `tool_config.yaml` file is located.

The schema for the configuration file is as follows:

```yaml
version: 1.0
runtime: python3
runtime_version: 3.12
build:
  pre_build_install_script: scripts/my-pre-build-install-script.sh
  post_build_install_script: scripts/my-post-build-install-script.sh
  requirements_file: requirements.txt
  cache_build_dependencies:
    enabled: false
    watched_files:
      - requirements.txt
      - scripts/my-pre-build-install-script.sh
      - scripts/my-post-build-install-script.sh
run:
  init_tool_function: init_tool
  init_tool_file: tool.py
  tool_file: tool.py
```

### Configuration Fields

#### version

The Tool Config schema version number.

#### runtime

The runtime environment to use for the Tool.

#### runtime\_version

The specific version of the runtime environment for the Tool.

#### build (OPTIONAL)

The build-time configuration for the Tool.

- **pre\_build\_install\_script** - The path to your pre\_build\_install\_script, for running during the Tool build prior to dependency installation. This path is relative to the structure configuration file. Or absolute from the repository root if a forward slash is used: `/my-pre-build-install-script.sh`.
- **post\_build\_install\_script** - The path to your post\_build\_install\_script, for running during the Tool build after dependency installation. This path is relative to the structure configuration file. Or absolute from the repository root if a forward slash is used: `/my-post-build-install-script.sh`.
- **requirements\_file** - The path to your Tool's requirements.txt file.
- **cache\_build\_dependencies** - Defines the configuration for caching build dependencies in order to speed up Deployments
  - **enabled** - Defines whether the build dependency caching is on or off
  - **watched\_files** - Defines the particular files that will trigger cache invalidation, resulting in a full rebuild of the Tool and dependencies

#### run (REQUIRED)

The run-time configuration for the Tool.

- **tool\_file**: The file that contains the Gen AI Builder `BaseTool`-derived class. The default value is `tool.py`.
- **init\_tool\_file**: The file that contains your `init_tool` function. The default value is `tool.py`.
- **init\_tool\_function**: The function that will be called. The function takes no arguments and returns an instance of your `Tool`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
