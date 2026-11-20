---
title: Release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/
lastModified: 2025-11-25T21:54:48+05:30
---

# Release notes

The Replication Server documentation describes the latest version including minor releases and patches. The release notes in this section provide information on what was new in each release. For new functionality introduced in a minor or patch release, there are also indicators within the content about what release introduced the feature.

| Version                                                                                        | Release Date |
| ---------------------------------------------------------------------------------------------- | ------------ |
| [7.13.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.13.0/)  | 25 Nov 2025  |
| [7.12.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.1/)  | 07 Aug 2025  |
| [7.12.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.0/)  | 14 May 2025  |
| [7.11.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.11.0/)  | 21 Feb 2025  |
| [7.10.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.10.0/)  | 22 Nov 2024  |
| [7.9.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.9.0/)    | 22 Aug 2024  |
| [7.8.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.8.0/)    | 17 May 2024  |
| [7.7.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.7.0/)    | 14 Dec 2023  |
| [7.6.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.6.0/)    | 07 Sep 2023  |
| [7.5.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.5.1/)    | 26 May 2023  |
| [7.5.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.5.0/)    | 14 Feb 2023  |
| [7.4.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.4.0/)    | 29 Nov 2022  |
| [7.3.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/15_eprs_rel_notes_7.3.0/) | 15 Nov 2022  |
| [7.2.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/16_eprs_rel_notes_7.2.1/) | 25 Jul 2022  |
| [7.2.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/17_eprs_rel_notes_7.2.0/) | 24 Jun 2022  |
| [7.1.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/18_eprs_rel_notes_7.1.0/) | 21 Mar 2022  |
| [7.0.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/19_eprs_rel_notes_7.0.1/) | 03 Mar 2022  |
| [7.0.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/20_eprs_rel_notes_7.0.0/) | 01 Dec 2021  |

## Supported upgrade paths

You can only upgrade to Replication Server 7.x from 6.2.15 or later 6.2.x point version. If you are running a version earlier than 6.2.15, you need to first upgrade to 6.2.15 or later 6.2.x point version before upgrading to 7.x.

> **Note**
>
> Version 7.x provides a non-breaking upgrade path for existing 6.2.x based cluster deployments; however, we strongly recommended that you verify the upgrade in a staging or nonproduction environment before applying the upgrade in a production environment. There is no downgrade path from version 7.x to version 6.2.x so it is essential to test the upgrade first before applying it to the production environment.

- [Version 7.13.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.13.0/): Released: 25 Nov 2025
- [Version 7.12.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.1/): Released: 07 Aug 2025
- [Version 7.12.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.0/): Released: 14 May 2025
- [Version 7.11.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.11.0/): Released: 21 Feb 2025
- [Version 7.10.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.10.0/): Released: 22 Nov 2024
- [Version 7.9.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.9.0/): Released: 22 Aug 2024
- [Version 7.8.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.8.0/): Released: 17 May 2024
- [Version 7.7.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.7.0/): Released: 14 Dec 2023
- [Version 7.6.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.6.0/): Released: 07 Sep 2023
- [Version 7.5.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.5.1/): Released: 26 May 2023
- [Version 7.5.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.5.0/): Released: 14 Feb 2023
- [Version 7.4.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.4.0/): Released: 29 Nov 2022
- [Version 7.3.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/15_eprs_rel_notes_7.3.0/): Released: 15 Nov 2022
- [Version 7.2.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/16_eprs_rel_notes_7.2.1/): Released: 25 Jul 2022
- [Version 7.2.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/17_eprs_rel_notes_7.2.0/): Released: 24 Jun 2022
- [Version 7.1.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/18_eprs_rel_notes_7.1.0/): Released: 21 Mar 2022
- [Version 7.0.1](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/19_eprs_rel_notes_7.0.1/): Released: 03 Mar 2022
- [Version 7.0.0](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/20_eprs_rel_notes_7.0.0/): Released: 01 Dec 2021

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
