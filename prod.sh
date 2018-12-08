#!/usr/bin/env bash

cd /home/upltest/public_html/zara_risk/
npm run build && export NODE_ENV=production && pm2 restart dist/main.js --name riskTooling -i max