---
title: contract and email workflow automation
description: "three buttons replace the full contract-processing flow: PDF generation, email drafting with attachment, and archive export"
date: 2026-01-11
tags: [vba, excel, outlook automation, pdf generation, workflow]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "per contract: 1–2h → 5–10 seconds, ~6h saved per month"
---

# Problem

Each time a contract was processed, my colleague had to draft the email manually, locate the PDF, attach it, complete the recipients, and save an archive copy in Excel.

With multiple contracts every month, the accumulated time was significant and the process depended on not forgetting any step.

# Solution

A VBA macro was built with three buttons integrated into the contract sheet:

- the first saves the contract sheet as a PDF for internal distribution
- the second opens Outlook with recipients, subject, and predefined body text already filled in, with the PDF attached and ready for review
- the third exports a specific Excel range as a permanent archive PDF

This reduced the workflow to review-and-send instead of manually rebuilding the same process each time.

# Results

- time per contract: from 1-2 hours to 5-10 seconds
- estimated monthly time saved: about 6 hours
- standardized process: same wording and format across all sends
- risk of forgotten steps or missing attachments: eliminated
