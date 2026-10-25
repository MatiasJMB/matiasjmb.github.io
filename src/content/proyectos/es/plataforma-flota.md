---
titulo: "Plataforma para flota"
resumen: "Sistema web a medida para un servicio técnico de flota de camiones."
tipo: "cliente"
cliente: "Cliente confidencial"
rol: "Desarrollador full stack"
periodo: "ago 2026 – presente"
anio: 2026
stack: ["Node.js", "Express 5", "MySQL", "React", "TypeScript", "Python", "pandas"]
filtros: [node, mysql, react, python]
imagen: "/capturas/plataforma-flota.webp"
repo: null
demo: null
privado: true
orden: 3
---

## Problema

Una empresa de servicio técnico de flota de camiones trabajaba con un sistema de escritorio (FileMaker). Necesitaba conservar su historial de órdenes y pasar a una aplicación web con acceso por roles y uso en tablet.

## Solución

- Di soporte al sistema de escritorio existente y levanté los requerimientos: 24 módulos en 9 bloques.
- Extraje los datos históricos del sistema anterior y los limpié con Python (pandas).
- Reconstruí la plataforma a medida con Node.js (Express 5), MySQL y React con TypeScript.
- Incluí login con roles, soporte para varios talleres, tickets de soporte, inicio tipo app para tablet y una sección de historial con los datos migrados.

## Resultado

El historial de 2.156 órdenes y 10.861 ítems quedó migrado al sistema nuevo.
