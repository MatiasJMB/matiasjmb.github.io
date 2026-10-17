import type { Lang } from '../i18n/ui';

/** Rutas publicadas de las fotos de Valparaíso. */
export const FOTOS = {
  concepcion: '/valparaiso/ascensor-concepcion.jpg',
  puerto: '/valparaiso/puerto.jpg',
  peral: '/valparaiso/ascensor-el-peral.jpg',
  artilleria: '/valparaiso/cerro-artilleria.jpg',
} as const;

export interface Credito {
  src: string;
  titulo: string;
  autor: string;
  licencia: string;
  licenciaUrl: string;
  url: string;
  alt: Record<Lang, string>;
}

/** Datos tomados de assets/credits.json. */
export const creditos: Credito[] = [
  {
    src: FOTOS.concepcion,
    titulo: 'Ascensor Concepción. Valparaíso, Chile, 31 de diciembre de 2025',
    autor: 'Carlos Teixidor Cadenas',
    licencia: 'CC BY 4.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by/4.0/',
    url: 'https://commons.wikimedia.org/w/index.php?curid=181438397',
    alt: {
      es: 'Ascensor Concepción, en un cerro de Valparaíso',
      en: 'Ascensor Concepción, on a hill in Valparaíso',
    },
  },
  {
    src: FOTOS.artilleria,
    titulo: 'Cerro Artillería desde el puerto de Valparaíso',
    autor: 'Dario Alpern',
    licencia: 'CC BY-SA 3.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    url: 'https://commons.wikimedia.org/w/index.php?curid=16505085',
    alt: {
      es: 'Cerro Artillería visto desde el puerto de Valparaíso',
      en: 'Cerro Artillería seen from the port of Valparaíso',
    },
  },
  {
    src: FOTOS.peral,
    titulo: 'Ascensor El Peral, tipo funicular, año 1902, Valparaíso, Chile',
    autor: 'Carlos Teixidor Cadenas',
    licencia: 'CC BY-SA 4.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    url: 'https://commons.wikimedia.org/w/index.php?curid=57253776',
    alt: {
      es: 'Ascensor El Peral, funicular de 1902, en Valparaíso',
      en: 'Ascensor El Peral, a 1902 funicular in Valparaíso',
    },
  },
  {
    src: FOTOS.puerto,
    titulo: 'La ciudad de Valparaíso desde el Cerro Artillería, Chile 2019',
    autor: 'Carlos Teixidor Cadenas',
    licencia: 'CC BY-SA 4.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    url: 'https://commons.wikimedia.org/w/index.php?curid=79486465',
    alt: {
      es: 'La ciudad de Valparaíso y su bahía desde el Cerro Artillería',
      en: 'The city of Valparaíso and its bay from Cerro Artillería',
    },
  },
];

export function altFoto(src: string, lang: Lang): string {
  return creditos.find((c) => c.src === src)?.alt[lang] ?? '';
}
