```bash
# 添加上游仓库地址  git@github.com:LnYo-Cly/elu-design.git
git remote add upstream [仓库地址]

# 从上游仓库拉去最新的代码(pull = fetch + merge)
git fetch upstream

# fetch之后会多出一个远程分支 upstream/master
# 将最新的master合并到本地
git merge upstream/master
git push # 更新自己的仓库

# 如果你没有贡献代码，仅仅是想同步最新的代码，可以使用rebase
git rebase upstream/master
git push # 更新自己的仓库
```
