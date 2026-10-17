---
titulo: "Ahora Pan"
resumen: "SaaS for bakeries with WhatsApp ordering and a real-time web panel."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "2026"
anio: 2026
stack: ["Node.js", "Express", "TypeScript", "React", "Vite", "Tailwind CSS", "Supabase", "Baileys"]
filtros: [node, react, supabase]
imagen: "/capturas/ahora-pan.webp"
repo: "https://github.com/MatiasJMB/ahora-pan"
demo: null
privado: false
orden: 6
---

## Problem

Bakeries receive orders through several channels and need to follow each one from the catalog to pickup. Products sold by weight and by unit are handled differently, which makes tracking harder.

## Solution

- I built a WhatsApp bot with Baileys to receive orders.
- I built a real-time web panel to follow orders.
- I implemented a catalog priced by weight or by unit, pickup codes and order statuses.
- I included support for several branches.
- I built the backend with Node.js, Express and TypeScript, and the interface with React, Vite and Tailwind CSS.
- I used Supabase for PostgreSQL, authentication, Realtime and RLS.

## Outcome

It works end to end: order via WhatsApp, live alert on the dashboard and pickup with a code. The code is public.
