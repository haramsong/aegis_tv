// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui'],
  css: ['@/assets/scss/main.scss'],
  quasar: {
    lang: 'ko-KR',
    extras: {
      fontIcons: ['material-icons'],
    },
    plugins: ['Notify', 'Loading'],
  },
});
