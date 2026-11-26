---
title: Customizing AI scenario secrets
description: Learn how to customize the secrets for the `ai` installation scenario in your Hybrid Manager installation.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/genai_secrets/
lastModified: 2026-11-20T19:53:06+05:30
---

# Customizing AI scenario secrets

> **Warning: Not available in Hybrid Manager 2026.10.1 and later**
>
> The `ai` installation scenario isn't available in Hybrid Manager 2026.10.1 and later. It's expected to return in a future release. Langflow (GenAI Builder) was permanently removed.

Required for deployments with the `ai` installation scenario enabled. These secrets handle model pulls.

**NGC API Key:** Required for pulling NVIDIA NIM models.

**HuggingFace access token:** Optional. Required only if you pull models from HuggingFace. Available starting in Hybrid Manager (HM) 2026.4 (Innovation Release) and 1.4 (LTS).

## Creating AI scenario secrets

> **Note**
>
> Required for deployments with the `ai` installation scenario enabled. When the scenario returns, add `ai` to `spec.scenarios` in the `HybridControlPlane` CR.

1. One of the secrets you create requires an NGC API key. Create one following the [NVIDIA NGC documentation](https://docs.nvidia.com/ngc/gpu-cloud/ngc-user-guide/index.html#ngc-api-keys) to enable model image pulls.

2. You can create the NGC key secrets using [`edbctl`](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/edbctl/), the Hybrid Manager CLI.

   - For manual installations, run this command and follow the interactive prompts:

     ```bash
     edbctl hybrid-manager create-install-secrets --version <version> --scenario ai
     ```

   - If you're running the installation via a CI/CD pipeline, you must suppress interactive prompts. The method for achieving this depends on your `edbctl` version:

     1. Ensure the NGC API key you created above is available as a variable.

     2. Configure `edbctl` for non-interactive behavior:

        ```shell
        edbctl config set interactive_mode off
        edbctl config set confirm_mode off
        ```

     3. Run the setup command:

        ```shell
        edbctl hybrid-manager create-install-secrets --version <version> --scenario ai
        ```

     This creates the `nvidia-nim-secrets` and `ngc-cred` secrets in the `edb-system` namespace with the appropriate replication annotations.

3. If you plan to pull models from HuggingFace, create a `hf-secret` containing your HuggingFace access token:

   ```shell
   EDB_AI_HF_TOKEN='<your-huggingface-token>' \
   edbctl hybrid-manager create-install-secrets --version <version> --scenario ai
   ```

   This is optional — if no token is provided, the `hf-secret` is skipped and HuggingFace-hosted models aren't available.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
