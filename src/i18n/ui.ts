export type Lang = 'es' | 'en';
export const idiomas: Lang[] = ['es', 'en'];

const es = {
  saltar: 'Saltar al contenido',
  marca: 'Matías Moreno',

  metaInicio: 'Matías Moreno · Desarrollador full stack en Valparaíso',
  metaInicioDesc:
    'Matías Moreno, desarrollador full stack en Valparaíso, Chile. Sistemas web a medida con Node.js, React y MySQL.',

  heroLead: 'Desarrollador full stack en Valparaíso, Chile.',
  heroTexto:
    'Construyo sistemas web a medida para empresas, desde el levantamiento de requerimientos hasta el despliegue en producción.',
  heroDisponible: 'Disponible para trabajo remoto o presencial.',
  verProyectos: 'Ver proyectos',
  enlaceCv: 'Ver CV (PDF)',
  enlaceGithub: 'GitHub',
  enlaceLinkedin: 'LinkedIn',

  proyectosTitulo: 'Proyectos',
  filtroEtiqueta: 'Filtrar por tecnología',
  filtroTodos: 'Todos',
  conteoUno: '{n} proyecto',
  conteoVarios: '{n} proyectos',
  tipoCliente: 'Cliente',
  tipoPropio: 'Propio',
  tipoDocencia: 'Docencia',

  experienciaTitulo: 'Experiencia',
  stackPrefijo: 'Tecnologías',

  sobreMiTitulo: 'Sobre mí',
  sobreMi: [
    'Soy ingeniero civil en informática, egresado de la Universidad de Playa Ancha en 2025. Trabajo como desarrollador full stack independiente: levanto los requerimientos con cada cliente, construyo el sistema completo y lo dejo funcionando en su servidor.',
    'Me interesa el software que resuelve problemas concretos de un negocio, como certificados, órdenes de trabajo, mantenciones o calificaciones. Trabajo principalmente con Node.js, React y SQL, y también he diseñado una arquitectura serverless en AWS.',
  ],

  contactoTitulo: 'Contacto',
  contactoFrase: 'Estoy disponible para proyectos freelance y puestos de desarrollo full stack.',
  contactoBoton: 'Escribir un correo',
  contactoAsunto: 'Contacto desde el portafolio',
  contactoCorreo: 'Correo',
  contactoTelefono: 'Teléfono',
  contactoLinkedin: 'LinkedIn',
  contactoGithub: 'GitHub',
  copiar: 'Copiar',
  copiarEtiqueta: 'Copiar correo',
  copiado: 'Copiado',
  copiarError: 'No se pudo copiar',

  menuProyectos: 'Proyectos',
  menuExperiencia: 'Experiencia',
  menuContacto: 'Contacto',
  menuCv: 'CV',
  menuEtiqueta: 'Secciones',
  pieEtiqueta: 'Enlaces',
  idioma: 'Idioma',
  temaEtiqueta: 'Modo oscuro',
  legal: '© 2026 Matías Moreno',

  volver: '← Proyectos',
  navProyectos: 'Navegación entre proyectos',
  defCliente: 'Cliente',
  defRol: 'Rol',
  defPeriodo: 'Período',
  defStack: 'Tecnologías',
  verCodigo: 'Ver código',
  verSitio: 'Visitar {sitio}',
  privado: 'El código es privado por confidencialidad con el cliente.',
  siguiente: 'Siguiente proyecto:',
  altCaptura: 'Pantalla de inicio de {titulo}',

  noEncontradoTitulo: 'Página no encontrada',
  noEncontradoTexto: 'La dirección no existe o cambió de lugar.',
  noEncontradoVolver: 'Volver al inicio',
};

export type Ui = typeof es;

const en: Ui = {
  saltar: 'Skip to content',
  marca: 'Matías Moreno',

  metaInicio: 'Matías Moreno · Full stack developer in Valparaíso',
  metaInicioDesc:
    'Matías Moreno, full stack developer based in Valparaíso, Chile. Custom web systems with Node.js, React and MySQL.',

  heroLead: 'Full stack developer based in Valparaíso, Chile.',
  heroTexto:
    'I build custom web systems for businesses, from requirements gathering to production deployment.',
  heroDisponible: 'Available for remote or on-site work.',
  verProyectos: 'View projects',
  enlaceCv: 'View CV (PDF)',
  enlaceGithub: 'GitHub',
  enlaceLinkedin: 'LinkedIn',

  proyectosTitulo: 'Projects',
  filtroEtiqueta: 'Filter by technology',
  filtroTodos: 'All',
  conteoUno: '{n} project',
  conteoVarios: '{n} projects',
  tipoCliente: 'Client',
  tipoPropio: 'Own',
  tipoDocencia: 'Teaching',

  experienciaTitulo: 'Experience',
  stackPrefijo: 'Stack',

  sobreMiTitulo: 'About',
  sobreMi: [
    'I studied Computer Engineering at Universidad de Playa Ancha and graduated in 2025. I work as an independent full stack developer: I gather requirements with each client, build the complete system and leave it running on their server.',
    "I'm drawn to software that solves concrete business problems, such as certificates, work orders, maintenance or grades. I work mainly with Node.js, React and SQL, and I have also designed a serverless architecture on AWS.",
  ],

  contactoTitulo: 'Contact',
  contactoFrase: "I'm available for freelance projects and full stack roles.",
  contactoBoton: 'Send an email',
  contactoAsunto: 'Contact from the portfolio',
  contactoCorreo: 'Email',
  contactoTelefono: 'Phone',
  contactoLinkedin: 'LinkedIn',
  contactoGithub: 'GitHub',
  copiar: 'Copy',
  copiarEtiqueta: 'Copy email',
  copiado: 'Copied',
  copiarError: "Couldn't copy",

  menuProyectos: 'Projects',
  menuExperiencia: 'Experience',
  menuContacto: 'Contact',
  menuCv: 'CV',
  menuEtiqueta: 'Sections',
  pieEtiqueta: 'Links',
  idioma: 'Language',
  temaEtiqueta: 'Dark mode',
  legal: '© 2026 Matías Moreno',

  volver: '← Projects',
  navProyectos: 'Project navigation',
  defCliente: 'Client',
  defRol: 'Role',
  defPeriodo: 'Period',
  defStack: 'Stack',
  verCodigo: 'View code',
  verSitio: 'Visit {sitio}',
  privado: 'The code is private to protect client confidentiality.',
  siguiente: 'Next project:',
  altCaptura: 'Home screen of {titulo}',

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
