<template>
  <section class="page bg-white px-3 py-3">
    <section class="grid grid-cols-6 gap-3">
      <div class="col-span-6 font-bold text-xl">Singles in {{ city.name }}</div>
      <div v-for="single in singles" class="col-span-6 md:col-span-2">
        <SingleCard :user="single" />
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { usePocketBase } from '~/composable/pocketbase';

const pb = usePocketBase();
const route = useRoute();
const singles = ref([]);
const city = ref({});

onMounted(async () => {
    city.value = await pb
        .collection('cities')
        .getFirstListItem('code="' + route.params.code + '"');
    singles.value = (
        await pb.collection('users').getList(1, 9, {
            filter: 'city.code="' + route.params.code + '"',
        })
    ).items;
});
</script>
