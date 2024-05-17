import IconNames from "../components/icon/iconNames";

export const updates = [
  {
    title: "EDB Postgres Distributed 5.5",
    icon: IconNames.HIGH_AVAILABILITY,
    description:
      "PGD 5.5 brings improvements for connectivity and read scalability, along with MacOS support for the CLI and more.",
    url: "/postgres_distributed_for_kubernetes/latest/",
    moreUrl:
      "/postgres_distributed_for_kubernetes/latest/rel_notes/pgd_5.5.0_rel_notes/",
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
