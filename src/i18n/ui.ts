export type Lang = 'es' | 'en';
export const idiomas: Lang[] = ['es', 'en'];

const es = {
  saltar: 'Saltar al contenido',
  marca: 'Matías Moreno',
  rol: 'Desarrollador Full Stack · Node.js · React · Python',

  metaInicio: 'Matías Moreno · Desarrollador full stack en Valparaíso',
  metaInicioDesc:
    'Desarrollador full stack en Valparaíso. Sistemas web a medida para empresas chilenas con Node.js, React y MySQL, de la base de datos al despliegue.',

  heroTitular1: 'Sistemas a medida',
  heroTitular2: 'desde Valparaíso',
  heroFrase:
    'Desarrollador full stack: construyo sistemas web para empresas chilenas, de la base de datos al despliegue.',
  verProyectos: 'Ver proyectos',
  enlaceCv: 'CV (PDF)',
  enlaceGithub: 'GitHub',
  enlaceLinkedin: 'LinkedIn',

  proyectosTitulo: 'Proyectos',
  filtroEtiqueta: 'Filtrar por tecnología',
  filtroTodos: 'Todos',
  conteoTodos: '{total} proyectos',
  conteoParcial: '{n} de {total} proyectos',
  grupoCliente: 'Para clientes',
  grupoPropio: 'Propios',
  grupoDocencia: 'Docencia',

  sobreMi: 'Sobre mí',
  carta: [
    'Soy Matías, desarrollador full stack en Valparaíso. Egresé de Ingeniería Civil en Informática en la Universidad de Playa Ancha en 2025 y, desde fines de ese año, trabajo como freelance.',
    'Construyo sistemas web a medida, de la base de datos a la pantalla. Lo último: el sistema administrativo de CEGAS, una plataforma para una empresa de servicio técnico de camiones y un CRM para talleres mecánicos.',
    'Trabajo sobre todo con Node.js, React y MySQL, y también con Python, Supabase y AWS. Cuido la seguridad, las pruebas y que el sistema quede funcionando en su hosting.',
    'Además hago clases de desarrollo de apps móviles desde cero. Trabajo desde Valparaíso y también en remoto. Si tienes un sistema en mente, escríbeme.',
  ],

  trayectoriaTitulo: 'Trayectoria',
  stack: [
    'Node.js · Express · React · TypeScript · Python',
    'MySQL · PostgreSQL · Supabase · AWS · Flutter',
  ],

  contactoPregunta1: '¿Tienes un sistema en mente?',
  contactoPregunta2: 'Cuéntame en una línea.',
  contactoCampo: 'Tu mensaje',
  contactoEnviar: 'Enviar',
  contactoAsunto: 'Contacto desde el portafolio',
  contactoCorreo: 'Correo',
  contactoTelefono: 'Teléfono',
  contactoUbicacion: 'Ubicación',
  contactoUbicacionValor: 'Valparaíso, Chile',

  menuProyectos: 'Proyectos',
  menuSobreMi: 'Sobre mí',
  menuTrayectoria: 'Trayectoria',
  menuContacto: 'Contacto',
  menuCv: 'CV',
  pieMenu: 'Menú',
  pieRedes: 'Redes',
  idioma: 'Idioma',
  temaOscuro: 'Oscuro',
  temaClaro: 'Claro',
  creditosTitulo: 'Créditos de las fotos',
  legal: '© 2026 Matías Moreno',

  volver: '← Proyectos',
  defCliente: 'Cliente',
  defRol: 'Rol',
  defPeriodo: 'Período',
  defStack: 'Stack',
  verCodigo: 'Ver código',
  verDemo: 'Ver demo',
  privado: 'Código privado por confidencialidad',
  siguiente: 'Siguiente proyecto →',

  noEncontradoTitulo: 'Página no encontrada',
  noEncontradoTexto: 'La dirección no existe o cambió de lugar.',
  noEncontradoVolver: 'Volver al inicio',
};

export type Ui = typeof es;

