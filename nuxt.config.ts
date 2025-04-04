import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [],
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    css: ['~/app.css'],
    vite: {
        plugins: [tailwindcss(),VitePWA({ registerType: 'autoUpdate' })],
    },
});
