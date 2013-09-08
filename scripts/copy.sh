#!/bin/bash

BASE="/home/kevin/dev"

cd "$BASE/LavaCharts"

git checkout gh-pages

cd "$BASE/LavaChartsJekyll/_site"

if [[ `git branch | grep '*' | awk {'print $2'}` == "ghp-staging" ]]
then
	rsync -a --progress ./* "$BASE/LavaCharts/"

	cd "$BASE/LavaCharts"

	git add .
	git commit -m "$1"
else
	echo "Branch Test Failed"
fi
