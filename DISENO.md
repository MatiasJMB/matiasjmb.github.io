# Contrato del portafolio (matiasjmb.github.io)

## Idea
En esta página, **Valparaíso (donde trabajo) y las pantallas reales de mis sistemas** son la mitad fija.
A la izquierda va siempre una columna de lectura; a la derecha, una mitad fija, sticky y de alto completo, con
una foto de Valparaíso que cambia (fundido de 1,6 s) por la captura del proyecto que se está leyendo.
**Elemento vivo:** filtro por tecnología en la lista de proyectos (Node.js, React, MySQL, Supabase,
AWS, Python, Flutter). Al elegir uno, las filas que no lo usan bajan a tinta suave. Funciona con el pulgar.
Sin JS, se muestran todas.

## Stack técnico
- Astro 5, sitio estático, `site: "https://matiasjmb.github.io"`, sin `base`.
- i18n: `defaultLocale: "es"`, `locales: ["es","en"]`, `prefixDefaultLocale: false`.
  - Rutas ES: `/` y `/proyectos/<slug>/`.
  - Rutas EN: `/en/` y `/en/projects/<slug>/`.
- Textos de interfaz en `src/i18n/ui.ts`: objeto `{ es: {...}, en: {...} }` más helper `t(lang, key)`.
- Fuentes autoalojadas: `@fontsource/besley` (800) y `@fontsource/libre-franklin` (400, 600). Nada de Google Fonts.
- Sin Tailwind ni frameworks UI. CSS propio en `src/styles/global.css` con tokens.
- JS mínimo, en `<script>` de Astro: filtro, fundido de la mitad fija, tema y entradas al hacer scroll. Respeta `prefers-reduced-motion`.

## Colección de contenido (la escribe otro agente; aquí solo se consume)
`src/content.config.ts`, colección `proyectos` con loader glob sobre `src/content/proyectos/**/*.md`.
El id incluye el idioma: `es/cegas`, `en/cegas`.

Frontmatter:
```
titulo: string
resumen: string            # una línea
tipo: "cliente" | "propio" | "docencia"
cliente: string            # "CEGAS", "Cliente confidencial", "Proyecto propio"
rol: string
periodo: string            # "ago 2026 – presente"
anio: number               # 2026
stack: string[]
filtros: string[]          # subconjunto de: node, react, mysql, supabase, aws, python, flutter
imagen: string | null      # "/capturas/<slug>.png" o null
repo: string | null
demo: string | null
privado: boolean           # true => "Código privado por confidencialidad"
orden: number              # menor = primero
```
Cuerpo con `## Problema`, `## Solución`, `## Resultado`, en inglés `## Problem`, `## Solution`, `## Outcome`.

Slugs: cegas, plataforma-flota, mecanizame, libro-de-notas, mantencion-qr, docencia, ahora-pan, gympulse,
plinko-live, auditor, atiende-ai, alke-wallet.

## Tokens
```css
:root{ --bg:#e6dbc7; --surface:#ddd0b9; --ink:#062b8a; --muted:#3a5aa8; --accent:#062b8a; --accent-ink:#e6dbc7; }
[data-theme="dark"]{ --bg:#0a1840; --surface:#102256; --ink:#e6dbc7; --muted:#a9b8dd; --accent:#e6dbc7; --accent-ink:#062b8a; }
```
- Si no hay tema guardado, se sigue `prefers-color-scheme`.
- El botón de tema es texto («Oscuro»/«Claro») y se guarda en `localStorage` dentro de try/catch.
- Un solo radio en todo el sitio: **0** (esquinas rectas). Botón = bloque relleno de `--accent` con texto `--accent-ink`.

Tipografía:
- Display: Besley 800, tracking -0.02em, interlineado 0.95.
- Texto: Libre Franklin 400/600, interlineado 1.5.
- Pasos:
```css
--step-small: clamp(0.8125rem,0.79rem + 0.1vw,0.875rem);
--step-body: clamp(1.125rem,1.05rem + 0.3vw,1.3125rem);
--step-lead: clamp(1.25rem,1.1rem + 0.7vw,1.625rem);
--step-head: clamp(2rem,1.3rem + 3.2vw,4rem);
```
Máximo 5 tamaños. Texto corrido a 16 px o más y en tinta completa.

