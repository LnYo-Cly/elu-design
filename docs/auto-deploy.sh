pnpm run docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto deploy"

git push -f git@github.com:LnYo-Cly/LnYo-Cly.github.io.git master:master
