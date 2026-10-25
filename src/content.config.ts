import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    tipo: z.enum(['cliente', 'propio', 'docencia']),
    cliente: z.string(),
    rol: z.string(),
    periodo: z.string(),
    anio: z.number(),
    stack: z.array(z.string()),
    filtros: z.array(
      z.enum(['node', 'react', 'mysql', 'supabase', 'aws', 'python', 'flutter']),
    ),
    imagen: z.string().nullable(),
    repo: z.string().nullable(),
    demo: z.string().nullable(),
    privado: z.boolean(),
    orden: z.number(),
    galeria: z
      .array(z.object({ src: z.string(), ancho: z.number(), alto: z.number(), pie: z.string() }))
      .default([]),
  }),
});

export const collections = { proyectos };
