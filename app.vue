<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { usePocketBase } from './composable/pocketbase';

const cities = useLocalStorage('cities', [], {});
const pb = usePocketBase();

onMounted(async () => {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
            // console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    cities.value = await pb.collection('cities').getFullList(25);
});

useHead({
    title: 'Oberberg.dating',
    link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            href: '/android-chrome-512x512.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            href: '/android-chrome-192x192.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
});
</script>