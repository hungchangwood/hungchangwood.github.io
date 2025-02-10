# 讀取使用者輸入的資料夾路徑
$folderPath = Read-Host -Prompt "Folder Path"

# 取得資料夾名稱
$folderName = Split-Path -Leaf $folderPath

# 取得資料夾內的檔案名稱
$images = Get-ChildItem -Path $folderPath | Sort-Object Name | ForEach-Object { $_.Name }


# 生成輸出格式
$output = @{
    folder = $folderName
    images = $images
}
$outputStringPart1 = '{ folder: "' + $output.folder + '", images: ['
$outputStringPart2 = (Get-ChildItem -Path $folderPath | ForEach-Object { '"' + $_.Name + '"' }) -join ', '
$outputStringPart3 = '] }'
$outputString = $outputStringPart1 + $outputStringPart2 + $outputStringPart3

# 輸出結果
Write-Output $outputString

# 等待使用者按下任意鍵
Write-Host "Press any key to exit..."
[void][System.Console]::ReadKey($true)