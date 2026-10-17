---
titulo: "CEGAS admin system"
resumen: "Web system for inspections, PDF certificates and payments at a gas inspection body."
tipo: "cliente"
cliente: "CEGAS"
rol: "Full stack developer"
periodo: "Aug 2026 – present"
anio: 2026
stack: ["Node.js", "Express", "EJS", "MySQL", "bcrypt", "reCAPTCHA v3", "cPanel"]
filtros: [node, mysql]
imagen: "/capturas/cegas.png"
repo: null
demo: "https://cegas.cl"
privado: true
orden: 1
---

## Problem

CEGAS is a body that inspects and certifies gas installations. It needed one place for its clients, inspections, quotes and certificates, and its website forms needed protection from spam.

## Solution

- I built the administrative web system with Node.js 20, Express, EJS and MySQL: clients, installations, inspections with a status traffic light, quotes, payments and a calendar.
- I generate PDF certificates with sequential folio numbers and alerts for expiry at 24 months.
- I implemented roles, a super-admin, support tickets, photo records and a change log.
- I applied security measures: CSRF protection, helmet with CSP, bcrypt, login rate limiting, sessions stored in MySQL and automatic logout on inactivity.
- I protected the site's two forms with reCAPTCHA v3, a honeypot and PHP filters.
- I used server-side pagination and gzip, and deployed to cPanel (Passenger) with idempotent SQL migrations.

## Outcome

A listing of 3,000 records went from 2.6 MB and 0.6 s to 6.7 KB and 0.07 s. The forms passed 9 of 9 anti-spam tests in production.
