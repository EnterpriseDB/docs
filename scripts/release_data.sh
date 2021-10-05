#!/bin/env sh

#set -x

output='releases.csv'
tmp=`mktemp`

git --no-pager log --pretty=format:"%C(auto)%h%d - %s (%cI) <%an>%Creset" | perl -ne 'if (/\(tag: (product[^, )]*).*\) - Merge pull request #(\d+).*\(([^)]*)\)/){print "$1,$2,$3\n"}' > $tmp

echo "release,pr,publish,start, diff" > $output

# https://unix.stackexchange.com/a/24636/21281
datediff() {
    d1=$(date -d "$1" +%s)
    d2=$(date -d "$2" +%s)
    echo $(( (d1 - d2))) # seconds
}

while read l; do
    pr=`echo $l | cut -d ',' -f 2`
    e=`echo $l | cut -d ',' -f 3`
    s=`curl -u $GITHUB_USER:$GITHUB_TOKEN -s "https://api.github.com/repos/EnterpriseDB/docs/pulls/$pr/commits" | jq '.[0] | .commit.committer.date' -r`

    d1=$(date -d "$e" +%s)
    d2=$(date -d "$s" +%s)
    #echo $(( (d1 - d2))) # seconds
    
    echo $l,$s,$(( (d1 - d2))) >> $output
done < $tmp

rm $tmp
