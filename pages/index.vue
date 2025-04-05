<template>
    <section class="bg-white px-3 py-3 mx-3">
        <section class="grid grid-cols-12 gap-3">
            <div class="col-span-12">
                <h2 class="font-bold text-lg block text-center">Aus welcher Stadt kommst du ?</h2>
            </div>
            <div class="col-span-12">
                <CarouselCity />
            </div>
            <div class="col-span-12 hidden">
                <div class="bg-cover h-48 md:h-96 bg-center"
                style="background-image: url('/unsplash/gm.jpg');">

                </div>
                <div class="divider divider-primary">Stadt auswählen und starten</div>
            </div>
            <div v-for="city in cities" class="col-span-4 sm:col-span-2 flex items-center justify-center">
                <a :href="'/register?code=' + city.code"
                    class="app-icon rounded-lg bg-gray-400 w-16 h-16 flex items-center justify-center">
                    {{ city.code.toUpperCase() }}
                </a>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';
import { usePocketBase } from '~/composable/pocketbase';

const pb = usePocketBase();
const cities = useLocalStorage('cities', [], {});

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

onMounted(async () => {
    
});

</script>

<style scoped>
.skyline {
    background-color: linear-gradient(lightlblue, lightlblue);
}
</style>