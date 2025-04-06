<template>
    <div class="card bg-gray-400 shadow-sm px-3 py-3">
        <figure v-if="props.user.avatar">
            <img :src="url + '/api/files/_pb_users_auth_/' + props.user.id + '/' + props.user.avatar" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ props.user.name }}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">
                    <FontAwesomeIcon :icon="faMessage" />
                    <span>Nachricht</span>
                </button>
                <button class="btn btn-primary">
                    <FontAwesomeIcon :icon="faIdCard" class="" />
                    <span>Zum Profile</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faIdCard, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { usePocketBase, usePocketBaseUrl } from '~/composable/pocketbase';

const props = defineProps({
    user: { type: Object, required: true },
});

const pb = usePocketBase();
const url = usePocketBaseUrl();

onMounted(async () => { });
</script>