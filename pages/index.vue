<template>
    <section class="bg-gray-400 pb-6 border-2">
        <section class="page w-full h-96 bg-cover bg-bottom bg-right"
            :style="{ 'background-image': 'url(/unsplash/skyline.jpg)' }">
            <section class="headline pt-12 px-12">
                <p class="text-lg text-black ">Oberberg.dating - die Plattform für Daten im Oberberg</p>
                <h2 class="font-bold text-2xl text-black hidden lg:block">Jetzt gemeinsam durschstarten</h2>
            </section>
        </section>
        <section class="overlay bg-white rounded-t-xl text-black -mt-24 mx-6 px-6 py-6">
            <section class="headline flex flex-col md:flex-row md:justify-between">
                <section class="text">
                    <p class="text-sm">Jetzt registrieren und dein Glück finden! Noch heute starten ... </p>
                    <h2 class="font-bold text-2xl text-black">Oberberg.dating</h2>
                </section>
                <section class="actions">
                    <a href="/register" class="btn btn-secondary">Jetzt registrieren</a>
                </section>
            </section>

            <section class="grid grid-cols-6 gap-3 mt-6">
                <div class="col-span-6 md:col-span-3">
                    <img src="https://place-hold.it/500x350?text=Gummersbach" alt="">
                </div>
                <div class="col-span-6 md:col-span-3">
                    <img src="https://place-hold.it/500x350?text=Bergneustadt" alt="">
                </div>
                <div class="col-span-6 md:col-span-3">
                    <img src="https://place-hold.it/500x350?text=Marienheide" alt="">
                </div>
                <div class="col-span-6 md:col-span-3">
                    <img src="https://place-hold.it/500x350?text=Wiehl" alt="">
                </div>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const { width } = useWindowSize()

useHead({
    title: 'Oberberg.dating',
    meta: [
        {
            name: 'description',
            content: 'Jetzt registrieren und dein Glück finden! Noch heute starten ...'
        },
        {
            name: 'keywords',
            content: 'oberberg dating gummersbach bergneustadt wiehl marienheide single facebook'
        }
    ],
    description: 'Jetzt registrieren und dein Glück finden! Noch heute starten ...'
});

const mobile = computed(() => {
    return width.value < 768;
});
</script>

<style scoped>
.skyline {
    background-color: linear-gradient(lightlblue, lightlblue);
}
</style>