import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { existePublico } from './publico';

export type Proyecto = CollectionEntry<'proyectos'>;

export interface Captura {
  src: string;
  srcset: string;
}

/** Proyectos de un idioma, ordenados por `orden`. */
export async function proyectosDe(lang: Lang): Promise<Proyecto[]> {
  const todos = await getCollection('proyectos', ({ id }) => id.startsWith(`${lang}/`));
  return todos.sort((a, b) => a.data.orden - b.data.orden);
}

/** Captura (1920 px) y su variante de 960 px, si el archivo existe en `public/`; si no, null. */
export function capturaDe(p: Proyecto): Captura | null {
  const src = p.data.imagen;
  if (!existePublico(src)) return null;
  const chica = src.replace('.webp', '-960.webp');
  return { src, srcset: `${chica} 960w, ${src} 1920w` };
}
