# Set the current date in the desired format
$currentDate = Get-Date -Format "yyyy-MM-dd"

# Run yarn deploy
Write-Host "running yarn deploy"
yarn deploy

# Run git add src
Write-Host "staging src files"
git add src

# Run git commit with a message containing the current date and update note
$commitMessage = "roadmap update $currentDate"
Write-Host "committing staged files"
git commit -m "$commitMessage"

# Run git push to origin main
Write-Host "pushing to main..."
git push origin main

Write-Host "Script execution completed!"
