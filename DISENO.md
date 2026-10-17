# Contrato del portafolio v2.1 (matiasjmb.github.io), minimalista con interacción estilo Apple

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
  - en la cabecera, a 24 px y **solo** (sin el nombre: HIG `toolbars.md › Don't title windows with your app name`; el nombre ya es el h1 del hero), como enlace al inicio con nombre accesible «Matías Moreno» en un `span.solo`, y objetivo de 44×44;
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
- Sin tema guardado, se sigue `prefers-color-scheme` (atributo `data-theme` en `<html>`, script inline en `<head>`, `localStorage` con try/catch). El control es el interruptor descrito en «Interacción estilo Apple».
- Los enlaces van en `--ink`, subrayados en `--muted` (1 px), y al pasar el mouse el subrayado se vuelve `--marca` (2 px).

## Forma
- **Radio:** 6 px en botones y capturas; 10 px en el marco de la captura (el «mat»).
- **Un solo botón primario:** fondo `--ink`, texto `--bg`, 44 px de alto y padding 0 18px; hover con fondo `--marca`. El secundario es un enlace de texto (sin flechas: ↗ se dibujaba como emoji).
- **Prohibido:**
  - bordes de 1 px o líneas separadoras, `<hr>` incluido;
  - sombras (excepción: el pulgar del interruptor);
  - degradados (excepción: el borde de scroll de la cabecera);
  - blur (excepción: la cabecera flotante);
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
- Fila de 72 px dentro de `.contenedor`. Es sticky y translúcida (ver «Interacción estilo Apple»).
- **Izquierda** (navegación, HIG `toolbars.md › Group navigation controls…`): el logo y, a 28 px, la nav con «Proyectos», «Experiencia», «Contacto» (anclas `#proyectos`, `#experiencia`, `#contacto`; en una ficha apuntan a `/#…` o `/en/#…`) y «CV» (PDF `/cv/CV_Matias_Moreno_FullStack_2026.pdf`, abre en pestaña nueva).
- **Derecha** (ajustes): `SelectorIdioma` (ES/EN) y `BotonTema`.
- Todo en `--step-small`, `--muted`, y en `--ink` al hacer hover o si es la sección actual.
- **Sección actual:** en el inicio, la ancla de la sección que cruza el 35 % de la pantalla recibe `aria-current="true"` y un `.nav-indicador` naranjo de 2 px que se desliza con resorte (es el mismo componente que el filtro). Al final de la página se marca «Contacto»; en el hero no se marca nada.
- **≤620 px:** las anclas se ocultan y quedan logo, CV, idioma y tema.
- Antes de la cabecera va un enlace «Saltar al contenido».

## Inicio (`Inicio.astro`, en este orden)
1. **Hero (`Hero.astro`).**
   - `padding-top: clamp(64px, 14svh, 160px)`.
   - h1 «Matías Moreno» en `--step-display` y 600.
   - `p.lead` en `--step-lead`: ES «Desarrollador full stack en Valparaíso, Chile.» / EN «Full stack developer based in Valparaíso, Chile.»
   - `p` en `--step-body` y `--ink`, con 62ch máx.:
     - ES: «Construyo sistemas web a medida para empresas, desde el levantamiento de requerimientos hasta el despliegue en producción.»
     - EN: «I build custom web systems for businesses, from requirements gathering to production deployment.»
     - (v2.1: más corto y sin jerga, HIG `writing.md › Be clear`; el detalle técnico vive en Experiencia y en cada ficha.)
   - A 32 px, una fila con:
     - el botón primario «Ver proyectos» → `#proyectos`;
     - los enlaces de texto «Ver CV (PDF)», «GitHub» y «LinkedIn», separados 24 px (verbo en la acción, HIG `writing.md › Be action oriented`).
   - Debajo, en `--step-small` y `--muted`: ES «Disponible para trabajo remoto o presencial.» / EN «Available for remote or on-site work.» (sin limitar a una región: Matías está abierto a trabajar presencial fuera de Valparaíso)
