#!/bin/bash
set -e

# make sure we're executing commands from project directory
cd "$(dirname $0)"

npm run ng serve &
ngPID=$!

./server/node_modules/.bin/nodemon server/server.js &
nodePID=$!

wait $ngPID $nodePID
