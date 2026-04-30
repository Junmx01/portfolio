---
title: automated absence detection & daily report
description: Python script that queries the Cezanne API daily and automatically identifies employees without a check-in, producing a ready-to-use report
date: 2026-01-10
tags: [python, rest api, cezanne, automation, hr analytics]
featured: true
thumbnail: API.jpg
link: ""
github: ""
published: true
result: "new capability built from scratch, no prior process existed"
---

# Problem

The department did not have a systematic way to detect unreported absences.

Checking every employee's attendance manually would have required reviewing the system one by one, which made routine monitoring unrealistic.

# Solution

A Python script was developed to connect to the Cezanne REST API, extract same-day attendance records, and compare them with the active employee list.

Employees without a check-in are identified automatically and the outcome is presented in a structured report, with no manual review required.

# Results

- a new capability for the department: a process that did not exist before
- daily detection automated with no manual review
- report generated in seconds and ready for immediate action
- foundation for the future attendance-control web app
