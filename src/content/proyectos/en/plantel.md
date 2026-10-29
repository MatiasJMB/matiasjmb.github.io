---
titulo: "Plantel"
resumen: "Attendance and people management: mobile clock-in with location, a live panel and reports."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "2026 · Beta"
anio: 2026
stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Leaflet"]
filtros: [react]
imagen: "/capturas/plantel.webp"
repo: null
demo: null
privado: true
orden: 3
galeria:
  - src: /capturas/galeria/plantel-reportes.webp
    ancho: 1600
    alto: 900
    pie: "Monthly report of lateness, absences and overtime"
  - src: /capturas/galeria/plantel-turnos.webp
    ancho: 1600
    alto: 900
    pie: "Shifts for office, courses and field work"
  - src: /capturas/galeria/plantel-ficha.webp
    ancho: 1600
    alto: 900
    pie: "Person record with employment type"
  - src: /capturas/galeria/plantel-solicitudes.webp
    ancho: 1600
    alto: 900
    pie: "Leave and vacation requests"
  - src: /capturas/galeria/plantel-marcar.webp
    ancho: 780
    alto: 1688
    pie: "Clock-in from a phone, with location"
---

## Problem

Companies whose staff are spread across offices, branches and job sites, such as training companies with trainers in the field, do not know in time who has arrived, who is late or how many overtime hours are worked. They track it by hand in spreadsheets.

## Solution

- I built clock-in and clock-out from a phone, with the location shown on a map and a receipt with a code.
- I built a live panel showing who is present, late, not yet clocked in, and staff in the field by location.
- I produced monthly reports of lateness, absences and overtime, exportable to CSV and PDF.
- I set up shifts for office work, courses and 7x7 field rotations, in weekly and monthly views.
- I created a record for each person with their employment type (permanent, fee-based or per course), and leave and vacation requests with approval.
- The interface has light and dark modes and is built with React, TypeScript, Vite, Tailwind CSS and Leaflet.

## Outcome

It is in Beta: clock-in, the live panel, reports, shifts and requests already work. The next stage adds its own backend and payroll with Chilean payslips.
