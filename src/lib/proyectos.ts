import { getCollection, type CollectionEntry } from 'astro:content';
import { FOTOS } from '../data/creditos';
import type { Lang } from '../i18n/ui';
import { existePublico } from './publico';

export type Proyecto = CollectionEntry<'proyectos'>;

const rotacion = [FOTOS.concepcion, FOTOS.artilleria, FOTOS.peral, FOTOS.puerto];

/** Proyectos de un idioma, ordenados por `orden`. */
export async function proyectosDe(lang: Lang): Promise<Proyecto[]> {
  const todos = await getCollection('proyectos', ({ id }) => id.startsWith(`${lang}/`));
  return todos.sort((a, b) => a.data.orden - b.data.orden);
}

/** Ruta de la captura si el archivo existe en `public/`; si no, null. */
export function capturaDe(p: Proyecto): string | null {
  return existePublico(p.data.imagen) ? p.data.imagen : null;
}

/** Captura del proyecto o, si falta, una foto de Valparaíso según su posición. */
export function imagenFicha(p: Proyecto, posicion: number): string {
  return capturaDe(p) ?? rotacion[posicion % rotacion.length]!;
}
