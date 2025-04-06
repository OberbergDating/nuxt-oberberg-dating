<template>
  <div class="toast toast-top toast-end">
    <div class="alert" :class="{
      'alert-info': !toast.type,
      'alert-success': toast.type == 'success',
      'alert-warning': toast.type == 'warning',
    }" v-for="toast in toasts">
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';

const toasts = useLocalStorage('toasts', [], {});
const final = ref([]);
function addToast(message: string) {
  final.value.push({ message });
  setTimeout(() => {
    toasts.value.shift();
  }, 5000);
}

onMounted(() => {
  final.value = toasts.value;
});

watch(toasts, (value) => {
  console.log('new toast');
  for (const toast of value) {
    addToast(toast);
  }
}, { deep: true });
</script>
