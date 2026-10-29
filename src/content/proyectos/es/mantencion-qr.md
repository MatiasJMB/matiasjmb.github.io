---
titulo: "Mantención con QR"
resumen: "Fichas de máquinas con código QR, historial y tareas de mantención en terreno."
tipo: "cliente"
cliente: "Cliente confidencial"
rol: "Desarrollador full stack"
periodo: "oct 2026"
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
    pie: "Listado de máquinas con su estado y última mantención"
  - src: /capturas/galeria/mantencion-ficha-tablet.webp
    ancho: 1000
    alto: 1334
    pie: "Ficha de una máquina con su QR e historial, en tablet"
  - src: /capturas/galeria/mantencion-tareas.webp
    ancho: 1600
    alto: 1000
    pie: "Tareas abiertas con prioridad y estado"
  - src: /capturas/galeria/mantencion-tarea.webp
    ancho: 1600
    alto: 1000
    pie: "Detalle de una tarea con sus acciones y bitácora"
  - src: /capturas/galeria/mantencion-celular.webp
    ancho: 780
    alto: 1688
    pie: "Inicio en el celular, con acceso directo para escanear"
---

## Problema

Un local gastronómico necesita registrar las mantenciones de sus máquinas en terreno y tener a mano el historial de cada equipo. El técnico debe poder ver la ficha de una máquina y registrar lo que hizo en el mismo lugar.

## Solución

- Desarrollé el alta de máquinas con foto obligatoria, que genera un código QR único.
- En terreno, el técnico escanea el código desde una tablet y ve la ficha y el historial.
- Incluí el registro de mantenciones y un módulo de tareas con estados, prioridad y bitácora.
- Definí roles por local: encargado, técnico y gerente de local.
- Construí la aplicación con Express 5, MySQL, React, Vite, TypeScript y Tailwind CSS.

## Resultado

La aplicación está en producción, en hosting cPanel.
