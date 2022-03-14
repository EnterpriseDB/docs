# Testing sync-and-process

To do a rough test of all of the synchronizations, first setup a GitHub token that has access to EDB internal repos:

```
export GITHUB_TOKEN=ghp_XXXXXXXXXXXXXXXXXXXXX
```

From the root of the docs directory, run:

```
scripts/source/test/test_all_syncs.ksh
```

