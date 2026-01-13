# Git Repository Reconfiguration Guide

## Overview
This guide walks you through removing the existing git repository and setting up a new one with a different remote origin.

## Steps

### 1. Remove the Existing Git Folder
```bash
rm -rf .git
```
This command removes the entire `.git` directory, which contains all the version control history and configuration.

**Warning:** This action is irreversible. All git history will be lost.

### 2. Initialize a New Git Repository
```bash
git init
```
Creates a new `.git` directory in your project folder.

### 3. Add All Files to Staging
```bash
git add .
```
Since this is an existing project with multiple files, use `git add .` to stage all files.
Alternatively, if you only want to add specific files: `git add README.md`

### 4. Create the Initial Commit
```bash
git commit -m "first commit"
```
Creates the first commit in your new repository.

### 5. Rename Branch to Main
```bash
git branch -M main
```
Ensures your default branch is named `main`.

### 6. Add the New Remote Origin
```bash
git remote add origin https://github.com/kgmanojranga/portfolio-manojranga.git
```
Configures the remote repository URL.

### 7. Push to the New Remote
```bash
git push -u origin main
```
Pushes your code to the new remote repository and sets up tracking.

## Complete Command Sequence
```bash
rm -rf .git
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kgmanojranga/portfolio-manojranga.git
git push -u origin main
```

## Important Notes
- Make sure you have created the new repository on GitHub before pushing
- The repository at `https://github.com/kgmanojranga/portfolio-manojranga.git` should be empty or you may encounter push conflicts
- Consider backing up your code before removing the `.git` folder if you need to preserve any history
