#!/usr/bin/env ksh

for p in bdr lc pglogical 
do
    act -j sync-and-process-files -e scripts/source/test/sync-${p}.json -s SYNC_FILES_TOKEN=$GITHUB_TOKEN -s GITHUB_TOKEN=$GITHUB_TOKEN -P ubuntu-latest=node:16-buster
    ret=$?
    if [ $ret -eq 0 ]
    then
        echo "Successful run of $p!"
    else
        echo "$p failed with a return code of $ret"
        exit $ret
    fi
done
