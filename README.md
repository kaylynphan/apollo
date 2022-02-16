<h1>apollo</h1>

<h3>clone remote main</h3>
git clone https://github.com/kaylynphan/apollo.git

<h3>make new branch</h3>
	git checkout -b BRANCH-NAME
<h3>switch branches, if necessary</h3>
	git switch BRANCH-NAME

<h3>make edits</h3>

<h3>preview edits</h3>
	cat FILE

<h3>view version status and git tracking</h3>
	<ul> 
    	<li>git ls-files # view files tracked by git</li>
		<li>git status # see current working branch and tracked changes</li>
		<li>git log # see commit history</li>
	</ul>

<h3>stage files for commit</h3>
	git add <filename>
	git commit -m DESCRIPTION

<h3>made a mistake?</h3>
	git reset FILENAME

<h3>stage pull request</h3>
	git push origin BRANCH-NAME

<h3>open pull request on GitHub, compare changes and merge</h3>
