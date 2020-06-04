# loots-webpack

> 记录 webpack 常用配置

## 基础配置：webpack.base.js

- 资源解析
  - 解析 ES6
  - 解析 React
  - 解析 Vue
  - 解析 css
  - 解析 less
  - 解析 sass
  - 解析 图片
  - 解析 字体
- 样式增强
  - css 前缀补齐
  - css px 转 rem
- 目录清理
- 多页面打包
- 命令行信息显示优化
- 错误捕获和处理
- css 提取成一个单独的文件

## 开发配置：webpack.dev.js

- 代码热更新
  - css 热更新
  - js 热更新
- sourcemap

## 生产配置：webpack.prod.js

- 代码压缩
- 文件指纹
- Tree Shaking
- scope Hostiong
- 速度优化
  - 基础包 CDN
- 体积优化
  - 代码分割

## SSR 配置：webpack.ssr.js

- output 的 libraryTarget 设置
- css 解析 ignore