2. **Proyectos (`Proyectos.astro`, `id="proyectos"`).**
   - h2 «Proyectos» / «Projects».
   - **Filtro.** Debajo, la fila del filtro: botones de texto «Todos», «Node.js», «React», «MySQL», «Supabase», «AWS» y «Python». Solo aparecen los filtros que usa al menos un proyecto (campo `filtros`).
     - El activo va en `--ink` 600 con subrayado `--marca` de 3 px y `aria-pressed="true"`.
     - La fila se renderiza con `hidden` y JS se lo quita: sin JS se ven todos los proyectos y no hay filtro.
     - Al filtrar, las tarjetas que no coinciden reciben `hidden`. Un `<p class="solo" aria-live="polite">` anuncia «N proyectos».
   - **Grilla.** `grid-template-columns: repeat(2, 1fr)`, `gap: 56px 32px`; una columna en ≤720 px.
   - **Tarjeta (`Tarjeta.astro`).** `<article>` con un `<a>` que la envuelve entera, hacia la ficha. Dentro:
     - `.mat`: fondo `--surface`, radio 10 px, `padding: clamp(10px, 1.6vw, 18px)`, `overflow: hidden`. Adentro va la captura: `<img>` 16:10, `object-fit: cover`, `object-position: top`, radio 6 px, `width`/`height` explícitos, `loading="lazy"` (las dos primeras van en `eager`), con `srcset` según «Capturas» más abajo y `sizes="(max-width:720px) 100vw, 520px"`. Si no hay captura, `.mat` muestra el título del proyecto centrado en `--step-head` y `--muted`, con relación 16:10.
     - Fila: título (`--step-lead`, 600) a la izquierda y año a la derecha (`--step-small`, `--muted`, tabular).
     - `resumen` en `--step-body`, `--ink`, 2 líneas como máximo (`line-clamp: 2`).
     - Una línea `--step-small` `--muted`: tipo («Cliente» / «Propio») · los primeros 4 elementos de `stack`, unidos con « · ».
     - Hover/focus-visible: la imagen escala 1 → 1.02 (300 ms) y el título se subraya. Foco visible con outline de 2 px en `--marca-fuerte` sobre el `<a>`.
   - **Orden.** El de `orden`.
3. **Experiencia (`Experiencia.astro`, reemplaza a `Trayectoria.astro`, `id="experiencia"`).**
   - h2 «Experiencia» / «Experience».
   - Grupos con un título h3 en `--step-body` 600: «Trabajo», «Formación» / «Work», «Education».
   - Cada fila tiene dos extremos:
     - a la izquierda, `titulo` (600) y debajo `detalle` (`--ink`, 62ch);
     - a la derecha, `fecha` (`--step-small`, `--muted`, tabular, `white-space: nowrap`).
   - Filas separadas por 24 px de espacio, sin líneas. En el teléfono, la fecha pasa debajo del título.
   - Al final, un párrafo «Tecnologías: …» (EN «Stack: …») en `--step-small` `--muted`.
   - Los datos van en `src/data/trayectoria.ts` (los escribe otro agente con esta forma): `{ es: [{ grupo: string, items: [{ titulo, detalle, fecha }] }], en: [...] }` y `stack: { es: string, en: string }`.
4. **Sobre mí (`SobreMi.astro`, reemplaza a `Carta.astro`, `id="sobre-mi"`).**
   - h2 «Sobre mí» / «About».
   - Párrafos de `ui.ts`, clave `sobreMi` (array; ver más abajo), en `--step-body` y 62ch.
