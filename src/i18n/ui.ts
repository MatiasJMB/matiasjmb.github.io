export type Lang = 'es' | 'en';
export const idiomas: Lang[] = ['es', 'en'];

const es = {
  saltar: 'Saltar al contenido',
  marca: 'Matías Moreno',

  metaInicio: 'Matías Moreno · Desarrollador full stack en Valparaíso',
  metaInicioDesc:
    'Matías Moreno, desarrollador full stack en Valparaíso, Chile. Sistemas web a medida con Node.js, React y MySQL.',

  heroLead: 'Desarrollador Full Stack en Valparaíso, Chile.',
  heroTexto:
    'Construyo sistemas web a medida para empresas: APIs en Node.js y Express, interfaces en React con TypeScript y bases de datos MySQL o PostgreSQL, del modelado de datos al despliegue en producción.',
  heroDisponible: 'Disponible para trabajo remoto o presencial en la V Región.',
  verProyectos: 'Ver proyectos',
  enlaceCv: 'CV (PDF)',
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
  stackPrefijo: 'Stack',

  sobreMiTitulo: 'Sobre mí',
  sobreMi: [
    'Soy ingeniero civil en informática, egresado de la Universidad de Playa Ancha en 2025. Desde entonces desarrollo sistemas web para empresas y clientes particulares: los levanto con el cliente, los construyo de punta a punta y los dejo funcionando en su hosting.',
    'Me interesa el software que resuelve un problema concreto del día a día de un negocio: certificados, órdenes de trabajo, mantenciones, notas. Trabajo con Node.js, React y SQL, y también he construido arquitecturas serverless en AWS.',
  ],

  contactoTitulo: 'Contacto',
  contactoFrase: 'Estoy disponible para proyectos freelance y puestos de desarrollo full stack.',
  contactoBoton: 'Escribir un correo',
  contactoAsunto: 'Contacto desde el portafolio',
  contactoCorreo: 'Correo',
  contactoTelefono: 'Teléfono',
  contactoLinkedin: 'LinkedIn',
  contactoGithub: 'GitHub',

  menuProyectos: 'Proyectos',
  menuExperiencia: 'Experiencia',
  menuContacto: 'Contacto',
  menuCv: 'CV',
  menuEtiqueta: 'Secciones',
  pieEtiqueta: 'Enlaces',
  idioma: 'Idioma',
  temaOscuro: 'Oscuro',
  temaClaro: 'Claro',
  legal: '© 2026 Matías Moreno',

  volver: '← Proyectos',
  navProyectos: 'Navegación entre proyectos',
  defCliente: 'Cliente',
  defRol: 'Rol',
  defPeriodo: 'Período',
  defStack: 'Stack',
  verCodigo: 'Ver código',
  verDemo: 'Ver demo',
  privado: 'Código privado por confidencialidad.',
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
    'I build custom web systems for businesses: Node.js and Express APIs, React and TypeScript interfaces, MySQL or PostgreSQL databases, from data modelling to production deployment.',
  heroDisponible: 'Available for remote work or on-site in Valparaíso.',
  verProyectos: 'View projects',
  enlaceCv: 'CV (PDF)',
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
    "I'm a civil engineer in computer science, a 2025 graduate of Universidad de Playa Ancha. Since then I've built web systems for companies and individual clients: I scope them with the client, build them end to end and leave them running on their hosting.",
    'I like software that solves a concrete, everyday problem for a business: certificates, work orders, maintenance, grades. I work with Node.js, React and SQL, and I have also built serverless architectures on AWS.',
  ],

  contactoTitulo: 'Contact',
  contactoFrase: "I'm available for freelance projects and full stack roles.",
  contactoBoton: 'Send an email',
  contactoAsunto: 'Contact from the portfolio',
  contactoCorreo: 'Email',
  contactoTelefono: 'Phone',
  contactoLinkedin: 'LinkedIn',
  contactoGithub: 'GitHub',

  menuProyectos: 'Projects',
  menuExperiencia: 'Experience',
  menuContacto: 'Contact',
  menuCv: 'CV',
  menuEtiqueta: 'Sections',
  pieEtiqueta: 'Links',
  idioma: 'Language',
  temaOscuro: 'Dark',
  temaClaro: 'Light',
  legal: '© 2026 Matías Moreno',

  volver: '← Projects',
  navProyectos: 'Project navigation',
  defCliente: 'Client',
  defRol: 'Role',
  defPeriodo: 'Period',
  defStack: 'Stack',
  verCodigo: 'View code',
  verDemo: 'View demo',
  privado: 'Private code due to confidentiality.',
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
