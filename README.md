# vuecli5_vue2_ts_eslint_prettier

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Project Initialization Process

#### 安装 commitizen 规范 Git 提交说明

1. 安装 commitizen 作为开发依赖

npm install -D commitizen -S

2. 安装 cz-customizable 作为开发依赖

npm install -D cz-customizable -S

3. 配置 commitizen 使用 cz-customizable 作为插件，在 package.json 中添加下面节点

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

4. 项目根目录下创建.cz-config.js 文件（cz-customizable 插件会优先在根目录中查找名为.cz-config.js 或者.config/cz-config.js 的文件作为规范的模板）

5. 可以执行 git cz 来进行 commit

#### commitlint 检查提交消息是否符合常规提交格式

1. 安装 npm install -D -S @commitlint/cli @commitlint/config-conventional

2. 执行命令配置

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

这里有坑：如果是用 powershell 文件会用 utf-16le 编码导致之后运行报错，所以这里这个 commitlint.config.js 需手动创建，再将内容复制进去
```

3. 该处用的提交格式规范是 Conventional Commits，预先配置 commitizen 创建的.cz-config.js 要按照前者的规范来配置

#### 安装使用 Husky ，提交时触发 commitlint 中的校验

1. Husky 是一款 Git Hooks 工具，可以在执行特定的 git 命令时（如: git commit, git push）触发对应的脚本

2. 安装 npm install husky --save-dev

3. 激活钩子 npx husky install

4. 设置安装依赖时自动激活钩子脚本 npm set-script prepare "husky install"

5. 添加钩子

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

6. commit 都会触发 commitlint 中指令来校验提交信息的格式

#### 使用 Husky，commit 前触发 eslint 规则校验（不建议，此方式 eslint 会检测项目所有文件，项目大时用的时间会过长）

1. 添加钩子

```bash
npx husky add .husky/pre-commit "npm run lint"
```

2. 如果有错误，git hooks 会在提交前运行 ESLint 并抛出错误，并阻止 git commit
坑：要取消 lint 校验后自动修复，否则 lint 校验后自动修复成功后能 commit 成功

#### 使用 lint-staged 检验与格式化暂存区文件

作用：lint-staged 优点是可以只处理暂存区的文件，还可以通过调用其他工具来对文件进行格式化处理

1. 安装 lint-staged 开发依赖 npm i -D lint-staged -S

2. 添加钩子

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

3. 创建 lint-staged 配置文件 lint-staged.config.js，写入配置
```javascript
module.exports = {
  '*.{css,scss,vue,js,ts,json}': 'prettier --write', // 使用prettier格式化并加入暂存
  'src/**/*.{js,ts,vue}': "eslint --fix" // 使用eslint检验修复并加入暂存
}

```
