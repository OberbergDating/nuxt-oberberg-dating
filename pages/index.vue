<template>
    <section class="bg-gray-400 pb-6 border-2 mx-3 xl:mx-auto">
        <section class="page w-full h-64 md:h-96 bg-cover bg-bottom bg-right" title="Foto von Kiwihug auf Unsplash"
            :style="{ 'background-image': 'url(/unsplash/skyline3.jpg)' }">
            <section class="headline pt-12 px-12">
                <p class="text-lg text-white hidden ">Oberberg.dating - die Plattform für Daten im Oberberg</p>
                <h2 class="font-bold text-2xl text-white hidden">Jetzt gemeinsam durschstarten</h2>
            </section>
        </section>
        <section class="overlay bg-white rounded-t-xl text-black -mt-24 mx-3 md:mx-6 px-6 py-6">
            <section class="headline flex flex-col md:flex-row md:justify-between">
                <section class="text">
                    <p class="text-sm">Jetzt registrieren und dein Glück finden! Noch heute starten ... </p>
                    <h2 class="font-bold text-2xl text-black">Oberberg.dating</h2>
                </section>
                <section class="actions block lg:w-auto">
                    <a href="/register" class="btn btn-secondary">Jetzt registrieren</a>
                </section>
            </section>

            <section class="grid grid-cols-6 gap-3 mt-6">
                <div class="col-span-6">
                    <h2 class="font-bold text-2xl block text-center">
                        Aus welcher Stadt kommst du ?
                    </h2>
                </div>
                <div v-for="city in cities" class="col-span-6 md:col-span-3">
                    <a :href="'/city/' + city.code">
                        <h3 class="font-bold text-xl block text-center mb-3">
                            {{ city.name }}
                        </h3>
                        <div :style="backgroundImageStyle(city)" class="w-full h-64 bg-cover border border-black"></div>
                    </a>
                </div>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { width } = useWindowSize();

const backgroundImageStyle = (city) => {
    return {
        backgroundImage: !city.image
            ? `url(https://place-hold.it/500x350?fontsize=23)`
            : `url(/unsplash/` + city.code + `.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
};

useHead({
    title: 'Oberberg.dating',
    meta: [
        {
            name: 'description',
            content:
                'Jetzt registrieren und dein Glück finden! Noch heute starten ...',
        },
        {
            name: 'keywords',
            content:
                'oberberg dating gummersbach bergneustadt wiehl marienheide single facebook',
        },
    ],
    description:
        'Jetzt registrieren und dein Glück finden! Noch heute starten ...',
});

const cities = ref({
    bergneustadt: {
        name: 'Bergneustadt',
        code: 'bg',
        image: true,
    },
    gummersbach: {
        name: 'Gummersbach',
        code: 'gm',
        image: true,
    },
    wiehl: {
        name: 'Wiehl',
        code: 'wl',
    },
    marienheide: {
        name: 'Marienheide',
        code: 'mh',
    },
    engelskirchen: {
        name: 'Engelskirchen',
        code: 'ek',
    },
    hückeswagen: {
        name: 'Hückeswagen',
        code: 'hw',
    },
    lindlar: {
        name: 'Lindlar',
        code: 'll',
    },
    morsbach: {
        name: 'Morsbach',
        code: 'mb',
    },
    nümbrecht: {
        name: 'Nümbrecht',
        code: 'nb',
    },
    radevormwald: {
        name: 'Radevormwald',
        code: 'rvw',
    },
    reichshof: {
        name: 'Reichshof',
        code: 'rh',
    },
    waldbröl: {
        name: 'Waldbröl',
        code: 'wb',
    },
    wipperfürth: {
        name: 'Wipperfürth',
        code: 'wf',
    },
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