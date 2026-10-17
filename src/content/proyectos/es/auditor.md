---
titulo: "Auditor web"
resumen: "CLI defensiva en Python para auditorías web autorizadas, con informes JSON y HTML."
tipo: "propio"
cliente: "Proyecto propio"
rol: "Desarrollador full stack"
periodo: "2026"
anio: 2026
stack: ["Python", "JSON", "HTML"]
filtros: [python]
imagen: "/capturas/auditor.webp"
repo: "https://github.com/MatiasJMB/auditor"
demo: null
privado: false
orden: 8
---

## Problema

Una revisión de seguridad web necesita pasos repetibles, un alcance acordado previamente y un informe que otra persona pueda revisar.

## Solución

- Desarrollé una CLI en Python que usa solo la librería estándar.
- Exige un alcance autorizado antes de auditar.
- Genera informes en JSON y HTML.
- Detecta cloaking por User-Agent, es decir, sitios que muestran contenido distinto según el navegador que los visita.

## Resultado

La usé para documentar un sitio de phishing que suplantaba a una empresa de envíos: detectó que mostraba contenido distinto según el dispositivo.
