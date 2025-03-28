# 创建目标目录
$targetDir = "G:\rap\public\examples"
New-Item -ItemType Directory -Force -Path $targetDir

# 示例图片URL列表
$imageUrls = @(
    "https://raphael.app/examples/example-1.jpg",
    "https://raphael.app/examples/example-2.jpg",
    "https://raphael.app/examples/example-3.jpg",
    "https://raphael.app/examples/example-4.jpg",
    "https://raphael.app/examples/example-5.jpg",
    "https://raphael.app/examples/example-6.jpg",
    "https://raphael.app/examples/example-7.jpg",
    "https://raphael.app/examples/example-8.jpg",
    "https://raphael.app/examples/example-9.jpg",
    "https://raphael.app/examples/example-10.jpg",
    "https://raphael.app/examples/example-11.jpg",
    "https://raphael.app/examples/example-12.jpg",
    "https://raphael.app/examples/example-13.jpg",
    "https://raphael.app/examples/example-14.jpg",
    "https://raphael.app/examples/example-15.jpg",
    "https://raphael.app/examples/example-16.jpg"
)

# 下载图片
foreach ($url in $imageUrls) {
    $fileName = $url.Split("/")[-1]
    $outputPath = Join-Path $targetDir $fileName
    Write-Host "Downloading $fileName..."
    Invoke-WebRequest -Uri $url -OutFile $outputPath
}

Write-Host "Download completed!" 