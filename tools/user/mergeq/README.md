# Mergeq

Utility which reads the docs github repo and finds any PRs which have been merged but not yet published in production release. It then generates a list of PRs with their titles, to assist generating the PR for a production release.

## Usage

From the docs root:

```bash
$ tools/user/mergeq/mergeq.js
```

This will output a list of PRs which have been merged but not yet published in a production release.


