import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const portfolio = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/portfolio',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    logoId: z.string(),
    role: z.string(),
    year: z.string(),
    technologies: z.array(z.string()),
    url: z.string().optional(),
    excerpt: z.string(),
    order: z.number().default(0),
    logoNeedsBackground: z.boolean().optional(),
  }),
});

export const collections = { portfolio };
