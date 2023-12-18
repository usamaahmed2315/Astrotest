import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		excerpt: z.string(),
		faq: z.array(z.object({
			id: z.number(),
			question: z.string(),
			answer: z.string(),
			open: z.boolean().optional()
		})).optional()
	}),
});

export const collections = { posts };
