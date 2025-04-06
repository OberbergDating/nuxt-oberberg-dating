<template>
  <section class="page mx-auto max-w-6xl min-h-screen bg-white px-3 py-3">
    <div class="mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 my-[10vh] md:my-[18vh]">
      <template v-if="upcoming.length > 0 && !limitReached">
        <transition name="bounce" v-for="(single, index) in upcoming">
          <div v-if="current == index" class="card bg-gray-400 text-black">
            <figure v-if="single.avatar">
              <img :src="url + '/api/files/_pb_users_auth_/' + pb.authStore.record.id + '/' + single.avatar" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ single.rated_name }}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and
                actions parts</p>
            </div>
            <section>
              <div class="flex justify-between px-3 py-3 space-x-3">
                <button class="btn btn-neutral w-2/7" @click="next(single.rated_id, 'dont')">dont</button>
                <button class="btn btn-primary w-2/7" @click="next(single.rated_id, 'like')">mag ich</button>
              </div>
            </section>
          </div>
        </transition>
      </template>
      <div v-else class="my-12 text-sm block text-center font-bold text-black">
        <section class="card bg-gray-400 text-black">
          <figure>
            <div class="card-image h-48 bg-cover w-full" style="background-image: url('/unsplash/skyline2.jpg')"></div>
          </figure>
          <div class="card-body text-white">Genies die Aussicht,<br> wir sehen uns morgen wieder :) </div>
          <section v-if="user.expand" class="card-actions flex px-3 py-3 justify-between">
            <a :href="'/city/' + user.expand.city.code" class="btn btn-primary btn-block text-center">Weitere Profile aus deiner Stadt</a>
            <a href="/" class="btn btn-secondary btn-block text-center">Premium kaufen und das Limit erhöhen</a>
          </section>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePocketBase, usePocketBaseUrl } from '~/composable/pocketbase';
import { useRouter } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';

const current = ref(0);
const total = ref([]);
const upcoming = ref({});
const user = ref([]);
const limitReached = ref(false);
const matches = ref([]);
const pb = usePocketBase();
const url = usePocketBaseUrl();
const router = useRouter();
const toasts = useLocalStorage('toasts', [], {});

const next = async (rated_id, decision) => {
  try {
    await pb.collection('matches').create({
      matcher: pb.authStore.record?.id,
      rated: rated_id,
      rating: decision
    });
    load();

  } catch ({ status, message }) {
    if (status == '400') {
      // TODO toast push
      limitReached.value = true;
      toasts.value.push({ message });
    }
  }

};

const load = async () => {
  pb.autoCancellation(false);
  matches.value = await pb.collection('matches').getFullList(15, { filter: 'matcher="' + pb.authStore.record?.id + '"' });
  upcoming.value = await pb.collection('upcoming_matches').getFullList(15);
  user.value = await pb.collection('users').getOne(pb.authStore.record?.id, { expand: 'city' });
}

onMounted(async () => {
  if (!pb.authStore.isValid) {
    router.push('/register')
  }
  load();
  total.value = await pb.collection('total_matches').getFullList(10);

  pb.collection('matches').subscribe('*', function (e) {
    load();
  }, { /* other options like: filter, expand, custom headers, etc. */ });
  toasts.value.push({ message: 'Jeder hat ein tägliches Limit von 10 Match versuche.', type: 'warning' });
});
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  display: none;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>