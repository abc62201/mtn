@echo off
set CURRENT_DIR=%~dp0
set PARENT_DIR=%CURRENT_DIR%..
set FILE_PATH=%PARENT_DIR%\debug.log
tasklist | findstr MTN
taskkill /IM MTN.exe /F
taskkill /IM MTN.vshost.exe /F
ping 127.0.0.1 -n 2 >nul
if exist "%FILE_PATH%" del /Q "%FILE_PATH%" 