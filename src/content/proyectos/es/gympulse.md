---
titulo: "GymPulse"
resumen: "Micro-SaaS que detecta socios inactivos y les envía avisos automáticos por WhatsApp."
tipo: "propio"
cliente: "Proyecto propio"
rol: "Desarrollador full stack"
periodo: "jun 2026"
anio: 2026
stack: ["AWS Lambda", "API Gateway", "DynamoDB", "SQS", "EventBridge Scheduler", "Cognito", "AWS SAM", "Node.js"]
filtros: [aws, node]
imagen: "/capturas/gympulse.png"
repo: "https://github.com/MatiasJMB/gympulse"
demo: null
privado: false
orden: 8
---

## Problema

Un gimnasio pierde socios que dejan de asistir, o su plan vence sin que nadie lo note a tiempo. El seguimiento a cada socio, hecho a mano, es lento y fácil de olvidar.

## Solución

- Detecto socios inactivos o con plan por vencer.
- Envío avisos automáticos por WhatsApp con la API oficial de WhatsApp Cloud.
- Integré Mercado Pago.
- Diseñé una arquitectura serverless en AWS con SAM: Lambda (Node 20), API Gateway HTTP, DynamoDB de tabla única, SQS y EventBridge Scheduler.
- Usé Cognito para autenticación, S3 con CloudFront para el sitio y SSM Parameter Store para los secretos.

## Resultado

El proyecto tiene 30 pruebas automatizadas. Aún no está desplegado.
