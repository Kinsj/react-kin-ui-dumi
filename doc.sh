yarn docs:build &&
git checkout gh-page &&
cp -rf docs-dist/* . &&
git add . &&
git commit -m "doc upadte" &&
git push origin gh-page &&
git checkout -
