# Use the same Hugo Extended version locally and in GitHub Actions.
# Tools are downloaded into ignored .local/; no global PATH changes are needed.
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$version = (Get-Content -LiteralPath (Join-Path $projectRoot '.hugo-version') -Raw).Trim()
if ($version -notmatch '^\d+\.\d+\.\d+$') { throw 'Invalid .hugo-version' }
if (-not [Environment]::Is64BitOperatingSystem) { throw 'This helper requires 64-bit Windows.' }
$toolDir = Join-Path $projectRoot ".local\hugo-$version"
$hugoExe = Join-Path $toolDir 'hugo.exe'

if (-not (Test-Path -LiteralPath $hugoExe)) {
  New-Item -ItemType Directory -Force -Path $toolDir | Out-Null
  $archiveName = "hugo_extended_${version}_windows-amd64.zip"
  $archivePath = Join-Path $toolDir $archiveName
  $checksumPath = Join-Path $toolDir 'checksums.txt'
  $release = "https://github.com/gohugoio/hugo/releases/download/v$version"
  Write-Host "Preparing Hugo Extended $version (first run only)..."
  Invoke-WebRequest -Uri "$release/$archiveName" -OutFile $archivePath -UseBasicParsing
  Invoke-WebRequest -Uri "$release/hugo_${version}_checksums.txt" -OutFile $checksumPath -UseBasicParsing
  $expected = $null
  foreach ($line in Get-Content -LiteralPath $checksumPath) {
    $parts = $line.Trim() -split '\s+'
    if ($parts.Count -eq 2 -and $parts[1] -eq $archiveName) { $expected = $parts[0] }
  }
  $actual = (Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash
  if (-not $expected -or $actual -ne $expected) { throw 'Hugo download checksum mismatch.' }
  Expand-Archive -LiteralPath $archivePath -DestinationPath $toolDir -Force
}

Push-Location $projectRoot
try {
  & $hugoExe @args
  $result = $LASTEXITCODE
} finally {
  Pop-Location
}
exit $result
