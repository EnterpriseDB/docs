# Updating links from branch renames

This utility will examine the current branch and a base branch (origin/develop 
by default), updating links for each renamed file. 

Currently this script will examine *all* renamed files and potentially touch *every* 
MDX file; it's entirely on you to keep changes in your branches reasonably scoped.
