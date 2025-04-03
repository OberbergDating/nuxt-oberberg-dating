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
            <input type="email" v-model="form.email" class="input input-neutral w-full"
              placeholder="mail@jonathan-martz.de" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Password ?</legend>
            <input type="password" v-model="form.password" class="input input-neutral w-full" placeholder="Password123" />
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
            <input v-model="form.register.email" type="email" class="input input-neutral w-full" placeholder="mail@jonathan-martz.de" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Whats your Password ?</legend>
            <input v-model="form.register.password" type="password" class="input input-neutral w-full" placeholder="Password123" />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Confirm your Password ?</legend>
            <input v-model="form.register.passwordConfirm" type="password" class="input input-neutral w-full" placeholder="Password123" />
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
import { usePocketBase } from '~/composable/pocketbase'
import { useRouter } from 'vue-router'

const pb = usePocketBase();
const router = useRouter();

const form = ref({
 login: {
  email: '',
  password: '',
 },
 register: {
  email: '',
  password: '',
  passwordConfirm: '',
 }
});

const login = async () => {
  await pb.collection('users').authWithPassword(form.value.login.email, form.value.login.password);
  if (pb.authStore.isValid) {
    router.push('/');
  }
}

const register = async () => {
  await pb.collection('users').create({
    email: form.value.register.email,
    password: form.value.register.password,
    passwordConfirm: form.value.register.passwordConfirm,
  });
  await pb.collection('users').authWithPassword(form.value.register.email, form.value.register.password);
  if (pb.authStore.isValid) {
    router.push('/');
  }
}
</script>
