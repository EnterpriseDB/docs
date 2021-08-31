# This file is intended for development only.
# It will allow users to quickly get this app running so that they can start making updates without worrying about
# whether or not dependencies are properly installed.
FROM node:14

WORKDIR /home/app

EXPOSE 8000

ENTRYPOINT yarn && yarn develop -H 0.0.0.0 2>&1
