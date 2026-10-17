# Portafolio de Matías Moreno

Sitio estático en Astro 5, bilingüe (ES en `/`, EN en `/en/`). Publicado en https://matiasjmb.github.io.

El diseño y las reglas están en `DISENO.md`.

## Uso

```
npm install
npm run dev
npm run build
```

## Estructura

- `src/content/proyectos/{es,en}/<slug>.md`: una ficha por proyecto e idioma.
- `src/i18n/ui.ts`: textos de interfaz. `src/data/`: trayectoria y créditos de fotos.
- `public/valparaiso/`: fotos de la mitad fija. `public/capturas/<slug>.png`: capturas (opcionales).
- `public/retrato.jpg` (opcional) y `public/og.jpg` (imagen para redes).

El despliegue lo hace `.github/workflows/deploy.yml` al hacer push a `main`.
