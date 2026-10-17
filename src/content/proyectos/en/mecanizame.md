---
titulo: "Mecanízame"
resumen: "Multi-workshop CRM for diesel repair shops, with service history by plate."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "Jun 2026 – present"
anio: 2026
stack: ["React 19", "TypeScript", "Vite", "React Router 7", "Tailwind CSS 4", "Supabase", "PostgreSQL"]
filtros: [react, supabase]
imagen: "/capturas/mecanizame.png"
repo: "https://github.com/MatiasJMB/mecanizame"
demo: null
privado: false
orden: 3
---

## Problem

A repair shop needs to keep its clients, vehicles and work orders in one system. Each workshop should see only its own data, and a vehicle's history should be easy to find by its plate.

## Solution

- I built the clients module, vehicles with service history by plate, a service catalog and work orders with a calendar.
- I added finances and a super-admin panel with workshop approval and invitations.
- I isolated each workshop's data with Row Level Security and numbered orders with a transactional sequence.
- I built the interface with React 19, TypeScript, Vite, React Router 7 and Tailwind CSS 4, on top of Supabase (PostgreSQL, Auth and RPC).

## Outcome

The project includes 12 SQL migrations. I am moving it from Supabase to Node.js and MySQL to reduce costs. The repository is public.
