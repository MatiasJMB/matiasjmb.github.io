---
titulo: "GymPulse"
resumen: "Micro-SaaS that finds inactive members and sends automatic WhatsApp messages."
tipo: "propio"
cliente: "Personal project"
rol: "Full stack developer"
periodo: "Jun 2026"
anio: 2026
stack: ["AWS Lambda", "API Gateway", "DynamoDB", "SQS", "EventBridge Scheduler", "Cognito", "AWS SAM", "Node.js"]
filtros: [aws, node]
imagen: "/capturas/gympulse.webp"
repo: "https://github.com/MatiasJMB/gympulse"
demo: null
privado: false
orden: 8
---

## Problem

A gym loses members who stop attending, or whose plan expires before anyone notices. Following up with each member by hand is slow and easy to forget.

## Solution

- I built the detection of inactive members and members whose plan is about to expire.
- I scheduled automatic WhatsApp messages through the official WhatsApp Cloud API.
- I integrated Mercado Pago.
- I designed a serverless architecture on AWS with SAM: Lambda (Node 20), API Gateway HTTP, single-table DynamoDB, SQS and EventBridge Scheduler.
- I used Cognito for authentication, S3 with CloudFront for the site, and SSM Parameter Store for secrets.

## Outcome

The project has 30 automated tests. It is not deployed yet.
