import { ceder, movimientoReducido, proyectar, Rastreador, Resorte } from './resorte';

const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const raiz = document.documentElement;

/* ---------- Tema ----------
 * El sistema manda (HIG, dark-mode.md): sin elección guardada se sigue prefers-color-scheme,
 * y si el sistema cambia de apariencia, la elección manual se olvida. */
type Tema = 'dark' | 'light';
const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)');
const temaActual = (): Tema => (raiz.dataset.theme === 'dark' ? 'dark' : 'light');
let finCambio = 0;

const guardarTema = (tema: Tema | null) => {
  try {
    if (tema) localStorage.setItem('tema', tema);
    else localStorage.removeItem('tema');
  } catch {
    /* sin almacenamiento: el cambio vale solo para esta visita */
  }
};

// Los colores cruzan en 250 ms en vez de saltar de golpe.
const aplicarTema = (tema: Tema) => {
  if (temaActual() === tema) return;
  raiz.classList.add('tema-cambiando');
  raiz.dataset.theme = tema;
  clearTimeout(finCambio);
  finCambio = window.setTimeout(() => raiz.classList.remove('tema-cambiando'), 320);
};

const sincronizar: Array<() => void> = [];

document.querySelectorAll<HTMLButtonElement>('[data-tema]').forEach((boton) => {
  const RECORRIDO = 22; // px que viaja el pulgar
  const p = new Resorte(temaActual() === 'dark' ? 1 : 0, {
    amortiguacion: 1,
    respuesta: 0.3,
    precision: 0.001,
    alCambiar: (v) => boton.style.setProperty('--p', v.toFixed(4)),
  });
  const marcar = () => boton.setAttribute('aria-checked', String(temaActual() === 'dark'));
  marcar();

  const confirmar = (tema: Tema, velocidad?: number) => {
    const cambia = temaActual() !== tema;
    aplicarTema(tema);
    guardarTema(tema);
    marcar();
    p.a(tema === 'dark' ? 1 : 0, { velocidad });
    if (cambia) navigator.vibrate?.(8); // en el mismo cuadro que el cambio visual
  };

  sincronizar.push(() => {
    marcar();
    p.a(temaActual() === 'dark' ? 1 : 0);
  });

  // Toque y teclado (Espacio/Enter) llegan como click.
  let ignorarClick = false;
  boton.addEventListener('click', () => {
    if (ignorarClick) {
      ignorarClick = false;
      return;
    }
    confirmar(temaActual() === 'dark' ? 'light' : 'dark');
  });

  // Arrastre: el pulgar sigue al dedo y la velocidad al soltar decide el lado.
  const rastreador = new Rastreador();
  let arrastre: { x0: number; p0: number; movio: boolean } | null = null;

  boton.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    ignorarClick = false;
    boton.setPointerCapture(e.pointerId);
    p.detener(); // se puede atrapar a mitad de camino
    arrastre = { x0: e.clientX, p0: p.valor, movio: false };
    rastreador.reiniciar();
    rastreador.agregar(e.clientX, e.timeStamp);
    boton.classList.add('presionado');
  });

  boton.addEventListener('pointermove', (e) => {
    if (!arrastre) return;
    rastreador.agregar(e.clientX, e.timeStamp);
    const dx = e.clientX - arrastre.x0;
    if (!arrastre.movio && Math.abs(dx) < 4) return;
    arrastre.movio = true;
    p.fijar(ceder(arrastre.p0 + dx / RECORRIDO, 0, 1, 1));
  });

  const soltar = (e: PointerEvent) => {
    if (!arrastre) return;
    const { movio } = arrastre;
    arrastre = null;
    boton.classList.remove('presionado');
    if (e.type === 'pointercancel') {
      p.a(temaActual() === 'dark' ? 1 : 0);
      return;
    }
    if (!movio) return; // un toque sin arrastre lo resuelve el click, desde donde quedó el pulgar
    ignorarClick = true;
    rastreador.agregar(e.clientX, e.timeStamp);
    const v = rastreador.velocidad() / RECORRIDO;
    const final = p.valor + proyectar(v * RECORRIDO) / RECORRIDO;
    confirmar(final >= 0.5 ? 'dark' : 'light', v);
  };
  boton.addEventListener('pointerup', soltar);
  boton.addEventListener('pointercancel', soltar);
});

