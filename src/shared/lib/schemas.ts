import { z } from 'zod'

export const post = z.object({
	title: z.string(),
	summary: z.string(),
	content: z.string(),
	publishedAt: z
		.string()
		.or(z.date())
		.transform(val => new Date(val)),
	updatedAt: z
		.string()
		.optional()
		.transform(str => (str !== undefined && str !== '' ? new Date(str) : undefined)),
	heroImage: z.string().optional()
})

export const reference = (name: string) =>
	z.object({
		id: z.string(), // slug
		name: z.string(),
		type: z.literal(name)
	})

export const note = z.object({
	title: z.string(),
	content: z.string(),
	publishedAt: z
		.string()
		.or(z.date())
		.transform(val => new Date(val))
		.optional(),
	relatedPosts: z.array(reference('posts')).optional(),
	relatedNotes: z.array(reference('notes')).optional()
})