# commitlint 提交规范

## 提交格式

```txt
git commit -m <type>[optional scope]: <description> //注意冒号后面有空格
- type：提交的改动类型（如新增、修改、更新等）
- optional scope：标识此次提交主要涉及到代码中哪个模块
- description：一句话描述此次提交的主要内容
```

## 常用类型

| type     | 说明                       |
| -------- | -------------------------- |
| feat     | 新增功能                   |
| fix      | 修复bug                    |
| docs     | 文档更新                   |
| chore    | 构建工具或者辅助性工具变动 |
| test     | 新增测试                   |
| refactor | 重构代码                   |
| style    | 不影响程序的修改           |

```bash
git commit -m 'feat: add button component'
git commit -m 'fix(button): fix button bug'
```
