# Ant Admin

[![OSSLab](https://img.shields.io/badge/OSSLab-开源软件实验室-blue.svg?style=flat)](http://osslab.online)
[![travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

## 写在前面

Lanting Admin 基于 [Ant Design Pro](https://github.com/ant-design/ant-design-pro/) 项目构建，并持续向下延伸，旨在探索 React 前端开发最佳实践。

Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 Ant Design 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。

![screenshot](https://github.com/Vultur/ant-admin/raw/master/screenshot.png)

## 开始使用

```bash
$ git clone https://github.com/Vultur/ant-admin.git
$ cd ant-admin
$ npm install
$ npm start       # 访问 http://localhost:8000
```

如果你想使用官方示例，请安装 [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli) 工具。

```bash
$ npm install ant-design-pro-cli -g
$ mkdir pro-demo && cd pro-demo
$ pro new
```

- 官方首页：http://pro.ant.design
- 使用文档：http://pro.ant.design/docs/getting-started-cn
- 常见问题：http://pro.ant.design/docs/faq

## 特色功能

- :gem: **优雅美观**：基于 [Ant Design](http://ant.design/) 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 React/dva/antd 等前端前沿技术开发
- :iphone: **响应式**：针对不同屏幕大小设计
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :globe_with_meridians: **国际化**：内建业界通用的国际化方案
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码
- :1234: **Mock 数据**：实用的本地数据调试方案
- :white_check_mark: **UI 测试**：自动化测试保障前端产品质量

## 目录结构

```
- 仪表盘
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果页
  - 成功提示
  - 失败提示
- 错误页
  - 403 页面
  - 404 页面
  - 500 页面
- 用户账户
  - 登录页
  - 注册页
  - 注册成功
```

更多信息请参考 [使用文档](http://pro.ant.design/docs/getting-started)。

## 浏览器兼容

现代浏览器及 IE11。

## 开源协议

[MIT License](https://opensource.org/licenses/MIT)

