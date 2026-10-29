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
orden: 5
galeria:
  - src: /capturas/galeria/mantencion-maquinas.webp
    ancho: 1600
    alto: 1000
    pie: "Machine list with status and last maintenance"
  - src: /capturas/galeria/mantencion-ficha-tablet.webp
    ancho: 1000
    alto: 1334
    pie: "Machine record with its QR code and history, on a tablet"
  - src: /capturas/galeria/mantencion-tareas.webp
    ancho: 1600
    alto: 1000
    pie: "Open tasks with priority and status"
  - src: /capturas/galeria/mantencion-tarea.webp
    ancho: 1600
    alto: 1000
    pie: "Task detail with actions and log"
  - src: /capturas/galeria/mantencion-celular.webp
    ancho: 780
    alto: 1688
    pie: "Phone home screen with a shortcut to scan"
---

## Problem

A food service location needs to record maintenance on its machines in the field and keep each machine's history at hand. The technician should be able to see a machine's record and log the work on the spot.

## Solution

- I built machine registration with a required photo, which generates a unique QR code.
- In the field, the technician scans the code from a tablet and sees the record and its history.
- I included maintenance logging and a task module with statuses, priority and a log.
- I defined roles per location: person in charge, technician and location manager.
- I built the application with Express 5, MySQL, React, Vite, TypeScript and Tailwind CSS.

## Outcome

The application is in production, on cPanel hosting.
