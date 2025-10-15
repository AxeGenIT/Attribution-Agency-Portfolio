# Image Optimization Script for Windows
# This script helps compress large images in the public folder

Write-Host "=== Attribution Agency Image Optimization ===" -ForegroundColor Green
Write-Host ""

# Check if ImageMagick is installed
$imageMagickPath = Get-Command "magick" -ErrorAction SilentlyContinue
if (-not $imageMagickPath) {
    Write-Host "ImageMagick not found. Please install ImageMagick from:" -ForegroundColor Yellow
    Write-Host "https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternative: Install using Chocolatey:" -ForegroundColor Yellow
    Write-Host "choco install imagemagick" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installation, rerun this script." -ForegroundColor Yellow
    exit 1
}

Write-Host "Found ImageMagick at: $($imageMagickPath.Source)" -ForegroundColor Green
Write-Host ""

# Navigate to public directory
$publicDir = ".\public"
if (-not (Test-Path $publicDir)) {
    Write-Host "Public directory not found. Make sure you're running this from the project root." -ForegroundColor Red
    exit 1
}

Write-Host "Analyzing images in public directory..." -ForegroundColor Cyan
Write-Host ""

# Find large images (over 1MB)
$largeImages = Get-ChildItem -Path $publicDir -Recurse -Include *.png,*.jpg,*.jpeg | Where-Object { $_.Length -gt 1MB } | Sort-Object Length -Descending

if ($largeImages.Count -eq 0) {
    Write-Host "No large images found that need optimization." -ForegroundColor Green
    exit 0
}

Write-Host "Found $($largeImages.Count) large images:" -ForegroundColor Yellow
foreach ($img in $largeImages) {
    $sizeMB = [math]::Round($img.Length/1MB, 2)
    Write-Host "  $($img.Name): ${sizeMB}MB" -ForegroundColor White
}
Write-Host ""

$response = Read-Host "Do you want to optimize these images? (y/N)"
if ($response -ne 'y' -and $response -ne 'Y') {
    Write-Host "Optimization cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Starting optimization..." -ForegroundColor Cyan

$totalSavings = 0
$optimizedCount = 0

foreach ($img in $largeImages) {
    $originalSize = $img.Length
    $relativePath = $img.FullName.Replace((Get-Location).Path + "\", "")
    
    Write-Host "Optimizing: $($img.Name)..." -ForegroundColor Yellow
    
    # Create backup
    $backupPath = $img.FullName + ".backup"
    Copy-Item $img.FullName $backupPath
    
    try {
        # Optimize based on file type
        if ($img.Extension -eq ".png") {
            # PNG optimization: reduce quality and strip metadata
            & magick $img.FullName -strip -define png:compression-level=9 -quality 85 $img.FullName
        } else {
            # JPG optimization: reduce quality and strip metadata
            & magick $img.FullName -strip -quality 75 -sampling-factor 4:2:0 $img.FullName
        }
        
        # Check new size
        $newSize = (Get-Item $img.FullName).Length
        $savedBytes = $originalSize - $newSize
        $savedMB = [math]::Round($savedBytes/1MB, 2)
        $percentage = [math]::Round(($savedBytes / $originalSize) * 100, 1)
        
        if ($savedBytes -gt 0) {
            Write-Host "  ✓ Saved: ${savedMB}MB (${percentage}%)" -ForegroundColor Green
            $totalSavings += $savedBytes
            $optimizedCount++
            # Remove backup
            Remove-Item $backupPath
        } else {
            Write-Host "  - No improvement" -ForegroundColor Gray
            # Restore from backup
            Move-Item $backupPath $img.FullName -Force
        }
    }
    catch {
        Write-Host "  ✗ Error optimizing $($img.Name): $($_.Exception.Message)" -ForegroundColor Red
        # Restore from backup if exists
        if (Test-Path $backupPath) {
            Move-Item $backupPath $img.FullName -Force
        }
    }
}

Write-Host ""
Write-Host "=== Optimization Complete ===" -ForegroundColor Green
Write-Host "Images optimized: $optimizedCount" -ForegroundColor White
Write-Host "Total space saved: $([math]::Round($totalSavings/1MB, 2))MB" -ForegroundColor White
Write-Host ""
Write-Host "Next steps for further optimization:" -ForegroundColor Cyan
Write-Host "1. Consider converting large PNGs to WebP format" -ForegroundColor White
Write-Host "2. Use Next.js Image component for automatic optimization" -ForegroundColor White
Write-Host "3. Enable WebP serving in next.config.js (already configured)" -ForegroundColor White
Write-Host ""