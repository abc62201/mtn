@echo off

rem 查找并关闭 nginx 进程
tasklist | findstr nginx
taskkill /IM nginx.exe /F

rem 提示用户 nginx 已关闭
echo nginx 服务器已关闭。