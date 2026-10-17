const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const escritorio = window.matchMedia('(min-width: 900px)');

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

/* Mitad fija: fundido entre imágenes según la sección o fila que se lee. */
const fija = document.querySelector<HTMLElement>('.fija');
if (fija) {
  const imagenes = Array.from(fija.querySelectorAll<HTMLImageElement>('img[data-clave]'));
  const inicial = imagenes.find((img) => img.classList.contains('activa'));
  let actual = inicial?.dataset.clave ?? '';

  if (inicial && !reducido) requestAnimationFrame(() => inicial.classList.add('zoom'));

  const mostrar = (clave: string | undefined) => {
    if (!clave || clave === actual) return;
    if (!imagenes.some((img) => img.dataset.clave === clave)) return;
    actual = clave;
    for (const img of imagenes) {
      const activa = img.dataset.clave === clave;
      img.classList.toggle('activa', activa);
      img.classList.toggle('zoom', activa && !reducido);
    }
  };

  const fuentes = Array.from(document.querySelectorAll<HTMLElement>('[data-imagen]'));
  const dentro = new Set<HTMLElement>();

  // Entre las fuentes que cruzan la línea central, manda la más profunda (la fila sobre la sección).
  const resolver = () => {
    if (!escritorio.matches) return;
    let elegida: HTMLElement | undefined;
    for (const el of dentro) {
      if (!elegida || elegida.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) {
        elegida = el;
      }
    }
    mostrar(elegida?.dataset.imagen);
  };

  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) dentro.add(el);
          else dentro.delete(el);
        }
        resolver();
      },
      { rootMargin: '-50% 0px -49.8% 0px' },
    );
    fuentes.forEach((el) => observador.observe(el));
  }

  // Hover y foco sobre las filas de proyectos.
  document.querySelectorAll<HTMLElement>('a[data-imagen]').forEach((fila) => {
    const activar = () => {
      if (escritorio.matches) mostrar(fila.dataset.imagen);
    };
    fila.addEventListener('mouseenter', activar);
    fila.addEventListener('focus', activar);
    fila.addEventListener('mouseleave', resolver);
    fila.addEventListener('blur', resolver);
  });
}

/* Filtro por tecnología. */
const conteo = document.querySelector<HTMLElement>('[data-conteo]');
const botonesFiltro = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filtro]'));
const items = Array.from(document.querySelectorAll<HTMLElement>('[data-item]'));
if (conteo && botonesFiltro.length) {
  const aplicar = (filtro: string) => {
    let visibles = 0;
    for (const item of items) {
      const usa = filtro === 'todos' || (item.dataset.filtros ?? '').split(' ').includes(filtro);
      item.classList.toggle('suave', !usa);
      if (usa) visibles++;
    }
    const plantilla =
      (filtro === 'todos' ? conteo.dataset.todos : conteo.dataset.parcial) ?? '';
    conteo.textContent = plantilla
      .replace('{n}', String(visibles))
      .replace('{total}', String(items.length));
  };
  for (const boton of botonesFiltro) {
    boton.addEventListener('click', () => {
      botonesFiltro.forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
      aplicar(boton.dataset.filtro ?? 'todos');
    });
  }
}

/* Contacto: abre el correo con el texto como cuerpo. */
document.querySelectorAll<HTMLFormElement>('form[data-contacto]').forEach((form) => {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const campo = form.elements.namedItem('body') as HTMLInputElement | null;
    const asunto = encodeURIComponent(form.dataset.asunto ?? '');
    const cuerpo = encodeURIComponent(campo?.value ?? '');
    window.location.href = `mailto:${form.dataset.correo ?? ''}?subject=${asunto}&body=${cuerpo}`;
  });
});

/* Entrada escalonada, una sola vez. Las clases las agrega JS: sin JS todo queda visible. */
if (!reducido && 'IntersectionObserver' in window) {
  const objetivos = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const revelar = new IntersectionObserver(
    (entradas) => {
      entradas
        .filter((e) => e.isIntersecting)
        .forEach((e, i) => {
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${i * 75}ms`;
          el.classList.add('rev-in');
          el.addEventListener('transitionend', () => (el.style.transitionDelay = ''), { once: true });
          revelar.unobserve(el);
        });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  objetivos.forEach((el) => {
    el.classList.add('rev');
    revelar.observe(el);
  });
}
