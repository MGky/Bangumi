<img src="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/bangumi.png" width="100%" />

<p align="center">
  <img alt="Version: 3.7.0" src="https://img.shields.io/badge/Version-3.7.0-0366d6" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-33CC12" />
  <img alt="Codacy" src="https://api.codacy.com/project/badge/Grade/473bdb1186484703b4069148730a3c12?isInternal=true" />
  <img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi/badge" />
</p>

---

一个基于`React-Native`的 [Bangumi](https://bgm.tv) 第三方客户端

项目对标 web, 本人并没有原生开发经验, 用于练手 RN, 安卓和 iOS 都做了兼容, 并最大限度保持一致

目前已开发不少于 70 个页面, 几乎涵盖源网站所有页面

Bangumi 是用于管理追番进度（不限于动漫、音乐、日剧、AVG）, 发现和讨论番组的第三方客户端

## Download

[安卓 APK 下载](https://github.com/czy0729/Bangumi/releases) | [酷安市场下载](https://www.coolapk.com/apk/235642)

苹果好难审, 短时间内都没办法通过, 会跟苹果做长久作战.
[TestFlight](https://testflight.apple.com/join/pAaJ0MWU) | [Expo 试用方法](https://github.com/czy0729/Bangumi/blob/master/IOS-TEST.MD)

## Features

[特有功能]

- 大部分资源覆盖到自维护 [CDN](https://github.com/czy0729/Bangumi-Subject), 访问速度+++
- 图片使用 [CDN](https://github.com/czy0729/Bangumi-OSS), 有后处理, 所以有比源网站更好的质量和更小的流量
- [小圣杯](https://bgm.tv/dev/app/1143) (角色交易空气游戏, App 独立设计 UI 和交互)
- 章节播放源 / 漫画源查询
- 资讯聚合

[基本功能]

- 番组进度管理
- 条目详情
- 角色
- 时间线 (用户动态)
- 超展开 (帖吧)
- 个人中心 / 用户空间
- 搜索 / 标签 / 排行榜 / 索引 / 目录 / 每日放送 / 年鉴

## Versions

[CHANGELOG](https://github.com/czy0729/Bangumi/blob/master/CHANGELOG.MD)

## Update

v3.7.0 - 2020/06/27
在 v4 之前希望 UI 能更专业, 所以后续版本会持续改各种不统一的地方

—— 新功能 ——

- [x] [设置][实验性] 片假名终结者，日语外来语上方标注英文原词 (标注位置可能有很大出入，用到了之前申请的免费百度翻译接口，QPS 只有 1，多人同时查询可能会导致不返回结果。因资源消耗大不是所有地方都覆盖。暂时使用百度翻译，效果可能没有谷歌翻译理想，但速度比谷歌快，之后会增加选择翻译引擎选项。)
- [x] [设置][实验性] 可设置更扁平的 UI
- [x] [设置] 可设置屏蔽所有默认头像用户相关信息
- [x] [设置] 现支持恢复所有默认设置

—— 优化 ——

- [x] [设置] UI 和归类优化
- [x] [条目] 现敏感条目会有 UI 标记

—— 修复 ——

- [x] [帖子] 修复滚动条在弹出键盘的时候还能看见的问题
- [x] [空间] 更换新 Tabs 组件, 修复部分机型白屏问题
- [x] Expand 优化

—— 小圣杯助手 v2.4.0 ——

- [x] [我的持仓] 修复了 ICO 进程条等级不对的问题
- [x] 换了圣殿布局的写法, 显示不会砍头

## PowerBy

[[bangumi-subject]](https://github.com/czy0729/Bangumi-Subject) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Subject/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Subject) 条目快照 CDN

[[bangumi-oss]](https://github.com/czy0729/Bangumi-OSS) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-OSS/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-OSS) 热门条目封面和活跃用户头像对象存储 CDN

[[bangumi-rakuen]](https://github.com/czy0729/Bangumi-Rakuen) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Rakuen/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Rakuen) 帖子快照 CDN

[[bangumi-mono]](https://github.com/czy0729/Bangumi-Mono) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Mono/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Mono) 人物快照 CDN

[[bangumi-static]](https://github.com/czy0729/Bangumi-Static) [![](https://data.jsdelivr.com/v1/package/gh/czy0729/Bangumi-Static/badge)](https://www.jsdelivr.com/package/gh/czy0729/Bangumi-Static) 发现数据快照 CDN

[[bangumi-api]](https://github.com/bangumi/api) 官方接口

[[bangumi-onair]](https://github.com/ekibun/bangumi_onair) 单集播放数据源

[[bangumi-data]](https://github.com/bangumi-data/bangumi-data) 番组数据索引

[[tinygrail.com]](https://tinygrail.com) 小圣杯接口

## Preview

单独预览 [日间模式](https://github.com/czy0729/Bangumi/blob/master/web/LIGHT-MODE.MD) | [黑暗模式](https://github.com/czy0729/Bangumi/blob/master/web/DARK-MODE.MD)

#### 基础功能

<img src="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/new/0001.png" width="100%" alt="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/new/0001.png" /><img src="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/new/0002.png" width="100%" alt="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/new/0002.png" />

#### 小圣杯模块

<img src="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/all/t-1.png" width="100%" alt="https://cdn.jsdelivr.net/gh/czy0729/bangumi@master/preview/all/t-1.png" />

(被墙看不见图的可以复制 alt 打开)

## Getting Started

** 下载 **

注意, 某个依赖包在淘宝源里面 404, 要切换为 npm 官方源

```bash
npm config set registry https://registry.npmjs.org
```

国内环境, 首次下载包有可能会异常地慢

```bash
git clone https://github.com/czy0729/Bangumi
cd ./Bangumi
npm install // 不推荐使用yarn, 因为后面会魔改node_modules, 使用yarn会被识别并还原
```

** 前置操作, 否则 App 内图标均为问号 **

自定义 Iconfont, 把 assets/iconfont/ 下的目录 `vector-icons` 和 node_modules/@expo/ 下的目录 `vector-icons` 合并 (注意是合并不是替换, 假如不行, 就手动把文件夹下面的 2 个文件, 找到对应的地方替换, 观察文件修改日期是不是变化了), 原理其实就是用自己的字体文件把原有的 AntDesign 字体文件替换掉, 之后引用 Icon.AntDesign .

** 启动 **

```bash
npm start // [iOS] 之后点击在浏览器打开的Expo Developer Tools, 点击 Run on iOS simulator

// or

react-native run-android // [android] 真机 usb 调试
```

本人一直在 mac 环境下开发, iOS 跑 expo 客户端调试, 安卓跑真机 usb 调试. window 用法不详, 也不清楚到底能不能运行, 可以查阅 [Expo](https://github.com/expo/expo) 官方文档. 可以选择同一局域网真机扫码调试, 需先下载 Expo App
