<template>
    <section class="bg-blue-500 min-h-screen bg-cover bg-fixed" style="background-image: url('/unsplash/skyline2.jpg')">
        <header class="mx-auto max-w-6xl py-3 flex justify-between">
            <LogoDesktop />
            <LogoMobile />
            <section>
                <NavDesktop />
                <NavMobile />
            </section>
        </header>
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
        <main class="min-h-screen mx-auto max-w-6xl ">
            <slot></slot>
        </main>
        <footer class="mx-auto max-w-6xl bg-white">
            <section class="grid grid-cols-8">
                <div class="col-span-8 md:col-span-2">
                    <a href="/impressum">Impressum</a> & <a href="/datenschutz">Datenschutz</a>
                </div>
                <div class="col-span-8 md:col-span-2">
                    <span>Made with</span>
                    <Fa :icon="faHeart" class="w-5" size="2x" color="red" />
                    <span>by <a href="http://www.jmartz.de" target="_blank"
                            rel="noopener noreferrer">Jonathan</a></span>
                </div>
                <div class="col-span-8 md:col-span-4">Copyright by
                    <a href="https://www.jonathan-martz.de" target="_blank" class="text-blue-600">Jonathan Martz
                        Softwareentwicklung</a>
                </div>
            </section>
        </footer>
    </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const open = useLocalStorage('nav-open', false, {});
</script>