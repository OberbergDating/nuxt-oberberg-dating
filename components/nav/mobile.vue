<template>
  <section class="mobile md:hidden px-2 mr-1 sm:mt-2 flex justify-center py-2 bg-white rounded-lg">
    <button v-if="!open" class="bars" @click="open = !open">
      <FontAwesomeIcon :icon="faBars" size="2x" />
    </button>
    <button v-else class="times" @click="open = !open">
      <FontAwesomeIcon :icon="faTimes" size="2x" />
    </button>
  </section>
  <section class="match md:hidden px-2 mr-1 py-2 bg-white rounded-lg sm:mt-3 mt-1.5">
    <a href="/match">
      <FontAwesomeIcon :icon="faHeartCirclePlus" size="2x" />
    </a>
  </section>
</template>

<script lang="ts" setup>
import {
    faBars,
    faHeartCirclePlus,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';

const open = useLocalStorage('nav-open', false, {});
</script>
