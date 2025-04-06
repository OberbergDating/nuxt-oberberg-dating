<template>
    <section class="desktop hidden md:flex items-center md:mt-24 lg:mt-14">
        <ul class="flex space-x-6">
            <li>
                <a href="/match" class="btn btn-sm btn-secondary hover:btn-primary">
                    <FontAwesomeIcon :icon="faMagnifyingGlass" size="1x" color="white" />
                    <span>Matchen</span>
                </a>
            </li>
            <li v-if="!pb.authStore.isValid">
                <a href="/register" class="btn btn-sm btn-secondary hover:btn-primary">
                    <FontAwesomeIcon :icon="faEdit" size="1x" color="white" />
                    <span>Login/Register</span>
                </a>
            </li>
            <li v-if="pb.authStore.isValid">
                <a href="/profile" class="btn btn-sm btn-secondary hover:btn-primary">
                    <FontAwesomeIcon :icon="faIdCard" size="1x" color="white" />
                    <span>Profile</span>
                </a>
            </li>
            <li v-if="pb.authStore.isValid">
                <a href="/matches" class="btn btn-sm btn-secondary hover:btn-primary">
                    <FontAwesomeIcon :icon="faEye" size="1x" color="white" />
                    <span>Matches</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { faEdit, faEye, faIdCard, faMagnifyingGlass, faPassport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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