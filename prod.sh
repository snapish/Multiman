#!/bin/bash
set -e

cd "$(dirname $0)"
node_modules/.bin/ng build
node server/server.js
