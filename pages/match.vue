<template>
  <section class="page mx-auto max-w-6xl min-h-screen bg-white px-3 py-3">
    <div class="mx-auto w-1/3">
      <template v-if="current < limit">
        <transition name="bounce" v-for="(key, index) in limit">
          <div v-if="current == index" class="card bg-gray-400 text-black">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Card Title ({{ index + 1 }})</h2>
              <p>A card component has a figure, a body part, and inside body there are title and
                actions parts</p>
            </div>
            <section>
              <div class="flex justify-between px-3 py-3">
                <button class="btn btn-primary w-3/7">uninteressant</button>
                <button class="btn btn-primary w-3/7" @click="next()">mag ich</button>
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
          <section class="card-actions flex px-3 py-3 justify-between">
            <a href="/" class="btn btn-primary">Test Button</a>
            <a href="/" class="btn btn-primary">Test Button</a>
          </section>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const current = ref(0);
const limit = ref(3);

const next = () => {
    current.value += 1;
};
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