sistemaOscuro.addEventListener('change', (e) => {
  guardarTema(null);
  aplicarTema(e.matches ? 'dark' : 'light');
  sincronizar.forEach((f) => f());
});

/* ---------- Indicador: un subrayado que viaja con resortes hasta el elemento activo ----------
 * Se usa en el filtro y en la sección actual de la barra: mismo color, mismo significado. */
function crearIndicador(indicador: HTMLElement, separacion: number, relleno: number, visible = true) {
  const pintar = () => {
    indicador.style.transform = `translate(${x.valor}px, ${y.valor}px) scaleX(${Math.max(0, w.valor)})`;
    indicador.style.opacity = String(Math.min(1, Math.max(0, o.valor)));
  };
  const x = new Resorte(0, { respuesta: 0.35, alCambiar: pintar });
  const y = new Resorte(0, { respuesta: 0.35, alCambiar: pintar });
  const w = new Resorte(0, { respuesta: 0.35, alCambiar: pintar });
  const o = new Resorte(visible ? 1 : 0, { respuesta: 0.25, precision: 0.001, alCambiar: pintar });
  const medir = (el: HTMLElement) => ({
    x: el.offsetLeft + relleno,
    y: el.offsetTop + el.offsetHeight - separacion,
    w: el.offsetWidth - relleno * 2,
  });
  return {
    fijar(el: HTMLElement) {
      const m = medir(el);
      x.fijar(m.x);
      y.fijar(m.y);
      w.fijar(m.w);
    },
    mover(el: HTMLElement) {
      const m = medir(el);
      // Si estaba oculto, aparece en su lugar en vez de viajar desde el último sitio.
      if (o.destino === 0 && o.valor < 0.05) this.fijar(el);
      else {
        x.a(m.x);
        y.a(m.y);
        w.a(m.w);
      }
      o.a(1);
    },
    ocultar() {
      o.a(0);
    },
  };
}

/* ---------- Cabecera: material translúcido solo cuando hay contenido debajo ---------- */
const cabecera = document.querySelector<HTMLElement>('.cabecera');
if (cabecera) {
  const revisar = () => cabecera.classList.toggle('flotando', window.scrollY > 4);
  addEventListener('scroll', revisar, { passive: true });
  revisar();
}

/* Sección actual: la barra marca dónde estás (HIG, toolbars.md: ayudar a confirmar la ubicación). */
const enlacesSeccion = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-seccion]'));
const secciones = enlacesSeccion.map((a) => document.getElementById(a.dataset.seccion ?? ''));
const navIndicador = document.querySelector<HTMLElement>('.nav-indicador');

