---
titulo: "Ahora Pan"
resumen: "SaaS para panaderías con pedidos por WhatsApp y panel web en tiempo real."
tipo: "propio"
cliente: "Proyecto propio"
rol: "Desarrollador full stack"
periodo: "2026"
anio: 2026
stack: ["Node.js", "Express", "TypeScript", "React", "Vite", "Tailwind CSS", "Supabase", "Baileys"]
filtros: [node, react, supabase]
imagen: "/capturas/ahora-pan.webp"
repo: "https://github.com/MatiasJMB/ahora-pan"
demo: null
privado: false
orden: 7
galeria:
  - src: /capturas/galeria/pan-alerta.webp
    ancho: 1600
    alto: 1000
    pie: "Aviso de nuevo pedido en el panel"
  - src: /capturas/galeria/pan-pedido.webp
    ancho: 1600
    alto: 1000
    pie: "Pedido en preparación, con su código de retiro"
  - src: /capturas/galeria/pan-confirmar.webp
    ancho: 1600
    alto: 1000
    pie: "Confirmación al marcar un pedido como listo"
---

## Problema

Las panaderías reciben pedidos por distintos canales y necesitan seguir cada uno desde el catálogo hasta el retiro. Los productos por kilo y los de unidad se manejan de forma distinta, y eso complica el seguimiento.

## Solución

- Construí un bot de WhatsApp con Baileys para recibir pedidos.
- Desarrollé un panel web en tiempo real para seguir los pedidos.
- Implementé catálogo por kilo o por unidad, código de retiro y estados del pedido.
- Incluí soporte para varias sucursales.
- Desarrollé el backend con Node.js, Express y TypeScript, y la interfaz con React, Vite y Tailwind CSS.
- Usé Supabase para PostgreSQL, autenticación, Realtime y RLS.

## Resultado

Funciona de punta a punta: pedido por WhatsApp, aviso en el panel en tiempo real y retiro con código. El código es público.
