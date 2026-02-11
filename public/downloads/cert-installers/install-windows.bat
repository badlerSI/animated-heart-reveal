@echo off
echo ============================================
echo   SOUL Learning CA Certificate Installer
echo   Windows
echo ============================================
echo.
echo Installing SOUL Learning CA certificate...
certutil -addstore -f "ROOT" "%~dp0SOUL-Learning-CA.crt"
if %errorlevel% equ 0 (
    echo.
    echo SUCCESS! Certificate installed.
    echo Please restart your browser.
) else (
    echo.
    echo ERROR: Please right-click this file and select "Run as administrator"
)
echo.
pause
