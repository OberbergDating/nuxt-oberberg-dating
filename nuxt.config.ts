import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@vite-pwa/nuxt'],
    pwa: {
        /* PWA options */
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }]
        }
    },
    css: ['~/app.css'],
    vite: {
        plugins: [tailwindcss(),VitePWA({ registerType: 'autoUpdate' })],
    },
});
