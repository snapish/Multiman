#!/bin/bash
set -e

# make sure we're executing commands from project directory
cd "$(dirname $0)"

# pull latest code
git pull origin master

# install dependencies
npm install

# also install server's dependencies
cd server
npm install
cd ..

npm run ng build -prod -aot -vc -cc -dop --buildOptimizer

# symlink the service file
sudo ln -sf "$(realpath multiman.service)" /etc/systemd/system/multiman.service

sudo systemctl enable multiman.service
sudo systemctl restart multiman.service
