%~d0
cd %~dp0
start "" nginx
cd php
php-cgi.exe -b 127.0.0.1:9000
