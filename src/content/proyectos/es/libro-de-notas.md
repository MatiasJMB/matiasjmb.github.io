---
titulo: "Libro de notas"
resumen: "App de calificaciones escolares con escala chilena, planificación y respaldos automáticos."
tipo: "cliente"
cliente: "Cliente confidencial"
rol: "Desarrollador full stack"
periodo: "oct 2026"
anio: 2026
stack: ["Node.js", "Express 5", "SQLite", "React", "Vite", "TypeScript", "Tailwind CSS"]
filtros: [node, react]
imagen: "/capturas/libro-de-notas.webp"
repo: null
demo: null
privado: true
orden: 6
galeria:
  - src: /capturas/galeria/libro-resumen.webp
    ancho: 1600
    alto: 1000
    pie: "Resumen del curso: promedio, aprobados y estudiantes en riesgo"
  - src: /capturas/galeria/libro-planificacion.webp
    ancho: 1600
    alto: 1000
    pie: "Planificación de unidades con horas disponibles"
  - src: /capturas/galeria/libro-horario.webp
    ancho: 1600
    alto: 1000
    pie: "Horario semanal por bloques"
---

## Problema

Un docente necesita registrar calificaciones con la escala chilena de 1,0 a 7,0, planificar sus unidades y exportar sus datos. La aplicación debe funcionar en su propio computador, sin depender de un servidor externo.

## Solución

- Desarrollé las calificaciones con escala chilena 1,0 a 7,0, semestres, horario por bloques, planificación de unidades y anotaciones.
- Incluí exportación a Excel y .ics, además de un importador de Excel.
- Configuré respaldos automáticos con retención.
- Construí la API con Express 5 y SQLite integrado (node:sqlite), y la interfaz con React, Vite, TypeScript y Tailwind CSS.

## Resultado

La aplicación tiene 110 pruebas automatizadas. Corre en el PC del docente, con acceso por túnel.
