// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import exlintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-quasar-ui'],
	vite: {
		plugins: [exlintPlugin()],
	},
	quasar: {
		lang: 'ko-KR',
		extras: {
			fontIcons: ['material-icons'],
		},
	},
});
