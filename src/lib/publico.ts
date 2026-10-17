import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** Indica si un archivo de `public/` existe (se evalúa en el build estático). */
export function existePublico(ruta: string | null): ruta is string {
  return !!ruta && existsSync(join(process.cwd(), 'public', ruta));
}
