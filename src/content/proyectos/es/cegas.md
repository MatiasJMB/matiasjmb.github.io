---
titulo: "Sistema administrativo CEGAS"
resumen: "Sistema web para inspecciones, certificados PDF y pagos de un organismo de gas."
tipo: "cliente"
cliente: "CEGAS"
rol: "Desarrollador full stack"
periodo: "ago 2026 – presente"
anio: 2026
stack: ["Node.js", "Express", "EJS", "MySQL", "bcrypt", "reCAPTCHA v3", "cPanel"]
filtros: [node, mysql]
imagen: "/capturas/cegas.webp"
repo: null
demo: "https://cegas.cl"
privado: true
orden: 1
galeria:
  - src: /capturas/galeria/cegas-inspecciones.webp
    ancho: 1600
    alto: 1000
    pie: "Registro de inspecciones con su sello de aprobación"
  - src: /capturas/galeria/cegas-detalle.webp
    ancho: 1600
    alto: 1000
    pie: "Detalle de una inspección con resultado y certificado"
  - src: /capturas/galeria/cegas-certificados.webp
    ancho: 1600
    alto: 1000
    pie: "Certificados emitidos con folio correlativo"
  - src: /capturas/galeria/cegas-celular.webp
    ancho: 780
    alto: 1688
    pie: "Ficha de una inspección en el celular"
---

## Problema

CEGAS es un organismo de inspección y certificación de instalaciones de gas. Necesitaba llevar en un solo lugar sus clientes, inspecciones, presupuestos y certificados, y proteger de spam los formularios de su sitio web.

## Solución

- Desarrollé el sistema administrativo web en Node.js 20, Express, EJS y MySQL: clientes, instalaciones, inspecciones con semáforo de estado, presupuestos, pagos y calendario.
- Generé certificados PDF con folio correlativo y alertas de vencimiento a 24 meses.
- Implementé roles, super-admin, tickets de soporte, registro fotográfico y bitácora de cambios.
- Apliqué seguridad con CSRF, helmet y CSP, bcrypt, límite de intentos en el login, sesiones en MySQL y cierre por inactividad.
- Protegí los dos formularios del sitio con reCAPTCHA v3, honeypot y filtros PHP.
- Usé paginación en el servidor y gzip, y desplegué en cPanel (Passenger) con migraciones SQL idempotentes.

## Resultado

Un listado de 3.000 registros pasó de 2,6 MB y 0,6 s a 6,7 KB y 0,07 s. Los formularios superaron 9 de 9 pruebas anti-spam en producción.
