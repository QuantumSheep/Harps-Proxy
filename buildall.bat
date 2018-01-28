@ECHO off
cmd.exe /c npm install
for /d %%i in (.\servers\*) do (
    cd "%%i"
    cmd.exe /c npm install && npm run build
    cd ../..
)
pause