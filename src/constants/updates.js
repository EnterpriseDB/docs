import IconNames from "../components/icon/iconNames";

export const updates = [
  {
    title: "EDB Postgres Enterprise Manager 10",
    icon: IconNames.EDB_PEM,
    description:
        "PEM 10 is a major release that includes a modernized user interface, support for HA cluster grouping and server tagging, redesigned dashboards for real-time metrics, the latest pgAdmin enhancements,  and advanced query analysis tools."    
    url: "/pem/latest/",
    moreUrl: "/pem/latest/pem_rel_notes/pem_10.0.0_rel_notes/",
  },
  {
    title: "EBD Postgres Advanced Server updates",
    icon: IconNames.EDB_EPAS,
    description:
      "EDB Postgres Advanced Server 17.4 is now available, tracking the Postgres open source community's recent security fixes. EDB Postgres Extended 17.4 is also available",
    url: "/epas/latest/",
    moreUrl: "/epas/latest/epas_rel_notes/epas17_4_rel_notes/",
  },
  {
    title: "Trusted Postgres Architect 23.36",
    icon: IconNames.INSTANCES,
    description:
      "TPA 23.36 includes support Ubuntu 24.04 and SLES 15 SP6, enhanced support for EFM and simplifies repository setup to a single command.",
    url: "/tpa/latest/",
    moreUrl: "/tpa/latest/rel_notes/tpa_23.36_rel_notes/",
  },
  {
    title: "EDB Postgres AI Q4 Release News",
    icon: IconNames.SMALL_DASHBOARD,
    description:
      "EDB Postgres AI's Q4 announcements include AI Accelerator and previews of EDB's Software Deployment and Analytics Accelerator.",
    url: "/edb-postgres-ai/overview/latest-release-news/",
    moreUrl: "/edb-postgres-ai/overview/latest-release-news/",
  },
  {
    title: "EDB Postgres Advanced Server 17.2",
    icon: IconNames.EDB_EPAS,
    description:
      "EDB Postgres Advanced Server 17.2 is built on open-source PostgreSQL 17.2, which introduces myriad enhancements that enable databases to scale up and scale out in more efficient ways.",
    url: "/epas/latest/",
    moreUrl: "/epas/latest/epas_rel_notes/epas17_2_rel_notes/",
  },
  {
    title: "EDB CloudNativePG Global Cluster 1.0.1",
    icon: IconNames.KUBERNETES,
    description:
      "EDB CloudNativePG Global Cluster brings LDAP authentication configuration, tablespace configuration and more in this patch release.",
    url: "/postgres_distributed_for_kubernetes/latest/",
    moreUrl:
      "/postgres_distributed_for_kubernetes/latest/rel_notes/1_0_1_rel_notes/",
  },
  {
    title: "EDB Postgres Distributed 5.6",
    icon: IconNames.HIGH_AVAILABILITY,
    description:
      "PGD 5.6 brings improvements for observability, commit scopes, Postgres compliance, and a preview of a new optimized topology for Subscriber-only groups.",
    url: "/pgd/latest/",
    moreUrl: "/pgd/latest/rel_notes/pgd_5.6.0_rel_notes/",
  },
  {
    title: "LiveCompare 3.0",
    icon: IconNames.INTEGRATION,
    description:
      "LiveCompare 3.0 is now available with improved performance, easier to configure Oracle support, and enhanced documentation. ",
    url: "/livecompare/latest/",
    moreUrl: "/livecompare/latest/rel_notes/3.0.1_rel_notes/",
  },
  {
    title: "Trusted Postgres Architect 23.34",
    icon: IconNames.INSTANCES,
    description:
      "TPA 23.34 includes enhanced support for EFM, PEM and pgBouncer, and a new output plugin which improves readability of TPA progress.",
    url: "/tpa/latest/",
    moreUrl: "/tpa/latest/rel_notes/tpa_23.34_rel_notes/",
  },
  {
    title: "EDB Postgres Enterprise Manager 9.7",
    icon: IconNames.EDB_PEM,
    description:
      "PEM 9.7.0 includes the v12 REST API as well as other fixes and enhancements. We've added new documentation for upgrading EFM-based HA installations, and expanded the details on creating custom monitoring probes.",
    url: "/pem/latest/",
    moreUrl: "/pem/latest/pem_rel_notes/970_rel_notes/",
  },
  {
    title: "Trusted Postgres Architect 23.33",
    icon: IconNames.INSTANCES,
    description:
      "TPA 23.33 includes platform support for Debian 12, enables PGD 5.5 read-only proxies and adds the ability to deploy beacon agent for EDB Postgres AI into your deployed clusters.",
    url: "/tpa/latest/",
    moreUrl: "/tpa/latest/rel_notes/tpa_23.33_rel_notes/",
  },
  {
    title: "EDB Postgres Distributed 5.5",
    icon: IconNames.HIGH_AVAILABILITY,
    description:
      "PGD 5.5 brings improvements for connectivity and read scalability, along with MacOS support for the CLI and more.",
    url: "/pgd/latest/",
    moreUrl: "/pgd/latest/rel_notes/pgd_5.5.0_rel_notes/",
  },
  {
    title: "Trusted Postgres Architect 23.32",
    icon: IconNames.INSTANCES,
    description:
      "TPA 23.32 includes new supported platforms and extensions; docs expand the Tower/AAP topic to cover building a TPA execution environment.",
    url: "/tpa/latest/",
    moreUrl: "/tpa/latest/rel_notes/tpa_23.32_rel_notes/",
  },
  {
    title: "EDB Postgres Distributed for Kubernetes 1.0",
    icon: IconNames.KUBERNETES,
    description:
      "EDB Postgres Distributed for Kubernetes is an operator designed to manage PGD workloads on Kubernetes, with traffic routed by PGD Proxy.",
    url: "/postgres_distributed_for_kubernetes/latest/",
  },
  {
    title: "Advanced Server AWS AMI deployment",
    icon: IconNames.DATABASE,
    description:
      "EDB Postgres Advanced Server Amazon Machine Image (AMI) is a preconfigured template with EDB Postgres Advanced Server 15 installed on RHEL 8.",
    url: "/epas/15/planning/deployment_options/aws_epas/",
  },
  {
    title: "",
    icon: IconNames.DOTTED_BOX,
    description: "",
    url: "",
    moreUrl: "",
  },
];
