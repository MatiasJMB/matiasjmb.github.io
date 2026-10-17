---
titulo: "Grade book"
resumen: "School grading app with the Chilean scale, unit planning and automatic backups."
tipo: "cliente"
cliente: "Confidential client"
rol: "Full stack developer"
periodo: "Oct 2026"
anio: 2026
stack: ["Node.js", "Express 5", "SQLite", "React", "Vite", "TypeScript", "Tailwind CSS"]
filtros: [node, react]
imagen: "/capturas/libro-de-notas.png"
repo: null
demo: null
privado: true
orden: 4
---

## Problem

A teacher needs to record grades on the Chilean scale from 1.0 to 7.0, plan their units and export their data. The application has to run on the teacher's own computer, without depending on an external server.

## Solution

- I built grading on the Chilean 1.0 to 7.0 scale, with semesters, block timetables, unit planning and notes.
- I added export to Excel and .ics, and an Excel importer.
- I set up automatic backups with retention.
- I built the API with Express 5 and embedded SQLite (node:sqlite), and the interface with React, Vite, TypeScript and Tailwind CSS.

## Outcome

The application has 110 automated tests. It runs on the teacher's PC and is reached through a tunnel.