const en: Ui = {
  saltar: 'Skip to content',
  marca: 'Matías Moreno',
  rol: 'Full Stack Developer · Node.js · React · Python',

  metaInicio: 'Matías Moreno · Full stack developer in Valparaíso',
  metaInicioDesc:
    'Full stack developer in Valparaíso, Chile. Custom web systems for Chilean companies with Node.js, React and MySQL, from the database to deployment.',

  heroTitular1: 'Custom software',
  heroTitular2: 'from Valparaíso',
  heroFrase:
    'Full stack developer: I build web systems for Chilean companies, from the database to deployment.',
  verProyectos: 'See projects',
  enlaceCv: 'CV (PDF)',
  enlaceGithub: 'GitHub',
  enlaceLinkedin: 'LinkedIn',

  proyectosTitulo: 'Projects',
  filtroEtiqueta: 'Filter by technology',
  filtroTodos: 'All',
  conteoTodos: '{total} projects',
  conteoParcial: '{n} of {total} projects',
  grupoCliente: 'For clients',
  grupoPropio: 'Own projects',
  grupoDocencia: 'Teaching',

  sobreMi: 'About me',
  carta: [
    "I'm Matías, a full stack developer in Valparaíso, Chile. I completed Civil Engineering in Computer Science at Universidad de Playa Ancha in 2025 and, since late that year, I've worked as a freelancer.",
    'I build custom web systems, from the database to the screen. Most recently: the administrative system for CEGAS, a platform for a truck fleet service company and a CRM for diesel repair shops.',
    'I work mostly with Node.js, React and MySQL, and also with Python, Supabase and AWS. I care about security, tests, and leaving the system running on its hosting.',
    'I also teach mobile app development from scratch. I work from Valparaíso and remotely. If you have a system in mind, write to me.',
  ],

  trayectoriaTitulo: 'Timeline',
  stack: [
    'Node.js · Express · React · TypeScript · Python',
    'MySQL · PostgreSQL · Supabase · AWS · Flutter',
  ],

  contactoPregunta1: 'Have a system in mind?',
  contactoPregunta2: 'Tell me in one line.',
  contactoCampo: 'Your message',
  contactoEnviar: 'Send',
  contactoAsunto: 'Contact from the portfolio',
  contactoCorreo: 'Email',
  contactoTelefono: 'Phone',
  contactoUbicacion: 'Location',
  contactoUbicacionValor: 'Valparaíso, Chile',

  menuProyectos: 'Projects',
  menuSobreMi: 'About me',
  menuTrayectoria: 'Timeline',
  menuContacto: 'Contact',
  menuCv: 'CV',
  pieMenu: 'Menu',
  pieRedes: 'Links',
  idioma: 'Language',
  temaOscuro: 'Dark',
  temaClaro: 'Light',
  creditosTitulo: 'Photo credits',
  legal: '© 2026 Matías Moreno',

  volver: '← Projects',
  defCliente: 'Client',
  defRol: 'Role',
  defPeriodo: 'Period',
  defStack: 'Stack',
  verCodigo: 'View code',
  verDemo: 'View demo',
  privado: 'Private code due to confidentiality',
  siguiente: 'Next project →',

  noEncontradoTitulo: 'Page not found',
  noEncontradoTexto: 'The address does not exist or has moved.',
  noEncontradoVolver: 'Back to home',
};

export const ui: Record<Lang, Ui> = { es, en };

type ClavesTexto = { [K in keyof Ui]: Ui[K] extends string ? K : never }[keyof Ui];
type ClavesLista = { [K in keyof Ui]: Ui[K] extends string[] ? K : never }[keyof Ui];

export function t(lang: Lang, clave: ClavesTexto): string {
  return ui[lang][clave];
}

export function lista(lang: Lang, clave: ClavesLista): string[] {
  return ui[lang][clave];
}

/** Rutas del sitio por idioma. */
export const rutaInicio = (lang: Lang): string => (lang === 'es' ? '/' : '/en/');
export const rutaProyecto = (lang: Lang, slug: string): string =>
  lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
export const slugDe = (id: string): string => id.slice(id.indexOf('/') + 1);