if (navIndicador && enlacesSeccion.length && secciones.every(Boolean)) {
  const indicador = crearIndicador(navIndicador, 8, 0, false);
  let actual: HTMLAnchorElement | null = null;

  const revisarSeccion = () => {
    const linea = window.innerHeight * 0.35;
    const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let nuevo: HTMLAnchorElement | null = alFinal ? enlacesSeccion[enlacesSeccion.length - 1] : null;
    if (!nuevo) {
      secciones.forEach((seccion, i) => {
        const r = seccion!.getBoundingClientRect();
        if (r.top <= linea && r.bottom > linea) nuevo = enlacesSeccion[i];
      });
    }
    if (nuevo === actual) return;
    actual?.removeAttribute('aria-current');
    actual = nuevo;
    if (actual) {
      actual.setAttribute('aria-current', 'true');
      indicador.mover(actual);
    } else {
      indicador.ocultar();
    }
  };

  const recolocar = () => actual && indicador.fijar(actual);
  addEventListener('scroll', revisarSeccion, { passive: true });
  addEventListener('resize', recolocar);
  document.fonts?.ready.then(recolocar);
  revisarSeccion();
}

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

  // Indicador: un solo subrayado que viaja de un filtro al otro.
  const marcaFiltro = filaFiltro.querySelector<HTMLElement>('.filtro-indicador');
  const indicador = marcaFiltro ? crearIndicador(marcaFiltro, 9, 12) : null;
  let activo = botones.find((b) => b.getAttribute('aria-pressed') === 'true') ?? botones[0];
  const colocar = () => indicador?.fijar(activo);
  colocar();
  new ResizeObserver(colocar).observe(filaFiltro);
  document.fonts?.ready.then(colocar);

  // Las tarjetas que siguen visibles se deslizan desde donde se ven hasta su nuevo lugar.
  type Movil = { x: Resorte; y: Resorte; o: Resorte };
  const moviles = new Map<HTMLElement, Movil>();
  const movilDe = (tarjeta: HTMLElement): Movil => {
    let m = moviles.get(tarjeta);
    if (!m) {
      const enlace = tarjeta.querySelector<HTMLElement>('a')!;
      const pintar = () => {
        const { x, y, o } = m!;
        enlace.style.transform = x.valor || y.valor ? `translate(${x.valor}px, ${y.valor}px)` : '';
        enlace.style.opacity = o.valor < 1 ? String(Math.max(0, o.valor)) : '';
      };
      m = {
        x: new Resorte(0, { respuesta: 0.4, alCambiar: pintar }),
        y: new Resorte(0, { respuesta: 0.4, alCambiar: pintar }),
        o: new Resorte(1, { respuesta: 0.3, precision: 0.001, alCambiar: pintar }),
      };
      moviles.set(tarjeta, m);
    }
    return m;
  };

  const aplicar = (filtro: string) => {
    const antes = new Map<HTMLElement, DOMRect>();
    for (const t of tarjetas) if (!t.hidden) antes.set(t, t.getBoundingClientRect());

    let visibles = 0;
    for (const tarjeta of tarjetas) {
      const usa = filtro === 'todos' || (tarjeta.dataset.filtros ?? '').split(' ').includes(filtro);
      tarjeta.hidden = !usa;
      if (usa) {
        visibles++;
        entrar(tarjeta);
      }
    }

    if (!movimientoReducido()) {
      for (const tarjeta of tarjetas) {
        if (tarjeta.hidden) continue;
        const m = movilDe(tarjeta);
        const previo = antes.get(tarjeta);
        const ahora = tarjeta.getBoundingClientRect();
        // Parte desde su posición visible actual (incluye un deslizamiento en curso) y conserva la velocidad.
        const dx = previo ? previo.left + m.x.valor - ahora.left : 0;
        const dy = previo ? previo.top + m.y.valor - ahora.top : 0;
        // Un viaje más largo que media pantalla deja de ser breve (HIG, motion.md): aparece en su lugar.
        if (previo && Math.hypot(dx, dy) < window.innerHeight * 0.6) {
          m.x.valor = dx;
          m.y.valor = dy;
          m.x.a(0);
          m.y.a(0);
        } else {
          m.x.fijar(0);
          m.y.fijar(0);
          m.o.fijar(0);
          m.o.a(1);
        }
      }
    }

    if (anuncio) {
      const plantilla = (visibles === 1 ? anuncio.dataset.uno : anuncio.dataset.varios) ?? '';
      anuncio.textContent = plantilla.replace('{n}', String(visibles));
    }
  };

  for (const boton of botones) {
    boton.addEventListener('click', () => {
      activo = boton;
      botones.forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
      indicador?.mover(boton);
      aplicar(boton.dataset.filtro ?? 'todos');
    });
  }
}

/* Copiar el correo: sin JS el botón queda oculto y basta el enlace mailto. */
const avisoCopia = document.querySelector<HTMLElement>('[data-aviso-copia]');
document.querySelectorAll<HTMLButtonElement>('[data-copiar]').forEach((boton) => {
  if (!navigator.clipboard) return;
  boton.hidden = false;
  const original = boton.textContent ?? '';
  let espera = 0;
  boton.addEventListener('click', async () => {
    let mensaje = boton.dataset.hecho ?? '';
    try {
      await navigator.clipboard.writeText(boton.dataset.copiar ?? '');
      boton.classList.add('hecho');
    } catch {
      mensaje = boton.dataset.error ?? '';
    }
    boton.textContent = mensaje;
    if (avisoCopia) avisoCopia.textContent = mensaje;
    clearTimeout(espera);
    espera = window.setTimeout(() => {
      boton.textContent = original;
      boton.classList.remove('hecho');
      if (avisoCopia) avisoCopia.textContent = '';
    }, 2000);
  });
});
