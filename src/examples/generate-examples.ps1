# 创建目标目录
$targetDir = "G:\rap\public\examples"
New-Item -ItemType Directory -Force -Path $targetDir

# 使用PowerShell生成一些示例图片
for ($i = 1; $i -le 16; $i++) {
    $fileName = "example-$i.jpg"
    $outputPath = Join-Path $targetDir $fileName
    
    # 创建一个简单的图片文件
    $content = "Example Image $i"
    $content | Out-File -FilePath $outputPath -Encoding UTF8
    
    Write-Host "Created $fileName"
}

Write-Host "Example images generation completed!" 