#!/bin/bash
set -e

# make sure we're executing commands from project directory
cd "$(dirname $0)"

npm run ng build -- --watch &
ngPID=$!

cd server
./node_modules/.bin/nodemon server.js &
nodePID=$!

wait $ngPID $nodePID
