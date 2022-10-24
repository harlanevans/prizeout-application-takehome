#!/bin/sh

if [ $RUN_NPM_INSTALL == 'true' ] || [ $RUN_NPM_INSTALL == 'TRUE' ]
then
  npm install
fi
echo "Starting up..."
npm start