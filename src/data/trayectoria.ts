import type { Lang } from '../i18n/ui';

export interface ItemTrayectoria {
  titulo: string;
  detalle: string;
  mes: string;
}
export interface GrupoTrayectoria {
  anio: string;
  items: ItemTrayectoria[];
}

export const trayectoria: Record<Lang, GrupoTrayectoria[]> = {
  es: [
    {
      anio: '2025',
      items: [
        {
          titulo: 'Práctica profesional',
          detalle: 'Ingeniería Civil en Informática, UPLA.',
          mes: 'oct',
        },
        {
          titulo: 'Egreso de Ingeniería Civil en Informática',
          detalle: 'Universidad de Playa Ancha, Valparaíso. Título en trámite.',
          mes: 'dic',
        },
        {
          titulo: 'Primeros proyectos freelance',
          detalle: 'Desarrollo full stack por encargo.',
          mes: 'fines',
        },
      ],
    },
    {
      anio: '2026',
      items: [
        {
          titulo: 'Ahora Pan',
          detalle: 'SaaS para panaderías: pedidos por WhatsApp y panel web en tiempo real.',
          mes: '2026',
        },
        {
          titulo: 'GymPulse, Plinko Live y Mecanízame',
          detalle: 'Retención para gimnasios en AWS, overlay para TikTok Live y CRM para talleres.',
          mes: 'jun',
        },
        {
          titulo: 'CEGAS: correos, anti-spam y sistema administrativo',
          detalle: 'Correos corporativos, formularios protegidos y un sistema web con Node.js y MySQL.',
          mes: 'ago',
        },
        {
          titulo: 'Plataforma para flota de camiones',
          detalle: 'Migración de datos históricos y reconstrucción con Node.js, MySQL y React.',
          mes: 'ago',
        },
        {
          titulo: 'Clases de desarrollo móvil',
          detalle: 'De App Inventor a Dart y Flutter, con material propio.',
          mes: 'durante 2026',
        },
        {
          titulo: 'Libro de notas y mantención con QR',
          detalle: 'Una app de calificaciones para un docente y una plataforma de mantención con códigos QR.',
          mes: 'oct',
        },
      ],
    },
  ],
  en: [
    {
      anio: '2025',
      items: [
        {
          titulo: 'Professional internship',
          detalle: 'Civil Engineering in Computer Science, UPLA.',
          mes: 'Oct',
        },
        {
          titulo: 'Finished Civil Engineering in Computer Science',
          detalle: 'Universidad de Playa Ancha, Valparaíso. Degree pending.',
          mes: 'Dec',
        },
        {
          titulo: 'First freelance projects',
          detalle: 'Commissioned full stack development.',
          mes: 'late',
        },
      ],
    },
    {
      anio: '2026',
      items: [
        {
          titulo: 'Ahora Pan',
          detalle: 'SaaS for bakeries: WhatsApp orders and a real-time web panel.',
          mes: '2026',
        },
        {
          titulo: 'GymPulse, Plinko Live and Mecanízame',
          detalle: 'Gym retention on AWS, a TikTok Live overlay and a CRM for repair shops.',
          mes: 'Jun',
        },
        {
          titulo: 'CEGAS: email, anti-spam and admin system',
          detalle: 'Corporate email, protected forms and a web system with Node.js and MySQL.',
          mes: 'Aug',
        },
        {
          titulo: 'Truck fleet platform',
          detalle: 'Historical data migration and a rebuild with Node.js, MySQL and React.',
          mes: 'Aug',
        },
        {
          titulo: 'Mobile development classes',
          detalle: 'From App Inventor to Dart and Flutter, with my own material.',
          mes: 'during 2026',
        },
        {
          titulo: 'Grade book and QR maintenance',
          detalle: 'A grading app for a teacher and a machinery maintenance platform with QR codes.',
          mes: 'Oct',
        },
      ],
    },
  ],
};
