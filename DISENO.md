# Contrato del portafolio v2 (matiasjmb.github.io), minimalista

La v1 (split con fotos de Valparaíso, papel crema, franjas, hoja festoneada) se descarta entera.
Dirección de la skill taste: «quiet instrument» (seed 980560963), con paleta y tipo propios fijados por el cliente:
- sitio sobrio, con mucho aire y una sola familia tipográfica;
- las únicas imágenes son **capturas reales** de cada sistema;
- nada decorativo.

## Stack (no cambia)
- Astro 5 estático, i18n `es` (sin prefijo) y `en` (`/en/`).
- Rutas: `/`, `/proyectos/<slug>/`, `/en/`, `/en/projects/<slug>/`, `404`.
- Colección `proyectos` (`src/content.config.ts`): el esquema no cambia.
- Textos de interfaz en `src/i18n/ui.ts`, con `t(lang, key)`.
- Sin Tailwind ni frameworks UI. CSS propio en `src/styles/global.css` (reescribirlo entero; la v1 no se recicla).
- JS mínimo en `src/scripts/interacciones.ts`: filtro, tema y entradas.

## Tipografía
- Una sola familia: **Geist Variable**, ya instalada.
  - Importar `@fontsource-variable/geist` en `Base.astro`.
  - `font-family: "Geist Variable", system-ui, sans-serif`.
- Pesos: solo 400 y 600. Cifras tabulares (`font-variant-numeric: tabular-nums`) en años y fechas.
- Tracking: 0 en el texto; −0.02em en los títulos de 28 px o más.
- Cinco tamaños, ninguno más:
  ```css
  --step-small: 0.875rem;                                  /* 14px: meta, stack, pie */
  --step-body: 1.0625rem;                                  /* 17px: texto */
  --step-lead: clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem); /* títulos de tarjeta, lead */
  --step-head: clamp(1.5rem, 1.25rem + 1vw, 2rem);           /* h2 de sección */
  --step-display: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);     /* h1 hero y ficha */
  ```
- Interlineado: 1.6 en el texto y 1.1 en los títulos. Texto corrido en `--ink`, nunca en gris.

## Marca
- Logo: monograma «M» del avatar de GitHub, vectorizado en `src/components/Logo.astro`.
  - El chevrón izquierdo usa `--ink`, así que es negro en claro y claro en oscuro.
  - El derecho usa `--marca` `#fc7e1a`, fijo en ambos temas.
  - Fondo transparente.
- Dónde aparece:
  - en la cabecera, a 24 px y junto al nombre, como enlace al inicio;
  - en el pie, a 16 px, junto al ©;
  - como favicon: `public/favicon.svg`, que cambia la tinta con `prefers-color-scheme`, más `favicon-48.png` y `apple-touch-icon.png` opaco.
  - No se repite en el hero.

## Color
```css
:root{ --bg:#fafafa; --surface:#f0f0ee; --ink:#18181b; --muted:#5c5c63; --marca:#fc7e1a; --marca-fuerte:#d9650b; --sobre-marca:#18181b; }
[data-theme="dark"]{ --bg:#0c0c0d; --surface:#18181b; --ink:#ededed; --muted:#a1a1aa; --marca-fuerte:#fc7e1a; }
```
- **Botón primario:** fondo `--ink` y texto `--bg`, como el chevrón negro. Al pasar el mouse cambia a fondo `--marca` con texto `--sobre-marca` (6,9:1).
- **Naranjo (nunca como color de texto sobre claro, porque da 2,5:1):** el logo, el subrayado de 3 px del filtro activo, los subrayados de hover (2 px), `::selection` y el anillo de foco (`--marca-fuerte`, 3,5:1 en claro).
- Sin tema guardado, se sigue `prefers-color-scheme` (mismo mecanismo de la v1: atributo `data-theme` en `<html>`, script inline en `<head>` y botón de texto «Oscuro»/«Claro» con try/catch).
- Los enlaces van en `--ink`, subrayados en `--muted` (1 px), y al pasar el mouse el subrayado se vuelve `--marca` (2 px).

