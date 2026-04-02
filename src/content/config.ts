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

const caseStudies = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		headline: z.string(),
		description: z.string(),
		roi: z.string(),
		info: z.string(), // e.g., "$10k Saved/mo"
		industry: z.string(),
		platform: z.string(),
		image: z.string(),
		featured: z.boolean().default(false),
		clientUrl: z.string().optional(),
		logoText: z.string().optional(),
		logoBrand: z.string().optional(),
		
		// Structured Content for the detail page
		challenges: z.array(z.object({
			title: z.string(),
			body: z.string()
		})).optional(),
		solutions: z.array(z.object({
			title: z.string(),
			body: z.string()
		})).optional(),
		results: z.string().optional(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { blog, team, categories, testimonials, caseStudies };
