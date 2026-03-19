Compress-Archive -Path dist\* -DestinationPath dist.zip -Force
aws amplify create-deployment --app-id d1vy9a96t3mri3 --branch-name main --no-cli-pager > deployment_info.json
$json = Get-Content -Raw -Path deployment_info.json | ConvertFrom-Json
$url = $json.zipUploadUrl
$jobId = $json.jobId
curl.exe -H "Content-Type: application/zip" --upload-file dist.zip $url
aws amplify start-deployment --app-id d1vy9a96t3mri3 --branch-name main --job-id $jobId --no-cli-pager