## Forma
- **Radio:** 6 px en botones y capturas; 10 px en el marco de la captura (el «mat»).
- **Un solo botón primario:** fondo `--accent`, texto `--accent-ink`, 44 px de alto y padding 0 18px. El secundario es un enlace de texto con «↗» cuando sale del sitio.
- **Prohibido:**
  - bordes de 1 px o líneas separadoras, `<hr>` incluido;
  - sombras;
  - degradados;
  - blur;
  - monospace;
  - etiquetas pequeñas sobre los títulos (eyebrows);
  - numeración 01/02;
  - emojis;
  - mayúsculas espaciadas.
- Las superficies se separan solo por tono (`--surface`) y por espacio.
- Títulos en 2 líneas como máximo, en cualquier ancho.

## Contenedor
- `.contenedor`: `max-width: 1080px; margin-inline: auto; padding-inline: 24px` (en ≤599 px, `padding-inline: 20px`).
- Texto corrido con medida máxima de 62ch.
- Espacio entre secciones: `clamp(80px, 6vw + 48px, 136px)`. Nada de bandas de color a ancho completo.

## Cabecera (`Cabecera.astro`, reemplaza a `BarraMovil.astro`)
- Fila de 72 px dentro de `.contenedor`. No es sticky.
- **Izquierda:** «Matías Moreno» (600, `--step-body`), enlace al inicio del idioma.
- **Derecha:** nav con «Proyectos», «Experiencia», «Contacto» (anclas `#proyectos`, `#experiencia`, `#contacto`; en una ficha apuntan a `/#…` o `/en/#…`) y «CV» (PDF `/cv/CV_Matias_Moreno_FullStack_2026.pdf`, abre en pestaña nueva). Después, `SelectorIdioma` (ES/EN) y `BotonTema`. Todo en `--step-small`, `--muted`, y en `--ink` al hacer hover.
- **≤720 px:** la nav de anclas se oculta y quedan nombre, CV, idioma y tema.
- Antes de la cabecera va un enlace «Saltar al contenido».

## Inicio (`Inicio.astro`, en este orden)
1. **Hero (`Hero.astro`).**
   - `padding-top: clamp(64px, 14svh, 160px)`.
   - h1 «Matías Moreno» en `--step-display` y 600.
   - `p.lead` en `--step-lead`: ES «Desarrollador Full Stack en Valparaíso, Chile.» / EN «Full stack developer based in Valparaíso, Chile.»
   - `p` en `--step-body` y `--ink`, con 62ch máx.:
     - ES: «Construyo sistemas web a medida para empresas: APIs en Node.js y Express, interfaces en React con TypeScript y bases de datos MySQL o PostgreSQL, del modelado de datos al despliegue en producción.»
     - EN: «I build custom web systems for businesses: Node.js and Express APIs, React and TypeScript interfaces, MySQL or PostgreSQL databases, from data modelling to production deployment.»
   - A 32 px, una fila con:
     - el botón primario «Ver proyectos» → `#proyectos`;
     - los enlaces de texto «CV (PDF)», «GitHub ↗» y «LinkedIn ↗», separados 24 px.
   - Debajo, en `--step-small` y `--muted`: ES «Disponible para trabajo remoto o presencial en la V Región.» / EN «Available for remote work or on-site in Valparaíso.»
