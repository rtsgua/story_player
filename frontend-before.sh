#!/bin/sh

cd frontend
npm install --quiet -g grunt-cli karma bower
npm install
bower install