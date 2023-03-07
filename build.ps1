$path = (pwd).Path
$targetDir = "$path\docs"
$sourceDir = "$path\www"
Remove-Item $targetDir -Recurse
cmd.exe /c "static-i18n -o docs -i en -i lv -i ru www"
Copy-Item -Path "$sourceDir\css" -Destination "$targetDir\css" -Recurse
Copy-Item -Path "$sourceDir\js" -Destination "$targetDir\js" -Recurse
Copy-Item -Path "$sourceDir\img" -Destination "$targetDir\img" -Recurse
Copy-Item -Path "$sourceDir\webfonts" -Destination "$targetDir\webfonts" -Recurse