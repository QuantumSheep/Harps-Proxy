@ECHO off
cmd.exe /c pm2 startOrRestart .\ecosystem.config.js
pm2 monit