## Reglas de la casa (obligatorias)
- Sin etiquetas pequeñas sobre los títulos.
- Sin monospace fuera de código.
- Sin numeración 01/02.
- Sin líneas finas ni cajas con borde de 1 px.
- Sin degradados.
- Sin sombras en reposo.
- Sin glass ni blur.
- Sin emojis.
- Sin tarjetas con ícono.
- Sin mayúsculas pequeñas espaciadas.
- Títulos en 2 líneas o menos en todo ancho.
- Las superficies se separan por un salto de tono (`--surface`), nunca por líneas.

## Composición
**Escritorio:** grid de 2 columnas 50/50 con 12 px de gap y 12 px de margen exterior.
- La columna de lectura va a la izquierda, con padding de 48–72 px y medida máxima de 46ch.
- La derecha es `position: sticky; top: 12px; height: calc(100svh - 24px)`: imágenes apiladas a sangre que se funden con `opacity`. La imagen activa la elige un `IntersectionObserver` sobre cada sección o fila con `data-imagen`.

**Teléfono:** la imagen va arriba, 48svh, a ancho completo dentro de 12 px de margen. La tarjeta del hero la monta por −24 px. Después todo es una sola columna.

### Inicio (`/` y `/en/`), en este orden
1. **Hero, «tarjeta con franjas».**
   - Panel `--surface` con una banda superior de 56 px de barras alternas tinta/papel de 28 px (flex de bloques).
   - Debajo: wordmark «Matías Moreno» en Besley.
   - Titular en 2 líneas: ES «Sistemas a medida / desde Valparaíso» · EN «Custom software / from Valparaíso».
   - Una frase. ES: «Desarrollador full stack: construyo sistemas web para empresas chilenas, de la base de datos al despliegue.» EN, la traducción.
   - Botón «Ver proyectos» → `#proyectos`.
   - Fila de 3 enlaces de texto: CV (PDF) · GitHub · LinkedIn.
   - La misma franja reaparece como banda de 8 px sobre el footer.
   - Imagen fija: `/valparaiso/ascensor-concepcion.jpg`.
2. **Proyectos (`id="proyectos"`), «libro mayor».**
   - Título «Proyectos» y, debajo, la fila del filtro: botones de texto, el activo en tinta y subrayado grueso de 3 px.
   - Una fila por proyecto, agrupadas por `tipo`: «Para clientes», «Propios», «Docencia».
   - Cada fila: nombre a la izquierda, tipo de trabajo (`resumen`, recortado a una línea) en tinta suave desde el 55 %, y año a la derecha con cifras tabulares.
   - Sin líneas entre filas y 44 px de alto.
   - Cada fila es un enlace a la ficha y lleva `data-imagen`, que cambia la mitad fija al pasar el mouse, hacer foco o entrar en vista.
   - En teléfono, los 3 primeros muestran su captura 16:10 encima de la fila.
3. **Sobre mí, «carta del fundador».**
   - Sin título. 4 párrafos cortos en primera persona; el texto lo provee `ui.ts` (clave `carta`, array de párrafos).
   - Firma «Matías Moreno» en itálica (Libre Franklin) y debajo el rol en tinta suave.
   - Retrato redondo de 44 px **solo si existe** `/public/retrato.jpg`; si no existe, se omite.
   - Imagen fija: `/valparaiso/cerro-artilleria.jpg`.
4. **Trayectoria, «hoja de menú impresa».**
   - Hoja `--surface` de 640 px con los bordes superior e inferior festoneados (`clip-path` o máscara SVG).
   - Grupos por año («2025», «2026»): ítem a la izquierda y mes a la derecha con cifras tabulares, más una línea de detalle en tinta suave.
   - Datos en `src/data/trayectoria.ts` (`{es:[{anio, items:[{titulo, detalle, mes}]}], en:[…]}`). Los escribes tú con esto:
     - **2025:** egreso de Ingeniería Civil en Informática, UPLA (dic); práctica profesional (oct); primeros proyectos freelance (fines de 2025).
     - **2026:** Ahora Pan (ene); GymPulse, Plinko Live y Mecanízame (jun); CEGAS: correos, anti-spam y sistema administrativo (ago); plataforma para flota de camiones (ago); clases de desarrollo móvil (2026); libro de notas y mantención con QR (oct).
   - Al pie de la hoja, el stack en 2 líneas centradas.
   - Imagen fija: `/valparaiso/ascensor-el-peral.jpg`.
