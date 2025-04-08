<template>
  <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-48 overflow-hidden rounded-lg md:h-96">
      <!-- Item -->
      <Transition v-for="(city, index) in cities">
        <div v-if="selected == index" class="duration-700 ease-in-out" data-carousel-item>
          <img :src="'/city/' + city.code + '.jpg'"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          <a :href="'/city/' + city.code"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-black bg-opacity-50 text-white text-xl px-4 py-2 rounded">
            <span>Jetzt zu deiner Stadt = {{ city.name }}</span>
            <FontAwesomeIcon :icon="faLink" size="1x" color="white" class="ml-3" />
          </a>
        </div>
      </Transition>
    </div>
    <!-- Slider controls -->
    <button type="button" @click="prev()"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button" @click="next()"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

</template>

<script lang="ts" setup>
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';

const selected = ref(0);
const cities = useLocalStorage('cities', [], {});
const limit = ref(cities.value.length);

const next = () => {
  if (selected.value < limit.value - 1) {
    selected.value++;
  }
  else {
    selected.value = 0;
  }
}

const prev = () => {
  if (selected.value > 0) {
    selected.value--;
  }
  else {
    selected.value = limit.value - 1;
  }
}
</script>

<style></style>