<template>
  <section v-if="open" class="bg-white block mx-3 my-3 px-3 py-3 md:hidden">
    <section class="grid grid-cols-6 gap-3">
      <div class="col-span-6 sm:col-span-3">
        <a href="/match" class="btn btn-primary btn-sm w-full">Match</a>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <a href="/settings" class="btn btn-primary btn-sm w-full">Settings</a>
      </div>
      <div class="col-span-6">
        <button @click="open = !open" class="w-full btn btn-secondary text-center">
          <span>schliesen</span>
        </button>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const open = useLocalStorage('nav-open', false, {});
</script>
