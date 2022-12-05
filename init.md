#### 安装 commitizen 规范 Git 提交说明

1.安装commitizen作为开发依赖

npm install -D  commitizen -S

2.安装cz-customizable作为开发依赖

npm install -D  cz-customizable -S

3.配置commitizen使用cz-customizable作为插件，在package.json中添加下面节点

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

4.项目根目录下创建.cz-config.js文件（cz-customizable插件会优先在根目录中查找名为.cz-config.js或者.config/cz-config.js的文件作为规范的模板）

