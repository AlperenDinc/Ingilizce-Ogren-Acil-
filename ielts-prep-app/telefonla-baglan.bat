@echo off
title ACIL INGILIZCE !! - Mobil Sunucu
cd /d "%~dp0"
echo ========================================================
echo  ACIL INGILIZCE !! - Mobil Erisim Sunucusu
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
