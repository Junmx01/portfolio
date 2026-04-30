---
title: automatic employee data synchronization
description: VBA tool that removes manual review across multiple Excel files, consolidating data in seconds while protecting critical fields
date: 2026-01-12
tags: [vba, excel, data sync, conditional protection, automation]
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
result: "~8h saved per month, manual copy errors eliminated"
---

<video controls muted playsinline preload="metadata" poster="/content/images/projects/macro-1.jpg">
  <source src="/content/images/projects/Excel.mp4" type="video/mp4" />
</video>

# Background

The HR owner had to manually update the master sheet by comparing several Excel files.
The process took between 1 and 2 hours, required constant attention, and was prone to copy errors.

On top of that, some critical fields had already been manually validated and could not be overwritten.
That made the task slow, repetitive, and risky.

# Solution

A VBA macro was developed with two main buttons:

- the first automatically scans the source files and pushes the data into the master sheet
- the second runs an expiration check to flag contracts that are close to their deadline

Fields marked in red remain protected and are never overwritten, preserving data that has already been manually verified.
This made it possible to automate the update while still keeping control over sensitive information.

# Results

- update time: from 1-2 hours to under 30 seconds
- estimated monthly time saved: about 8 hours
- manual copy errors: eliminated
- automatic alerts for contracts nearing expiration
