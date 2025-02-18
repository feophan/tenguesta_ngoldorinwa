// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

import icon from 'astro-icon';
import myScriptInjection from './plugins/script-injection.js';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  site: 'https://feophan.github.io',
  base: '/tenguesta_ngoldorinwa',
    integrations: [starlight({
        plugins: [starlightImageZoom()],
        title: 'Tenguesta Goldorinwa',
        lastUpdated: true, 
        social: {
            github: 'https://github.com/feophan/tenguesta_ngoldorinwa',
        },
        sidebar: [
          {
            label: 'Phonology',
            translations: {'ru': 'Фонология'},
            // Autogenerate a group of links for the 'constellations' directory.
            autogenerate: { directory: 'phonology' },
          },
          {
            label: 'Morphology',
            translations: {'ru': 'Морфология'},
            // Autogenerate a group of links for the 'constellations' directory.
            autogenerate: { directory: 'morphology' },
          },
          {
            label: 'Syntax',
            translations: {'ru': 'Синтаксис'},
            // Autogenerate a group of links for the 'constellations' directory.
            autogenerate: { directory: 'syntax' },
          }
        ],
        // Set English as the default language for this site.
    defaultLocale: 'en',
    locales: {
      // English docs in `src/content/docs/en/`
      en: {
        label: 'English'
      },
      // Russian docs in `src/content/docs/ru/`
      ru: {
        label: 'Русский'
      }
    },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css'],
        components: {
            // Override the default `SocialIcons` component.
            Header: './src/components/extHeader.astro',
            MobileMenuFooter: './src/components/extMobileMenuFooter.astro'
          }
        }), svelte(), icon(), myScriptInjection()]
});