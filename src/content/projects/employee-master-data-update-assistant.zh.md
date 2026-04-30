---
title: 员工数据自动同步
description: 用 VBA 工具替代多个 Excel 文件之间的人工核对，在数秒内完成数据汇总，并保护关键字段不被覆盖
date: 2026-01-12
tags: [vba, excel, 数据同步, 条件保护, 自动化]
featured: true
thumbnail: macro-1.jpg
images:
  - macro-2.jpg
  - macro-3.jpg
  - macro-4.jpg
  - macro-5.jpg
link: ""
github: ""
published: true
result: "每月节省约 8h，手动录入错误消除"
---

<video controls muted playsinline preload="metadata" poster="/content/images/projects/macro-1.jpg">
  <source src="/content/images/projects/Excel.mp4" type="video/mp4" />
</video>

# 背景问题

HR 负责人需要对比多个 Excel 文件，再手动更新员工主表。
整个过程通常要花 1 到 2 小时，不仅耗时，而且需要持续集中注意力，稍不小心就会出现复制错误。

另外，一些关键字段已经经过人工确认，不能被后续更新覆盖。
这让整个流程既重复、又脆弱，还很依赖人工细致核对。

# 解决方案

我开发了一套 VBA 宏工具，核心由两个按钮组成：

- 第一个按钮会自动遍历源文件，并把数据同步回主表
- 第二个按钮会执行到期检查，自动提示即将到期的合同

被标红的字段会被锁定，永远不会被自动覆盖，从而保留已经人工校验过的关键信息。
这样既能实现自动化提速，又不会丢掉对敏感数据的控制。

# 结果

- 单次更新时间：从 1 到 2 小时缩短到 30 秒以内
- 预计每月节省时间：约 8 小时
- 手工复制错误：基本消除
- 合同到期提醒：自动触发
