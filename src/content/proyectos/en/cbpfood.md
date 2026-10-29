---
titulo: "CBPFOOD · Food safety audits"
resumen: "Platform for food safety (GMP) audits and contract compliance in food services, in production."
tipo: "cliente"
cliente: "CBPFOOD"
rol: "Full stack developer"
periodo: "Oct 2026 – present"
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
    pie: "Site contract: managers, schedules, penalties, documents and assets"
  - src: /capturas/galeria/cbpfood-contractual.webp
    ancho: 1600
    alto: 1000
    pie: "On-site audit: actual staffing against the contract"
  - src: /capturas/galeria/cbpfood-acta.webp
    ancho: 1600
    alto: 1000
    pie: "Audit record with the GMP score and contract findings"
  - src: /capturas/galeria/cbpfood-sello.webp
    ancho: 1600
    alto: 1000
    pie: "On-site signatures and SHA-256 seal with a QR code"
  - src: /capturas/galeria/cbpfood-gerente.webp
    ancho: 1600
    alto: 1000
    pie: "Manager dashboard with a compliance traffic light"
  - src: /capturas/galeria/cbpfood-minero.webp
    ancho: 1600
    alto: 1000
    pie: "Mining visual profile, in dark mode"
  - src: /capturas/galeria/cbpfood-celular.webp
    ancho: 780
    alto: 1688
    pie: "Audit record on a phone"
---

## Problem

CBPFOOD audits Good Manufacturing Practices (GMP) in restaurants, cafeterias, schools, clinics and mining camps. Clients with catering contracts also needed to check on site that the operator met the contract (staffing, schedules, documents, meal counts and maintenance) and record it in a binding audit report.

## Solution

- I built the contract compliance module with NestJS, Prisma and MySQL on the backend and Vue 3 with TypeScript on the frontend: a contract per site with managers, key staff, schedules and SLAs, KPIs, a penalty table in UF, required documents with expiry dates, and assets.
- I built the on-site contract audit, which compares what is actually there with what was agreed and must be completed before the GMP audit.
- I built the audit report with two on-site signatures, a SHA-256 seal, a QR code and a PDF.
- I wrote a tender document reader that runs in the browser, without AI: it reads PDF, Word or an Excel template, creates the sites and pre-fills the contract.
- I closed security gaps: role and site authorization across the whole backend, helmet, login rate limiting, strict input validation and evidence files behind an authenticated proxy.
- I redesigned the whole interface: light and dark themes with AA contrast, a visual profile per industry, bottom navigation on phones and an installable app.
- I deployed to Railway and Vercel with SQL migrations rehearsed on a copy of the database, a prior backup and a rollback plan.

## Outcome

It is in production at app.cbpfood.cl. From a 160-page tender document, the reader creates the sites and pre-fills schedules, staffing, 27 KPIs and 10 penalties. The backend has more than 100 automated tests.
