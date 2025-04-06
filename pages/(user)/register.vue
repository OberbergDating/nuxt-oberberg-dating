<template>
  <section class="page bg-white py-3 px-3 mx-3 lg:mx-auto max-w-6xl">
    <section class="grid grid-cols-6 gap-3">
      <div class="col-span-6 md:col-span-3">
        <h3 class="font-bold text-xl block text-center">
          Login
        </h3>
        <form @submit.prevent="login()" class="bg-gray-400">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Email ?</legend>
            <input type="email" v-model="form.login.email" class="input input-neutral w-full"
              placeholder="mail@jonathan-martz.de" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Password ?</legend>
            <input type="password" v-model="form.login.password" class="input input-neutral w-full"
              placeholder="Password123" />
          </fieldset>
          <section class="actions flex justify-end mt-6">
            <button type="submit" class="btn btn-primary">Einloggen</button>
          </section>
        </form>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h3 class="font-bold text-xl block text-center">
          Register
        </h3>
        <form @submit.prevent="register()" class="bg-gray-400">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Email ?</legend>
            <input v-model="form.register.email" type="email" class="input input-neutral w-full"
              placeholder="mail@jonathan-martz.de" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Name ?</legend>
            <input v-model="form.register.name" type="email" class="input input-neutral w-full"
              placeholder="Jonathan Martz" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Password ?</legend>
            <input v-model="form.register.password" type="password" class="input input-neutral w-full"
              placeholder="Password123" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Confirm your Password ?</legend>
            <input v-model="form.register.passwordConfirm" type="password" class="input input-neutral w-full"
              placeholder="Password123" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Location ?</legend>
            <select v-model="form.register.city" class="select select-primary w-full">
              <option v-for="city in cities" :value="city.code">{{ city.name }}</option>
            </select>
          </fieldset>
          <section class="actions flex justify-end mt-6">
            <button type="submit" class="btn btn-primary">Registieren</button>
          </section>
        </form>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';
import { useRouter, useRoute } from 'vue-router';
import { usePocketBase } from '~/composable/pocketbase';

const pb = usePocketBase();
const router = useRouter();
const route = useRoute();
const city = ref('city');

const form = ref({
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    name: '',
    city: 'bg',
    password: '',
    passwordConfirm: '',
  },
});

const cities = useLocalStorage('cities', [], {});
const login = async () => {
  await pb
    .collection('users')
    .authWithPassword(form.value.login.email, form.value.login.password);
  if (pb.authStore.isValid) {
    router.push('/');
  }
};

const register = async () => {
  await pb.collection('users').create({
    email: form.value.register.email,
    password: form.value.register.password,
    name: form.value.register.name,
    passwordConfirm: form.value.register.passwordConfirm,
    city: city.value.id
  });
  await pb
    .collection('users')
    .authWithPassword(
      form.value.register.email,
      form.value.register.password,
    );
  if (pb.authStore.isValid) {
    router.push('/city/' + form.value.register.city);
  }
};

onMounted(async () => {
  if (route.query.code) {
    form.value.register.city = route.query.code;
  }

  city.value = cities.value.find((item) => {
    return form.value.register.city == item.code;
  })
});
</script>
