import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
	}),
});

const team = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		role: z.string(),
		bio: z.string(),
		photo: z.string().optional(),
		linkedin: z.string().optional(),
		twitter: z.string().optional(),
		order: z.number().optional().default(99),
	}),
});

const categories = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		categorySlug: z.string(),
		description: z.string().optional(),
		color: z.string().optional(),
		icon: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	type: 'content',
	schema: z.object({
		quote: z.string(),
		author: z.string(),
		company: z.string().optional(),
		role: z.string().optional(),
		avatar: z.string().optional(),
		rating: z.number().optional(),
		featured: z.boolean().optional().default(false),
	}),
});

export const collections = { blog, team, categories, testimonials };
