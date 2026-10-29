---
titulo: "Web auditor"
resumen: "Defensive Python CLI for authorized web audits, with JSON and HTML reports."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "2026"
anio: 2026
stack: ["Python", "JSON", "HTML"]
filtros: [python]
imagen: "/capturas/auditor.webp"
repo: "https://github.com/MatiasJMB/auditor"
demo: null
privado: false
orden: 10
---

## Problem

A web security review needs repeatable steps, a scope agreed in advance and a report that someone else can read and check.

## Solution

- I built a Python CLI that uses only the standard library.
- It requires an authorized scope before any audit runs.
- It generates reports in JSON and HTML.
- It detects cloaking by User-Agent, meaning sites that serve different content depending on the browser that visits them.

## Outcome

I used it to document a phishing site impersonating a courier company: it detected that the site served different content depending on the device.