2. **Proyectos (`Proyectos.astro`, `id="proyectos"`).**
   - h2 «Proyectos» / «Projects».
   - **Filtro.** Debajo, la fila del filtro: botones de texto «Todos», «Node.js», «React», «MySQL», «Supabase», «AWS» y «Python». Solo aparecen los filtros que usa al menos un proyecto (campo `filtros`).
     - El activo lleva `--accent` y `aria-pressed="true"`.
     - La fila se renderiza con `hidden` y JS se lo quita: sin JS se ven todos los proyectos y no hay filtro.
     - Al filtrar, las tarjetas que no coinciden reciben `hidden`. Un `<p class="solo" aria-live="polite">` anuncia «N proyectos».
   - **Grilla.** `grid-template-columns: repeat(2, 1fr)`, `gap: 56px 32px`; una columna en ≤720 px.
   - **Tarjeta (`Tarjeta.astro`).** `<article>` con un `<a>` que la envuelve entera, hacia la ficha. Dentro:
     - `.mat`: fondo `--surface`, radio 10 px, `padding: clamp(10px, 1.6vw, 18px)`, `overflow: hidden`. Adentro va la captura: `<img>` 16:10, `object-fit: cover`, `object-position: top`, radio 6 px, `width`/`height` explícitos, `loading="lazy"` (las dos primeras van en `eager`), con `srcset` según «Capturas» más abajo y `sizes="(max-width:720px) 100vw, 520px"`. Si no hay captura, `.mat` muestra el título del proyecto centrado en `--step-head` y `--muted`, con relación 16:10.
     - Fila: título (`--step-lead`, 600) a la izquierda y año a la derecha (`--step-small`, `--muted`, tabular).
     - `resumen` en `--step-body`, `--ink`, 2 líneas como máximo (`line-clamp: 2`).
     - Una línea `--step-small` `--muted`: tipo («Cliente» / «Propio») · los primeros 4 elementos de `stack`, unidos con « · ».
     - Hover/focus-visible: la imagen escala 1 → 1.02 (300 ms) y el título se subraya. Foco visible con outline de 2 px en `--accent` sobre el `<a>`.
   - **Orden.** El de `orden`.
3. **Experiencia (`Experiencia.astro`, reemplaza a `Trayectoria.astro`, `id="experiencia"`).**
   - h2 «Experiencia» / «Experience».
   - Grupos con un título h3 en `--step-body` 600: «Trabajo», «Formación» / «Work», «Education».
   - Cada fila tiene dos extremos:
     - a la izquierda, `titulo` (600) y debajo `detalle` (`--ink`, 62ch);
     - a la derecha, `fecha` (`--step-small`, `--muted`, tabular, `white-space: nowrap`).
   - Filas separadas por 24 px de espacio, sin líneas. En el teléfono, la fecha pasa debajo del título.
   - Al final, un párrafo «Stack: …» en `--step-small` `--muted`.
   - Los datos van en `src/data/trayectoria.ts` (los escribe otro agente con esta forma): `{ es: [{ grupo: string, items: [{ titulo, detalle, fecha }] }], en: [...] }` y `stack: { es: string, en: string }`.
4. **Sobre mí (`SobreMi.astro`, reemplaza a `Carta.astro`, `id="sobre-mi"`).**
   - h2 «Sobre mí» / «About».
   - Párrafos de `ui.ts`, clave `sobreMi` (array; ver más abajo), en `--step-body` y 62ch.
5. **Contacto (`Contacto.astro`, `id="contacto"`).**
   - h2 «Contacto» / «Contact».
   - Frase: ES «Estoy disponible para proyectos freelance y puestos de desarrollo full stack.» / EN «I'm available for freelance projects and full stack roles.»
   - Botón primario «Escribir un correo» / «Send an email» → `mailto:matias.moreno101@gmail.com?subject=Contacto%20desde%20el%20portafolio`.
   - Filas de dos extremos, etiqueta `--muted` a la izquierda y valor enlazado a la derecha:
     - Correo: `matias.moreno101@gmail.com`;
     - Teléfono: `+56 9 8142 9525` (`tel:+56981429525`);
     - LinkedIn: `in/matias-joaquin-moreno-barrios`;
     - GitHub: `MatiasJMB`.
   - Los datos están en `src/data/contacto.ts` (reusar).
6. **Pie (`Pie.astro`).**
   - Una sola línea dentro de `.contenedor`, con `padding-block: 48px`.
   - Contenido: «© 2026 Matías Moreno» a la izquierda; a la derecha, GitHub, LinkedIn y CV en `--step-small` `--muted`.
   - Sin créditos de fotos ni menú grande.

