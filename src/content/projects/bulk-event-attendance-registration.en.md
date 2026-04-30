---
title: bulk attendance registration for events
description: combination of Excel, VBA, and Python that automatically uploads event attendance lists to the corporate web portal, reducing hours of manual work to minutes
date: 2026-01-08
tags: [python, vba, excel, web automation, browser automation]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "40-person check-in: 2–3h → 30 minutes, error rate ≈ 0"
---

# Problem

After each event, paper attendance lists were entered manually into the company web portal, field by field and person by person.

With 40 attendees, the process took 2 to 3 hours and name-entry mistakes were common.

# Solution

The paper data is captured once in an Excel file. A VBA script prepares and structures the records, and a Python script opens the portal and fills each attendee sequentially without human intervention.

The workflow scales cleanly: handling 40 or 400 people requires the same effort from the operator.

# Results

- registration time for 40 people: from 2-3 hours to about 30 minutes
- manual entry errors: eliminated
- scalability: execution time no longer depends on the operator's manual input effort
- single data-entry point: the initial Excel file
