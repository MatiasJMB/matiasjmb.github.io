/*
 * Resortes con los dos parámetros de Apple: amortiguación (rebote) y respuesta (rapidez, en s).
 * Siempre parten del valor que se ve en pantalla, así que se pueden interrumpir en cualquier momento.
 */

const reducido = window.matchMedia('(prefers-reduced-motion: reduce)');
const activos = new Set<Resorte>();
let ultimo = 0;
let cuadro = 0;

function avanzar(ahora: number) {
  const dt = Math.min((ahora - ultimo) / 1000, 1 / 30);
  ultimo = ahora;
  for (const r of activos) if (!r.paso(dt)) activos.delete(r);
  cuadro = activos.size ? requestAnimationFrame(avanzar) : 0;
}

function despertar(r: Resorte) {
  activos.add(r);
  if (!cuadro) {
    ultimo = performance.now();
    cuadro = requestAnimationFrame(avanzar);
  }
}

interface Opciones {
  amortiguacion?: number;
  respuesta?: number;
  precision?: number;
  alCambiar?: (valor: number) => void;
  alReposar?: (valor: number) => void;
}

export class Resorte {
  valor: number;
  destino: number;
  velocidad = 0;
  private amortiguacion: number;
  private respuesta: number;
  private precision: number;
  private d: number;
  private r: number;
  private alCambiar?: (valor: number) => void;
  private alReposar?: (valor: number) => void;

  constructor(valor: number, o: Opciones = {}) {
    this.valor = this.destino = valor;
    this.amortiguacion = this.d = o.amortiguacion ?? 1;
    this.respuesta = this.r = o.respuesta ?? 0.4;
    this.precision = o.precision ?? 0.1;
    this.alCambiar = o.alCambiar;
    this.alReposar = o.alReposar;
  }

  /** Cambia el destino sin saltos: sigue desde el valor y la velocidad actuales. */
  a(destino: number, o: { velocidad?: number; amortiguacion?: number; respuesta?: number } = {}) {
    this.destino = destino;
    this.d = o.amortiguacion ?? this.amortiguacion;
    this.r = o.respuesta ?? this.respuesta;
    if (o.velocidad !== undefined) this.velocidad = o.velocidad;
    if (reducido.matches) {
      this.d = 1;
      this.r = Math.min(this.r, 0.15);
      this.velocidad = 0;
    }
    despertar(this);
  }

  /** Seguimiento directo: el valor es el dedo. */
  fijar(valor: number) {
    this.valor = this.destino = valor;
    this.velocidad = 0;
    activos.delete(this);
    this.alCambiar?.(valor);
  }

  /** Atrapar en pleno movimiento: se queda en el valor visible. */
  detener() {
    this.destino = this.valor;
    this.velocidad = 0;
    activos.delete(this);
  }

  paso(dt: number) {
    const k = (2 * Math.PI / this.r) ** 2;
    const c = (4 * Math.PI * this.d) / this.r;
    for (let t = dt; t > 0; t -= 1 / 480) {
      const h = Math.min(1 / 480, t);
      this.velocidad += (-k * (this.valor - this.destino) - c * this.velocidad) * h;
      this.valor += this.velocidad * h;
    }
    const listo =
      Math.abs(this.valor - this.destino) < this.precision && Math.abs(this.velocidad) < this.precision * 10;
    if (listo) {
      this.valor = this.destino;
      this.velocidad = 0;
    }
    this.alCambiar?.(this.valor);
    if (listo) this.alReposar?.(this.valor);
    return !listo;
  }
}

/** Velocidad del puntero a partir de sus últimos 100 ms. */
export class Rastreador {
  private muestras: { x: number; t: number }[] = [];

  reiniciar() {
    this.muestras.length = 0;
  }

  agregar(x: number, t: number) {
    this.muestras.push({ x, t });
    while (this.muestras.length > 2 && t - this.muestras[0].t > 100) this.muestras.shift();
  }

  velocidad() {
    const m = this.muestras;
    if (m.length < 2) return 0;
    const dt = (m[m.length - 1].t - m[0].t) / 1000;
    return dt > 0 ? (m[m.length - 1].x - m[0].x) / dt : 0;
  }
}

/** Dónde terminaría un gesto lanzado con esa velocidad (px/s). */
export const proyectar = (velocidad: number, tasa = 0.998) => ((velocidad / 1000) * tasa) / (1 - tasa);

/** Pasado el límite, el elemento sigue cada vez menos al dedo. */
export function ceder(valor: number, min: number, max: number, dimension: number, c = 0.55) {
  const banda = (exceso: number) => (exceso * dimension * c) / (dimension + c * Math.abs(exceso));
  if (valor < min) return min - banda(min - valor);
  if (valor > max) return max + banda(valor - max);
  return valor;
}

export const movimientoReducido = () => reducido.matches;
