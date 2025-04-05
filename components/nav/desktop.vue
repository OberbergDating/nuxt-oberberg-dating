<template>
    <section class="desktop hidden md:flex items-center md:mt-24 lg:mt-14">
        <ul class="flex space-x-6">
            <li>
                <a href="/match" class="btn btn-sm btn-secondary hover:btn-primary">Suche dein Match</a>
            </li>
            <li>
                <a href="/profile" class="btn btn-sm btn-secondary hover:btn-primary">Zu deinem Profile</a>
            </li>
            <li v-if="pb.authStore.isValid">
                <select v-model="selectedCity" class="select select-secondary select-sm">
                    <option v-for="item in cities" :value="item.id">{{ item.name }}</option>
                </select>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { usePocketBase } from '~/composable/pocketbase';

const pb = usePocketBase();
const cities = useLocalStorage('cities', [], {});
const city = ref({});
const selectedCity = ref('');

onMounted(async () => {
    city.value = cities.value.find((item) => { return pb.authStore.record?.city == item.id }) ?? '797c21yy67nag85';
    selectedCity.value = city.value.id ?? '797c21yy67nag85';
});
</script>