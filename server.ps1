# IELTS Academic Master - Lightweight Local Mobile Server
$ErrorActionPreference = "SilentlyContinue"

# Determine Local Wi-Fi IPv4 Address
$ipConfig = ipconfig | Out-String
$ipMatch = [regex]::Match($ipConfig, "IPv4 Address[.\s]+:\s+([0-9\.]+)")
$localIp = if ($ipMatch.Success) { $ipMatch.Groups[1].Value.Trim() } else { "127.0.0.1" }
$port = 8080
$prefix = "http://*:$port/"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " ⚡ ACIL INGILIZCE !! - MOBIL SUNUCU BASLATILIYOR" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host " [1] Bilgisayarinizdaki Baglanti: " -NoNewline
Write-Host "http://localhost:$port" -ForegroundColor Green
Write-Host ""
Write-Host " [2] TELEFONUNUZDAN BAGLANMAK ICIN:" -ForegroundColor Yellow
Write-Host "     1. Telefonunuzun bu bilgisayarla AYNI Wi-Fi agina bagli oldugundan emin olun."
Write-Host "     2. Telefonunuzun tarayicisina (Safari veya Chrome) su adresi yazin:"
Write-Host ""
Write-Host "     ===> http://${localIp}:${port} <===" -ForegroundColor Magenta -BackgroundColor Black
Write-Host ""
Write-Host "     3. VEYA telefonda QR Kod tarayicisi acarak ekrandaki baglantiya girin."
Write-Host ""
Write-Host " [3] TELEFONDA GERCEK UYGULAMA YAPMA (PWA):" -ForegroundColor Cyan
Write-Host "     - iPhone'da: Safari'de alt ortadaki 'Paylas' butonuna basin -> 'Ana Ekrana Ekle' secin."
Write-Host "     - Android'de: Chrome'da sag ustteki uc noktaya basin -> 'Uygulamayi Yukle' secin."
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Sunucu calisiyor... Kapatmak icin bu pencereyi kapatin (Ctrl + C)." -ForegroundColor Gray
Write-Host ""

# Start Default Browser on PC
Start-Process "http://localhost:$port"

# Set up HttpListener
$rootPath = $PSScriptRoot
if (-not $rootPath) { $rootPath = Get-Location }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    # If wildcard binding fails due to permissions, fallback to localhost and prompt
    Write-Host "Not: Port $port dinlenirken genel izin gerekebilir, yerel olarak deneniyor..." -ForegroundColor Yellow
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Prefixes.Add("http://${localIp}:$port/")
    $listener.Start()
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
        $urlPath = "/index.html"
    }

    $filePath = Join-Path $rootPath $urlPath.TrimStart("/").Replace("/", "\")

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentType = $contentType
        $response.ContentLength64 = $bytes.Length
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
        $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
    }
    $response.OutputStream.Close()
}
