---
title: Sigma onboarding autofill
description: Python script that automatically enters new employee data into Sigma, backed by an SQL database with university-degree information
date: 2026-01-07
tags: [python, sqlite, sql, web automation, database, onboarding]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "double entry eliminated, ~3h saved per month"
---

# Problem

When onboarding a new employee, the same details already stored in Excel had to be entered again into Sigma.

Degree-related fields also required manually searching university information, which made onboarding slower than necessary.

# Solution

A Python script was created to read employee data from the master Excel file and enter it into Sigma through the browser.

For degree fields, a reusable SQLite database stores structured information about universities and academic programs, making lookups fast and consistent for each new hire.

# Results

- duplicate data entry: eliminated
- estimated monthly time saved: about 3 hours
- reusable and expandable university database
- faster and more consistent onboarding flow
