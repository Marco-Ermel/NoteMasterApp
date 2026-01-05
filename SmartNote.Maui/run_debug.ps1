# Debug-Skript zum Starten der SmartNote MAUI App mit Error-Logging
$ErrorActionPreference = "Continue"

Write-Host "=== SmartNote MAUI Debug Runner ===" -ForegroundColor Cyan
Write-Host "Building project..." -ForegroundColor Yellow

# Build the project
dotnet build -f net8.0-windows10.0.19041.0

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "Build successful!" -ForegroundColor Green
Write-Host "Starting application..." -ForegroundColor Yellow

# Run the application and capture output
$process = Start-Process -FilePath "dotnet" `
    -ArgumentList "run -f net8.0-windows10.0.19041.0 --no-build" `
    -WorkingDirectory $PSScriptRoot `
    -PassThru `
    -Wait `
    -RedirectStandardError "error.log" `
    -RedirectStandardOutput "output.log"

if ($process.ExitCode -ne 0) {
    Write-Host "`nApplication exited with error code: $($process.ExitCode)" -ForegroundColor Red
    
    if (Test-Path "error.log") {
        Write-Host "`nError log:" -ForegroundColor Red
        Get-Content "error.log"
    }
    
    if (Test-Path "output.log") {
        Write-Host "`nOutput log:" -ForegroundColor Yellow
        Get-Content "output.log"
    }
} else {
    Write-Host "`nApplication exited normally." -ForegroundColor Green
}

Read-Host "`nPress Enter to exit"

