---
title: Configuring
description: For administrators configuring EDB Agent Governance — managing identity providers and securing your deployment.
product: EDB Agent Governance
version: "1"
url: https://www.enterprisedb.com/docs/agent-governance/latest/administration/
lastModified: 2026-11-04T13:59:00+05:30
---

# Configuring

Configure EDB Agent Governance. For deploying the stack, see [Installing](https://www.enterprisedb.com/docs/agent-governance/latest/installing/). For the authentication model and credential handling behind these settings, see [Securing access and handling credentials](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/). Once your identity providers and security settings are in place, continue with [Connecting an aidb database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/) or [Connecting Hybrid Manager or Loki](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_data_sources/) for the legacy sources.

## Managing identity providers

Go to Settings → Identity Providers after signing in at `publicBaseURL` to manage the identity providers your users sign in through:

1. Add an OIDC, SAML, or LDAP connector for your organization's identity provider.

2. After federating, switch day-to-day login away from the bootstrap admin to the federated provider, keeping the bootstrap admin as a break-glass account.

3. Restrict the admin allowlist to the people who hold administrator access.

## Securing your deployment

Review [Securing access and handling credentials](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/) for credential storage, network protection, and TLS verification requirements. Three points are worth calling out:

- Keep the database volume encrypted at rest, and back it up. It holds instance access keys, cached sessions, and the identity provider connector secrets. Encrypt the underlying volume the same way described in [Storing credentials at rest](https://www.enterprisedb.com/docs/agent-governance/latest/security_and_data/#storing-credentials-at-rest); for how the volume itself is provisioned and sized, see [Configuring the Postgres database](https://www.enterprisedb.com/docs/agent-governance/latest/installing/#configuring-the-postgres-database). If the volume is lost, the databases come back empty — every instance and connector has to be registered again, or restored from a backup you took yourself.
- HM and Loki sources can't reach private network ranges by default. For these sources, the backend blocks egress to [RFC 1918](https://www.rfc-editor.org/rfc/rfc1918), carrier-grade NAT, and IPv6 unique-local addresses, so a registered HM or Loki source can't be used to probe your internal network. Set `bff.blockPrivateEgress=false` — a Helm value, see [Configuration values](https://www.enterprisedb.com/docs/agent-governance/latest/installing/#configuration-values) — only for on-premises deployments whose HM or Loki upstreams live on private addresses. Cloud metadata, loopback, and link-local addresses stay blocked regardless. AIDB connections use the separate `bff.aidbBlockPrivate` setting, which defaults to `false` to allow databases on private networks.
- Expect a short crash loop right after install. Nothing in the chart holds the stack back until Dex is ready, so the backend may restart a few times until OIDC discovery against `<publicBaseURL>/sso` succeeds. Setting `bff.waitForDex=true` — see [Configuration values](https://www.enterprisedb.com/docs/agent-governance/latest/installing/#configuration-values) — adds an init container that probes the issuer first, turning that crash loop into a clean wait.

## Monitoring your deployment

Check pod status across the four containers:

```bash
kubectl -n governance get pods
```

Watch nginx's logs for upstream errors — for example a `502` or `504` from `bff`, which usually means the backend hasn't finished starting or is failing its OIDC discovery check:

```bash
kubectl -n governance logs -l governance.io/component=nginx
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
