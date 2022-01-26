#!/usr/bin/env python3

import argparse
parser = argparse.ArgumentParser()
parser.add_argument("repo",
                    help="Product repository",
                    type=str)
parser.add_argument("workspace",
                    help="GitHub workplace path",
                    type=str)

args = parser.parse_args()

import os

commands = {'EnterpriseDB/cloud-native-postgresql':
            f'{args.workspace}/destination/scripts/source/process-cnp-docs.sh {args.workspace}/source {args.workspace }/destination',
            'EnterpriseDB/fe':
            f'mkdir -p {args.workspace}/destination/icons-pkg && \
              cp -fr utils/icons-placeholder/output/* {args.workspace}/destination/icons-pkg/',
            'EnterpriseDB/LiveCompare':
            f'node {args.workspace}/destination/scripts/source/livecompare.js'
            }
            

cmd = commands[args.repo]

ret = os.system(cmd) 
