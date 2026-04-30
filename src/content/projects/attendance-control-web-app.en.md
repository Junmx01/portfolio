---
title: attendance control web application
description: local web interface that centralizes absence tracking through the Cezanne API, with deployment potential on the company server for shared team use
date: 2026-01-09
tags: [python, web app, rest api, cezanne, internal tools, deployment]
featured: true
thumbnail: python web.jpg
link: ""
github: ""
published: true
result: "team-wide access, no technical skills needed, ready for server deployment"
---

# Problem

The absence-detection script worked well, but it still required technical execution and was not accessible to the rest of the team.

A solution was needed so anyone in the department could consult attendance data without technical knowledge, while keeping the information available and persistent.

# Solution

A web application was developed to wrap the script logic inside a browser-based interface.

It runs locally for testing and is prepared for deployment on the internal company server. Access is protected through credentials tied to the API so only authorized users can review the data.

# Results

- accessible interface for the whole team, with no need to run scripts
- attendance data available in real time from any internal workstation
- ready for deployment to the corporate server
- API-based access control in place
