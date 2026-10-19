/* ---------- Analítica ----------
 * GoatCounter (count.js en Base.astro) cuenta las páginas solo. Aquí se suman como eventos
 * los clics que importan: CV, contacto y los enlaces de código/sitio de cada ficha. */
declare global {
  interface Window {
    goatcounter?: { count: (datos: { path: string; title?: string; event?: boolean }) => void };
  }
}

// /proyectos/<slug> y /en/projects/<slug>
const ficha = location.pathname.match(/\/(?:proyectos|projects)\/([^/]+)/)?.[1] ?? null;

const eventoDe = (enlace: HTMLAnchorElement): string | null => {
  const href = enlace.getAttribute('href') ?? '';
  if (href.endsWith('.pdf')) return 'cv-descarga';
  if (href.startsWith('mailto:')) return 'contacto-correo';
  if (href.startsWith('tel:')) return 'contacto-telefono';
  if (href.includes('linkedin.com')) return 'contacto-linkedin';
  const enPie = enlace.closest('footer') !== null;
  if (href.includes('github.com')) return ficha && !enPie ? `repo-${ficha}` : 'contacto-github';
  if (ficha && !enPie && /^https?:/.test(href)) return `demo-${ficha}`;
  return null;
};

const origenDe = (enlace: HTMLAnchorElement) => {
  const zona = enlace.closest('header, footer, section');
  return zona ? zona.id || zona.tagName.toLowerCase() : 'pagina';
};

document.addEventListener('click', (e) => {
  const enlace = (e.target as Element | null)?.closest?.('a');
  if (!enlace) return;
  const evento = eventoDe(enlace);
  if (!evento) return;
  window.goatcounter?.count({ path: evento, title: origenDe(enlace), event: true });
});

export {};
