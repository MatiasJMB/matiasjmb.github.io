---
titulo: "Maintenance with QR"
resumen: "Machine records with QR codes, history and maintenance tasks in the field."
tipo: "cliente"
cliente: "Confidential client"
rol: "Full stack developer"
periodo: "Oct 2026"
anio: 2026
stack: ["Node.js", "Express 5", "MySQL", "React", "Vite", "TypeScript", "Tailwind CSS"]
filtros: [node, mysql, react]
imagen: "/capturas/mantencion-qr.webp"
repo: null
demo: null
privado: true
orden: 3
---

## Problem

A restaurant needs to record maintenance on its machines in the field and keep each machine's history at hand. The technician should be able to see a machine's record and log the work on the spot.

## Solution

- I built machine registration with a required photo, which generates a unique QR code.
- In the field, the technician scans the code from a tablet and sees the record and its history.
- I included maintenance logging and a task module with statuses, priority and a log.
- I defined roles per location: manager, technician and location manager.
- I built the application with Express 5, MySQL, React, Vite, TypeScript and Tailwind CSS.

## Outcome

The application is in production, on cPanel hosting.
