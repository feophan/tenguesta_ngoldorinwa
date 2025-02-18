import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import { CH } from "./assets/constants";

export const collections = {
	docs: defineCollection({
	  loader: docsLoader(),
	  schema: (refs) =>
		docsSchema()(refs).extend({
			ID: z.string().optional(), // ✅ Extend schema to include ID
		  }).transform((entry) => {
		  let chapterNumber: number | undefined = undefined;
  
		  // Ensure ID exists and follows a structured format
		  if (entry.ID) {
			const [category, key] = entry.ID.split(".") as [keyof typeof CH, string]; // Split "P.SOU" into ["P", "SOU"]
  
			// Lookup chapter number in CH object
			if (CH[category] && CH[category][key as keyof typeof CH[typeof category]]) {
			  chapterNumber = CH[category][key as keyof typeof CH[typeof category]];
			}
		  }
  
		  return {
			...entry,
			sidebar: {
			  ...entry.sidebar, // Preserve existing Starlight sidebar settings
			  label: chapterNumber
				? `${chapterNumber}. ${entry.sidebar?.label || entry.title}`
				: entry.sidebar?.label || entry.title, // Preserve existing label if no chapter
			  order: chapterNumber ? chapterNumber : entry.sidebar?.order
			},
		  };
		}),
	}),
  };
