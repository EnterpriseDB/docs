# Sync Cloud-Native-PostgreSQL Docs

Documentation from [cloud-native-postgresql][cnp]("CNP") should be synced over automatically when there is a new release, however in the event that needs to be done manually, the following process can be used:

1. Check out the appropriate version from the [CNP][] repo.
1. Run the processor script

   **note:** replace `path/to/cnp/checkout` below to the actual path of your CNP checkout. If you are not running the script from this project's root, you will need to update `.` below to be the path to this project's checkout.
   ```sh
   scripts/source/process-cnp-docs.sh path/to/cnp/checkout .
   ```
1. The script will handle updating and moving the files from the [CNP][] repo into place.


[cnp]: https://github.com/EnterpriseDB/cloud-native-postgresql
