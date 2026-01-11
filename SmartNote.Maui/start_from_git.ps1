# SmartNote - Projekt von Git klonen und starten
# Verwendung: .\start_from_git.ps1 -RepoUrl "https://github.com/IhrUsername/SmartNote.git"

param(
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl = "",
    
    [Parameter(Mandatory=$false)]
    [string]$Branch = "main",
    
    [Parameter(Mandatory=$false)]
    [string]$TargetFolder = "C:\Users\TAAERMA0\Downloads\SmartNote-FromGit"
)

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "SmartNote - Git Clone & Start" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Falls Repository URL angegeben wurde, klone es
if ($RepoUrl -ne "") {
    Write-Host "1. Klone Repository von: $RepoUrl" -ForegroundColor Yellow
    
    # Lösche alten Ordner falls vorhanden
    if (Test-Path $TargetFolder) {
        Write-Host "   Lösche alten Ordner..." -ForegroundColor Gray
        Remove-Item -Recurse -Force $TargetFolder
    }
    
    # Clone Repository
    git clone $RepoUrl $TargetFolder --branch $Branch
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Fehler beim Klonen! Überprüfen Sie die Repository-URL." -ForegroundColor Red
        exit 1
    }
    
    # Wechsle in den Projekt-Ordner
    $ProjectPath = Join-Path $TargetFolder "SmartNote.Maui"
    if (-not (Test-Path $ProjectPath)) {
        $ProjectPath = $TargetFolder
    }
    
    Set-Location $ProjectPath
} else {
    Write-Host "Kein Repository angegeben - verwende aktuelles Verzeichnis" -ForegroundColor Yellow
    Write-Host ""
    
    # Prüfe ob Git Repository vorhanden
    if (Test-Path ".git") {
        Write-Host "1. Hole neueste Änderungen von Git..." -ForegroundColor Yellow
        
        # Speichere lokale Änderungen
        Write-Host "   Sichere lokale Änderungen..." -ForegroundColor Gray
        git stash save "Auto-stash vor Update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        
        # Hole neueste Änderungen
        git fetch origin
        
        # Merge oder Pull
        Write-Host "   Merge neueste Änderungen..." -ForegroundColor Gray
        git pull origin $Branch
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Fehler beim Pullen! Möglicherweise gibt es Konflikte." -ForegroundColor Red
            Write-Host "Führen Sie 'git status' aus, um Details zu sehen." -ForegroundColor Yellow
        }
        
        # Wende gestashte Änderungen wieder an
        $stashList = git stash list
        if ($stashList) {
            Write-Host "   Stelle lokale Änderungen wieder her..." -ForegroundColor Gray
            git stash pop
        }
    } elseif (Test-Path "../.git") {
        Write-Host "1. Git Repository im übergeordneten Ordner gefunden" -ForegroundColor Yellow
        Set-Location ..
        
        git stash save "Auto-stash vor Update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git fetch origin
        git pull origin $Branch
        
        $stashList = git stash list
        if ($stashList) {
            git stash pop
        }
        
        Set-Location "SmartNote.Maui"
    } else {
        Write-Host "WARNUNG: Kein Git Repository gefunden!" -ForegroundColor Red
        Write-Host "Möchten Sie das Projekt initialisieren? Führen Sie aus:" -ForegroundColor Yellow
        Write-Host "  git init" -ForegroundColor Cyan
        Write-Host "  git remote add origin <IHRE-REPO-URL>" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Fahre mit lokalem Build fort..." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "2. Bereinige Build-Artefakte..." -ForegroundColor Yellow
dotnet clean

Write-Host ""
Write-Host "3. Restore NuGet Pakete..." -ForegroundColor Yellow
dotnet restore

Write-Host ""
Write-Host "4. Baue Projekt..." -ForegroundColor Yellow
dotnet build -c Debug

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "5. Starte Applikation..." -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Starte die App
$exePath = "bin\Debug\net8.0-windows10.0.19041.0\win10-x64\SmartNote.Maui.exe"

if (Test-Path $exePath) {
    Start-Process $exePath
    Write-Host "✓ SmartNote wurde gestartet!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Tipp: Zum Stoppen schließen Sie einfach das App-Fenster" -ForegroundColor Gray
} else {
    Write-Host "Fehler: EXE nicht gefunden unter $exePath" -ForegroundColor Red
    Write-Host "Versuche alternativen Start mit 'dotnet run'..." -ForegroundColor Yellow
    dotnet run -f net8.0-windows10.0.19041.0
}

