---
title: Structure Config YAML
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/structures/structure-config/
lastModified: 2026-10-21T00:19:17Z
---

# Structure Config YAML

## Overview

Structure repositories require a configuration file which informs Gen AI Builder of your Managed Structure's dependencies and how it needs to build and run.

## Structure Config File Schema

All relative paths are based off of the directory in which the `structure_config.yaml` file is located.

The schema for the configuration file is as follows:

```yaml
version: 1.0
runtime: python3
runtime_version: 3.11
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
  main_file: structure.py
```

### Configuration Fields

#### version

The Structure Config schema version number.

#### runtime

The runtime environment to use for the Structure.

#### runtime\_version

The specific version of the runtime environment for the Structure.

#### build (OPTIONAL)

The build-time configuration for the Structure.

- **pre\_build\_install\_script** - The path to your pre\_build\_install\_script, for running during the Structure build prior to dependency installation. This path is relative to the structure configuration file. Or absolute from the repository root if a forward slash is used: `/my-pre-build-install-script.sh`.
- **post\_build\_install\_script** - The path to your post\_build\_install\_script, for running during the Structure build after dependency installation. This path is relative to the structure configuration file. Or absolute from the repository root if a forward slash is used: `/my-post-build-install-script.sh`.
- **requirements\_file** - The path to your Structure's requirements.txt file.
- **cache\_build\_dependencies** - Defines the configuration for caching build dependencies in order to speed up Deployments
  - **enabled** - Defines whether the build dependency caching is on or off
  - **watched\_files** - Defines the particular files that will trigger cache invalidation, resulting in a full rebuild of the Structure and dependencies

#### run (REQUIRED)

The run-time configuration for the Structure.

- **main\_file** - Specifies the path to the entry point file of the Managed Structure. This path is relative to the structure\_config.yaml. Or absolute from the repository root if a forward slash is used: `/structure.py`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
