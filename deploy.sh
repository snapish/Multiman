#!/bin/bash
#set -e

# make sure we're executing commands from project directory
cd "$(dirname $0)"

#point to production
git checkout production

# pull latest code
git pull origin production

# install dependencies
npm install

# also install server's dependencies
cd server
npm install
cd ..

npm run ng build -- --prod --buildOptimizer
# -aot -vc -cc -dop
# symlink the service file
sudo ln -sf "$(realpath multiman.service)" /etc/systemd/system/multiman.service

sudo systemctl enable multiman.service
sudo systemctl restart multiman.service
