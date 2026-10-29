---
titulo: "Fleet platform"
resumen: "Custom web system for a truck fleet service company."
tipo: "cliente"
cliente: "Confidential client"
rol: "Full stack developer"
periodo: "Aug 2026 – present"
anio: 2026
stack: ["Node.js", "Express 5", "MySQL", "React", "TypeScript", "Python", "pandas"]
filtros: [node, mysql, react, python]
imagen: "/capturas/plataforma-flota.webp"
repo: null
demo: null
privado: true
orden: 4
galeria:
  - src: /capturas/galeria/flota-ordenes.webp
    ancho: 1000
    alto: 1334
    pie: "Order history with search by plate"
  - src: /capturas/galeria/flota-detalle.webp
    ancho: 1000
    alto: 1334
    pie: "Work order detail"
---

## Problem

A truck fleet service company ran its work on a desktop system (FileMaker). It needed to keep its order history and move to a web application with role-based access that works on tablets.

## Solution

- I supported the existing desktop system and gathered the requirements: 24 modules in 9 blocks.
- I extracted the historical data from the previous system and cleaned it with Python (pandas).
- I rebuilt the platform as custom software with Node.js (Express 5), MySQL and React with TypeScript.
- I included role-based login, support for several workshops, support tickets, a tablet-style home screen and a history section with the migrated data.

## Outcome

The history of 2,156 orders and 10,861 items was migrated to the new system.
