const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Tema: alterna claro/oscuro y lo recuerda (si el navegador lo permite). */
document.querySelectorAll<HTMLButtonElement>('[data-tema]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const raiz = document.documentElement;
    const nuevo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
    raiz.dataset.theme = nuevo;
    try {
      localStorage.setItem('tema', nuevo);
    } catch {
      /* sin almacenamiento: el cambio vale solo para esta visita */
    }
  });
});

/* Entrada escalonada, una sola vez. Las reglas que ocultan aplican solo bajo html.js. */
const entrar = (el: HTMLElement, retraso = 0) => {
  if (retraso && !reducido) el.style.transitionDelay = `${retraso}ms`;
  el.classList.add('entra');
  el.addEventListener('transitionend', () => (el.style.transitionDelay = ''), { once: true });
};

// Los bloques del Markdown de cada ficha entran uno por uno.
document.querySelectorAll<HTMLElement>('.prosa > *').forEach((el) => el.setAttribute('data-entra', ''));

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas
        .filter((e) => e.isIntersecting)
        .forEach((e, i) => {
          entrar(e.target as HTMLElement, i * 70);
          observador.unobserve(e.target);
        });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  document.querySelectorAll<HTMLElement>('[data-entra]').forEach((el) => observador.observe(el));
} else {
  document.querySelectorAll<HTMLElement>('[data-entra]').forEach((el) => entrar(el));
}

/* Filtro por tecnología: sin JS la fila queda oculta y se ven todos los proyectos. */
const filaFiltro = document.querySelector<HTMLElement>('[data-filtro-fila]');
const botones = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filtro]'));
const tarjetas = Array.from(document.querySelectorAll<HTMLElement>('[data-item]'));
const anuncio = document.querySelector<HTMLElement>('[data-conteo]');

if (filaFiltro && botones.length) {
  filaFiltro.hidden = false;

  const aplicar = (filtro: string) => {
    let visibles = 0;
    for (const tarjeta of tarjetas) {
      const usa = filtro === 'todos' || (tarjeta.dataset.filtros ?? '').split(' ').includes(filtro);
      tarjeta.hidden = !usa;
      if (usa) {
        visibles++;
        entrar(tarjeta);
      }
    }
    if (anuncio) {
      const plantilla = (visibles === 1 ? anuncio.dataset.uno : anuncio.dataset.varios) ?? '';
      anuncio.textContent = plantilla.replace('{n}', String(visibles));
    }
  };

  for (const boton of botones) {
    boton.addEventListener('click', () => {
      botones.forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
      aplicar(boton.dataset.filtro ?? 'todos');
    });
  }
}
