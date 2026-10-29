---
titulo: "CBPFOOD · Auditorías sanitarias"
resumen: "Plataforma de auditorías BPM y cumplimiento contractual para servicios de alimentación, en producción."
tipo: "cliente"
cliente: "CBPFOOD"
rol: "Desarrollador full stack"
periodo: "oct 2026 – presente"
anio: 2026
stack: ["NestJS", "Prisma", "MySQL", "Vue 3", "TypeScript", "PrimeVue", "Tailwind CSS", "Railway", "Vercel"]
filtros: [node, mysql]
imagen: "/capturas/cbpfood.webp"
repo: null
demo: "https://app.cbpfood.cl"
privado: true
orden: 1
galeria:
  - src: /capturas/galeria/cbpfood-contrato.webp
    ancho: 1600
    alto: 1000
    pie: "Contrato del local: responsables, horarios, multas, documentos y activos"
  - src: /capturas/galeria/cbpfood-contractual.webp
    ancho: 1600
    alto: 1000
    pie: "Auditoría en terreno: dotación real contra la exigida por contrato"
  - src: /capturas/galeria/cbpfood-acta.webp
    ancho: 1600
    alto: 1000
    pie: "Acta con el resultado BPM y los hallazgos contractuales"
  - src: /capturas/galeria/cbpfood-sello.webp
    ancho: 1600
    alto: 1000
    pie: "Firmas en terreno y sello SHA-256 con código QR"
  - src: /capturas/galeria/cbpfood-gerente.webp
    ancho: 1600
    alto: 1000
    pie: "Panel del gerente con semáforo de cumplimiento"
  - src: /capturas/galeria/cbpfood-minero.webp
    ancho: 1600
    alto: 1000
    pie: "Perfil visual para minería, en modo oscuro"
  - src: /capturas/galeria/cbpfood-celular.webp
    ancho: 780
    alto: 1688
    pie: "Acta de auditoría en el celular"
---

## Problema

CBPFOOD audita las Buenas Prácticas de Manufactura (BPM) en restaurantes, casinos, colegios, clínicas y faenas. Sus clientes con contratos de alimentación necesitaban además comprobar en terreno que el operador cumpliera lo pactado (dotación, horarios, documentos, raciones y mantención) y dejarlo en un acta con validez.

## Solución

- Desarrollé el módulo de cumplimiento contractual con NestJS, Prisma y MySQL en el backend y Vue 3 con TypeScript en el frontend: contrato por local con responsables, personal clave, horarios y SLA, KPI, tabla de multas en UF, documentos exigidos con vencimiento y activos.
- Construí la auditoría contractual en terreno, que compara lo real con lo pactado y debe completarse antes de la auditoría BPM.
- Hice el acta con dos firmas en terreno, sello SHA-256, código QR y PDF.
- Programé un lector de bases de licitación que corre en el navegador, sin IA: lee PDF, Word o una plantilla Excel, crea los locales y precarga el contrato.
- Cerré brechas de seguridad: autorización por rol y por local en todo el backend, helmet, límite de intentos en el login, validación estricta de entradas y evidencias tras un proxy autenticado.
- Rediseñé la interfaz completa: tema claro y oscuro con contraste AA, perfil visual por rubro de la empresa, navegación inferior en celular y app instalable.
- Desplegué en Railway y Vercel con migraciones SQL ensayadas sobre una copia de la base, respaldo previo y plan de reversión.

## Resultado

Está en producción en app.cbpfood.cl. Con unas bases de licitación de 160 páginas, el lector crea los locales y precarga horarios, dotación, 27 KPI y 10 multas. El backend tiene más de 100 pruebas automatizadas.
