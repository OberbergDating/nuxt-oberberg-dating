import tailwindcss from '@tailwindcss/vite';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@vite-pwa/nuxt'],
    pwa: {
        /* PWA options */
    },
    css: ['~/app.css'],
    vite: {
        plugins: [tailwindcss()],
    },
});
