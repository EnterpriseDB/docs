#!/usr/bin/env python3
import argparse
import os
import sys

parser = argparse.ArgumentParser()
parser.add_argument("repo", help="Product repository", type=str)
parser.add_argument("workspace", help="GitHub workplace path", type=str)

args = parser.parse_args()

commands = {
    "EnterpriseDB/cloud-native-postgresql": f"{args.workspace}/destination/scripts/source/process-cnp-docs.sh {args.workspace}/source {args.workspace }/destination",
    "EnterpriseDB/fe": f"mkdir -p {args.workspace}/destination/icons-pkg && \
              cp -fr utils/icons-placeholder/output/* {args.workspace}/destination/icons-pkg/",
    "EnterpriseDB/LiveCompare": f"node {args.workspace}/destination/scripts/source/livecompare.js {args.workspace}/source {args.workspace }/destination",
    "EnterpriseDB/bdr": f"node {args.workspace}/destination/scripts/source/bdr.js {args.workspace}/source {args.workspace }/destination",
}

ret = os.system(
    f"cd {args.workspace}/destination/scripts/source && \
                  npm install --production"
)

if ret != 0:
    print(f"npm install failed: {ret}", file=sys.stderr)

if args.repo in commands:
    cmd = commands[args.repo]
    ret = os.system(cmd)
else:
    print(
        f"The workflow has not been configured for the {args.repo} repo",
        file=sys.stderr,
    )
    ret = 1

sys.exit(ret)
