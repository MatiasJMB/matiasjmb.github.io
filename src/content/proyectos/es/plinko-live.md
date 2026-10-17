---
titulo: "Plinko Live"
resumen: "Overlay para TikTok Live donde cada regalo suelta una canica con física."
tipo: "propio"
cliente: "Proyecto propio"
rol: "Desarrollador full stack"
periodo: "jun 2026"
anio: 2026
stack: ["Node.js", "WebSocket", "Canvas", "Matter.js"]
filtros: [node]
imagen: "/capturas/plinko-live.png"
repo: "https://github.com/MatiasJMB/plinko-live"
demo: null
privado: false
orden: 9
---

## Problema

Durante una transmisión en TikTok Live, los regalos de los espectadores son un momento que el público quiere ver. Un overlay visual los convierte en algo que se nota en pantalla.

## Solución

- Hice que cada regalo suelte una canica con física, simulada con Matter.js.
- Dibujé el overlay en Canvas, actualizado por WebSocket.
- Construí el servidor con Node.js, usando el módulo http nativo y WebSocket.
- Incluí un modo simulador para probar el overlay sin transmisión en vivo.

## Resultado

La física quedó estable (sin canicas que atraviesan el tablero) y se puede probar sin TikTok con el modo simulador.