## Ficha (`Ficha.astro`, para ambas páginas `[slug]`)
- Cabecera igual.
- `.contenedor`:
  - «← Proyectos» / «← Projects» (hacia `/#proyectos` o `/en/#proyectos`);
  - h1 con el `titulo` en `--step-display` (2 líneas como máximo; si no cabe, en `--step-head`);
  - `p.lead` con el `resumen`.
- Meta como `<dl>` en una grilla de 4 columnas (2 en el teléfono): Cliente, Rol, Período, Stack (la lista completa, unida con « · »). `dt` en `--step-small` `--muted`, `dd` en `--step-body`.
- Acciones: botón «Ver código» si hay `repo`, enlace «Ver demo ↗» si hay `demo`. Si `privado`, la línea «Código privado por confidencialidad.» en `--muted`.
- Captura: `.mat` igual a la tarjeta, a todo el ancho del contenedor, `loading="eager"` y `sizes="(max-width:1080px) 100vw, 1032px"`.
- Cuerpo Markdown (`<Content />`) en una columna de 62ch, con estilos de prosa: h2 en `--step-lead` 600 con margen superior de 48 px, párrafos y listas en `--step-body`.
- Al final, «Siguiente proyecto: <título> →» según `orden` (con vuelta al primero).
- `getStaticPaths` filtra por idioma (como ahora).

## Capturas
- Archivos en `public/capturas/`: `<slug>.webp` (1920 px de ancho) y `<slug>-960.webp` (960 px), los dos en 16:10. Los pongo yo.
- En el frontmatter, `imagen: "/capturas/<slug>.webp"`.
- `srcset` = `"<slug>-960.webp 960w, <slug>.webp 1920w"`, armado reemplazando `.webp` por `-960.webp`. `width="1920" height="1200"`.
- `src/lib/proyectos.ts`: `capturaDe(p)` devuelve `{ src, srcset }` o null según `existePublico` (reusar `src/lib/publico.ts`).
- Borrar `imagenFicha` y la dependencia de `creditos.ts`.
- `alt`: ES «Pantalla de inicio de <título>» / EN «Home screen of <title>».

## Movimiento (`interacciones.ts`)
- Entrada por sección: JS agrega `.js` a `<html>`. Los hijos marcados `[data-entra]` (h2, filtro, cada tarjeta, filas) parten con `opacity:0` y `translateY(16px)`, y entran una sola vez con IntersectionObserver, escalonados 70 ms, 500 ms ease-out.
- Si falla el JS, todo queda visible: las reglas ocultas solo aplican bajo `html.js`.
- Hover en botones (oscurecer 8 % con `filter: brightness`), enlaces (subrayado) y tarjetas (escala de imagen).
- `prefers-reduced-motion`: sin desplazamiento ni escala, solo opacidad instantánea.

## i18n (`ui.ts`)
- Reescribir las claves según lo que usen los componentes nuevos y borrar las que queden sin uso (carta, franja, créditos, pregunta de contacto, etc.).
- `sobreMi` ES (2 párrafos):
  1. «Soy ingeniero civil en informática, egresado de la Universidad de Playa Ancha en 2025. Desde entonces desarrollo sistemas web para empresas y clientes particulares: los levanto con el cliente, los construyo de punta a punta y los dejo funcionando en su hosting.»
  2. «Me interesa el software que resuelve un problema concreto del día a día de un negocio: certificados, órdenes de trabajo, mantenciones, notas. Trabajo con Node.js, React y SQL, y también he construido arquitecturas serverless en AWS.»
- EN, la traducción natural.
- `meta.description` ES «Matías Moreno, desarrollador full stack en Valparaíso, Chile. Sistemas web a medida con Node.js, React y MySQL.» y EN equivalente.

## SEO y accesibilidad (se mantiene)
- `lang` y `hreflang` alternos.
- `title` y `description` por página.
- OG `/og.jpg` (lo regenero yo) y `favicon.svg`: actualizar sus colores a `--ink` sobre `--bg` nuevos.
- Foco visible, `alt` y skip link.
- Contraste AA.

## Despliegue
`.github/workflows/deploy.yml` no cambia.
