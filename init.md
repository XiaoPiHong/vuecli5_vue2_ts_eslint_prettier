#### 安装 commitizen 规范 Git 提交说明

1.安装 commitizen 作为开发依赖

npm install -D commitizen -S

2.安装 cz-customizable 作为开发依赖

npm install -D cz-customizable -S

3.配置 commitizen 使用 cz-customizable 作为插件，在 package.json 中添加下面节点

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

4.项目根目录下创建.cz-config.js 文件（cz-customizable 插件会优先在根目录中查找名为.cz-config.js 或者.config/cz-config.js 的文件作为规范的模板）

5.可以执行 git cz 来进行 commit
