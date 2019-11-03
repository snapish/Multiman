#!/bin/bash
set -e

# make sure we're executing commands from project directory
cd "$(dirname $0)"

#point to master
#git checkout master

# pull latest code
git pull origin master

# install dependencies
npm install
npm audit fix

# also install server's dependencies
cd server
npm install
npm audit fix
cd ..

npm run ng build -- --prod --buildOptimizer
# -aot -vc -cc -dop
# symlink the service file
sudo ln -sf "$(realpath multiman.service)" /etc/systemd/system/multiman.service

sudo systemctl enable multiman.service
sudo systemctl restart multiman.service