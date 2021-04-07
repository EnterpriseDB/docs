# Sync Cloud-Native-PostgreSQL Docs

Currently we need to manually sync over [cloud-native-postgresql][cnp]("CNP")
docs whenever there's a new release. The long term goal is to automate this via
GitHub action dispatch and automated event handling.

1. The CNP team informs us that there's a new version.
1. Check out the appropriate version from the [CNP][] repo.
1. Replace `docs:temp_kubernetes/original/` with
   `cloud-native-postgresql:docs/`.
1. Transpile original source documentation into MDX format:

   ```sh
   python scripts/source/source_cloud_native_operator.py
   ```

1. Replace `advocacy_docs/kubernetes/cloud-native-postgresql/` with
   `temp_kubernetes/build/`.

[cnp]: https://github.com/EnterpriseDB/cloud-native-postgresql
