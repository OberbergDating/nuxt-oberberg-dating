<template>
  <section class="page bg-white px-3 py-3 mx-3 lg:mx-auto max-w-6xl">
    <section v-if="likes.length > 0" class="grid grid-cols-6 gap-3">
      <div v-for="like in likes" class="col-span-6 md:col-span-2">
        <SingleCard :user="like.expand.matcher2" />
      </div>
    </section>
    <section class="px-3 py-3 bg-white mx-3 ">
      <div class="alert alert-warning">
        Du hast noch keine Matches.
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { usePocketBase } from '~/composable/pocketbase';
const pb = usePocketBase();
const router = useRouter();
const likes = ref([]);

onMounted(() => {
  if (!pb.authStore.isValid) {
    router.push('/register')
  }
  load();
});

const load = async () => {
  likes.value = await pb.collection('likes').getFullList(25, {
    expand: 'matcher2'
  });
}
</script>

<style></style>