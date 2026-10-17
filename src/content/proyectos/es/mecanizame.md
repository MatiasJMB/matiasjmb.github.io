---
titulo: "Mecanízame"
resumen: "CRM multi-taller para talleres mecánicos diésel, con historial por patente."
tipo: "propio"
cliente: "Proyecto propio"
rol: "Desarrollador full stack"
periodo: "jun 2026 – presente"
anio: 2026
stack: ["React 19", "TypeScript", "Vite", "React Router 7", "Tailwind CSS 4", "Supabase", "PostgreSQL"]
filtros: [react, supabase]
imagen: "/capturas/mecanizame.webp"
repo: "https://github.com/MatiasJMB/mecanizame"
demo: null
privado: false
orden: 5
---

## Problema

Un taller mecánico necesita llevar clientes, vehículos y órdenes de trabajo en un solo sistema. Cada taller debe ver solo sus datos, y el historial de un vehículo debe encontrarse por su patente.

## Solución

- Desarrollé los módulos de clientes, vehículos con historial por patente, catálogo de servicios y órdenes de trabajo con calendario.
- Incluí finanzas y un panel super-admin con aprobación de talleres e invitaciones.
- Aislé los datos de cada taller con Row Level Security y numeré las órdenes con un correlativo transaccional.
- Construí la interfaz con React 19, TypeScript, Vite, React Router 7 y Tailwind CSS 4, sobre Supabase (PostgreSQL, Auth y RPC).

## Resultado

El proyecto incluye 12 migraciones SQL. Estoy migrando de Supabase a Node.js y MySQL para bajar costos. El repositorio es público.
