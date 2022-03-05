<h1>apollo</h1>

Apollo is a client-side React app that lets users view music album reviews and post their own.

<hb></hb>

To run the app:

```[bash]
# clone this repository
$ git clone https://github.com/kaylynphan/apollo.git
# cd into the repository's root directory and install required packages
$ npm install react-router-dom
$ npm install react-icons
$ npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
$ npm install -g browserify
$ npm start
```

clone remote main
```[bash]
$ git clone https://github.com/kaylynphan/apollo.git
```
make new branch
```[bash]
$ git checkout -b BRANCH-NAME
```
switch branches, if necessary
```[bash]
$ git switch BRANCH-NAME
# As a rule of thumb, always work in a separate branch and never push directly into main.
```
preview edits
```[bash]
$ cat FILE
```
view version status and git tracking
```[bash]
$ git ls-files 		# view files tracked by git
$ git status 		# see current working branch and tracked changes
$ git log 		# see commit history
```
stage files for commit
```[bash]
$ git add FILE-NAME
$ git commit -m DESCRIPTION
```
pull new changes from main
```[bash]
$ git pull origin main
# sometimes auto-merging is possible. Sometimes, you will have to do manual conflict resolution.
# make sure you always make a commit before attempting to pull/merge. That way, your changes won't be lost.
```
made a mistake?
```[bash]
$ git reset FILENAME	# this will reset the file to its state from the last commit
# if you accidentally staged a file for a commit and want to remove it, use git reset
```
stage pull request
```[bash]
$ git push origin BRANCH-NAME
```
<h3>Your changes will appear on a duplicate of your working branch on Github. To merge onto main, open a pull request.</h3>
