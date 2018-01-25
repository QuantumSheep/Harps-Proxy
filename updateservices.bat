@ECHO off
for /d %%i in (.\servers\*) do (
    cd "%%i"
    cmd.exe /c npm update harps-services
    cd ../..
)
pause