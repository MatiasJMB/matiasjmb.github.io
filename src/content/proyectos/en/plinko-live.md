---
titulo: "Plinko Live"
resumen: "TikTok Live overlay where each gift drops a marble with physics."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "Jun 2026"
anio: 2026
stack: ["Node.js", "WebSocket", "Canvas", "Matter.js"]
filtros: [node]
imagen: "/capturas/plinko-live.png"
repo: "https://github.com/MatiasJMB/plinko-live"
demo: null
privado: false
orden: 9
---

## Problem

During a TikTok Live stream, viewers' gifts are the moment the audience wants to see. A visual overlay turns each gift into something that stands out on screen.

## Solution

- Each gift drops a marble with physics, simulated with Matter.js.
- I drew the overlay on a Canvas, updated over WebSocket.
- I built the server with Node.js, using the native http module and WebSocket.
- I included a simulator mode to test the overlay without a live stream.

## Outcome

The physics is stable (no marbles falling through the board) and it can be tried without TikTok using the simulator mode.