5. **Contacto, «un solo campo».**
   - Pregunta en 2 líneas. ES «¿Tienes un sistema en mente? / Cuéntame en una línea.»
   - Un input de 64 px de alto en el tono más claro, con botón cuadrado de flecha dentro (nombre accesible «Enviar»). Al enviar abre `mailto:matias.moreno101@gmail.com` con asunto «Contacto desde el portafolio» y el texto como cuerpo.
   - Debajo, filas etiqueta/valor: correo, teléfono +56 9 8142 9525, Valparaíso, Chile.
   - Imagen fija: `/valparaiso/puerto.jpg`.
6. **Footer, «mitad foto, mitad menú».** Esta sección rompe el split y va a ancho completo.
   - Mitad izquierda: foto `/valparaiso/puerto.jpg` recortada fuerte.
   - Mitad derecha: menú grande (Proyectos, Sobre mí, Trayectoria, Contacto, CV) a ~2.6vw en bold; al hover, desplazamiento de 12 px.
   - Bloques de contacto y redes.
   - Selector de idioma ES/EN y botón de tema.
   - **Créditos de fotos**, uno por imagen (los da `src/data/creditos.ts`, que también escribes tú con el contenido de `/home/silver/portafolio/assets/credits.json`).
   - Línea legal «© 2026 Matías Moreno».

Arriba hay una barra mínima solo en móvil: wordmark, ES/EN y tema. En escritorio, idioma y tema van al pie de la columna de lectura del hero.

### Ficha de proyecto (`/proyectos/[slug]/`, `/en/projects/[slug]/`)
Mismo split, con la mitad fija mostrando `imagen` (o una foto de Valparaíso si es null).
- Columna: enlace «← Proyectos», título (step-head, 2 líneas máximo), `resumen` como lead, y una lista de definiciones (cliente, rol, período, stack).
- Botones «Ver código» / «Ver demo» si hay `repo`/`demo`. Si `privado`, la línea «Código privado por confidencialidad».
- El cuerpo en Markdown, con estilos de prosa propios.
- Al final: «Siguiente proyecto →» según `orden`.
- `getStaticPaths` filtra por idioma.

### Movimiento
- Fundido de la mitad fija (1,6 s).
- Entrada escalonada por sección (título, texto, imagen; 60–90 ms; 16–32 px más opacidad; una sola vez).
- Feedback de hover/focus/active en todos los controles.
- Zoom lento (1 → 1.04 en 20 s) en la imagen fija activa.
- Con `prefers-reduced-motion`, todo sin desplazamiento.
- El contenido nunca queda oculto si falla el JS: las clases de animación se agregan desde JS.

### SEO y accesibilidad
- `<html lang>` correcto, `hreflang` alterno ES/EN y `<title>`/description por página.
- Open Graph con `/og.jpg` (lo pondré yo), favicon simple `/favicon.svg` (monograma «MM» en `--ink` sobre `--bg`; lo dibujas tú).
- Foco visible, alt en cada imagen y enlace «Saltar al contenido».

### Despliegue
`.github/workflows/deploy.yml` con `withastro/action@v3` + `actions/deploy-pages@v4`, en push a `main` y con permisos de pages/id-token.

### Activos (ya existen o los pondré yo)
- `public/valparaiso/`: ascensor-concepcion.jpg, cerro-artilleria.jpg, ascensor-el-peral.jpg, puerto.jpg.
- `public/capturas/<slug>.png`: si no existe el archivo, se usa la foto de la sección.
- `public/cv/CV_Matias_Moreno_FullStack_2026.pdf`.
