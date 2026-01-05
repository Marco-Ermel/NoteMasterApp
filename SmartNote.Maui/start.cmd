@echo off
echo ====================================
echo SmartNote MAUI App Starter
echo ====================================
echo.
echo Building project...
dotnet build -f net8.0-windows10.0.19041.0

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo BUILD FAILED!
    echo Check the errors above.
    pause
    exit /b 1
)

echo.
echo BUILD SUCCESSFUL!
echo Starting application...
echo.

echo Starting SmartNote.Maui.exe...
echo.

"bin\Debug\net8.0-windows10.0.19041.0\win10-x64\SmartNote.Maui.exe"

echo.
echo.
echo App has closed. Exit code: %ERRORLEVEL%
echo If the window appeared and closed immediately, there might be a runtime error.
echo.
pause

