---
title: Sigma 入职信息自动填写
description: Python 脚本自动把新员工资料录入 Sigma，并借助 SQL 数据库存储大学与学历信息
date: 2026-01-07
tags: [python, sqlite, sql, 网页自动化, 数据库, 入职]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "每份录入从 2–3h 压缩至 30 分钟"
---

# 背景问题

新员工入职时，已经存在于 Excel 中的数据还需要再次手动录入 Sigma。

与此同时，学历字段还要求人工查询各大学及课程信息，进一步拉长了 onboarding 时间。

# 解决方案

我开发了一个 Python 脚本，从主 Excel 文件读取员工资料，并通过浏览器自动录入 Sigma。

针对学历字段，我另外建立了一套 SQLite 数据库，用结构化方式保存大学和学位项目信息，方便后续快速查询与重复利用。

# 结果

- 重复录入：消除
- 单份录入时间：从 2–3 小时缩短至约 30 分钟
- 大学数据库可重复利用且可持续扩展
- onboarding 流程更快、更一致