5. **Contacto (`Contacto.astro`, `id="contacto"`).**
   - h2 «Contacto» / «Contact».
   - Frase: ES «Estoy disponible para proyectos freelance y puestos de desarrollo full stack.» / EN «I'm available for freelance projects and full stack roles.»
   - Botón primario «Escribir un correo» / «Send an email» → `mailto:matias.moreno101@gmail.com?subject=Contacto%20desde%20el%20portafolio`.
   - Filas de dos extremos, etiqueta `--muted` a la izquierda y valor enlazado a la derecha:
     - Correo: `matias.moreno101@gmail.com`, con un botón de texto «Copiar» que confirma «Copiado» en el mismo lugar durante 2 s y lo anuncia con `aria-live` (HIG `feedback.md`). Sin JS o sin portapapeles, el botón no aparece;
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
- Acciones: botón «Ver código» si hay `repo`; si hay `demo`, enlace «Visitar <dominio>» (dice adónde lleva: en CEGAS es el sitio del cliente, no una demo). Si `privado`, la línea «El código es privado por confidencialidad con el cliente.» en `--muted`. La etiqueta del meta «Stack» pasa a «Tecnologías» en español.
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
  1. «Soy ingeniero civil en informática, egresado de la Universidad de Playa Ancha en 2025. Trabajo como desarrollador full stack independiente: levanto los requerimientos con cada cliente, construyo el sistema completo y lo dejo funcionando en su servidor.»
  2. «Me interesa el software que resuelve problemas concretos de un negocio, como certificados, órdenes de trabajo, mantenciones o calificaciones. Trabajo principalmente con Node.js, React y SQL, y también he diseñado una arquitectura serverless en AWS.»
- EN, la traducción natural.
- `meta.description` ES «Matías Moreno, desarrollador full stack en Valparaíso, Chile. Sistemas web a medida con Node.js, React y MySQL.» y EN equivalente.

## SEO y accesibilidad (se mantiene)
- `lang` y `hreflang` alternos.
- `title` y `description` por página.
- OG `/og.jpg` (lo regenero yo) y `favicon.svg`: actualizar sus colores a `--ink` sobre `--bg` nuevos.
- Foco visible, `alt` y skip link.
- Contraste AA.

## Interacción estilo Apple (v2.1, 2026-10-17)
Guía: skill `apple-design` de dickwu (HIG de Apple, en `~/.claude/skills/apple-design`). Como es web, aplican los principios y las bases, no las convenciones de plataforma.
- **Motor:** `src/scripts/resorte.ts`. Resortes con amortiguación + respuesta que parten del valor visible (interrumpibles), `Rastreador` de velocidad, `proyectar` y `ceder` (borde elástico). Con `prefers-reduced-motion`: amortiguación 1, respuesta ≤ 0,15 s y sin velocidad heredada.
- **Interruptor de tema** (`BotonTema.astro`):
  - `role="switch"`, `aria-checked` (oscuro = activado), etiqueta «Modo oscuro» / «Dark mode».
  - Pista de 52×30 neutra (`--pista`: #d4d4d8 claro, #3f3f46 oscuro) y pulgar de 26 px (`--pulgar`) con un **sol** `--marca-fuerte` en claro y una **luna** `#18181b` en oscuro. La variable `--p` (0 a 1) mueve el pulgar y cruza los íconos.
  - Toque, teclado o arrastre con lanzamiento. Al presionar, el pulgar se estira.
  - El sistema manda (`dark-mode.md`): si `prefers-color-scheme` cambia, se olvida la elección guardada.
  - El cambio de tema cruza los colores en 250 ms (`html.tema-cambiando`).
- **Cabecera:** sticky. Arriba es transparente. Con scroll (`.flotando`) pasa a fondo `--bg` al 86 % con `blur(20px) saturate(180%)` y un borde de scroll difuminado de 16 px. El 86 % mantiene `--muted` en ≥ 4,5:1 en el peor caso. Con transparencia reducida o contraste alto, fondo sólido (y borde con contraste alto). `.seccion` lleva `scroll-margin-top: 88px`.
- **Filtro:** un solo `.filtro-indicador` naranjo de 3 px que se desliza al filtro activo. El activo también va en `--ink` 600, así que no depende solo del color. Las tarjetas que siguen visibles se reacomodan con FLIP de resorte sobre el `<a>`. Si el viaje supera el 60 % de la pantalla, aparecen con un fundido en su lugar.
- **Respuesta al presionar** (100 ms): `.boton` 0.97, `.mat` de tarjeta 0.985, botones del filtro 0.96. Se desactiva con movimiento reducido.

## Despliegue
`.github/workflows/deploy.yml` no cambia.
