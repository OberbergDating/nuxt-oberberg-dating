<script setup lang="ts">
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
</script>

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
        <MobileNavigationContent />
        <main class="min-h-screen mx-auto max-w-6xl ">
            <slot></slot>
        </main>
        <footer class="mx-auto max-w-6xl bg-white">
            <section class="grid grid-cols-8">
                <div class="col-span-8 md:col-span-2">
                    <a href="/impressum">Impressum</a> & <a href="/datenschutz">Datenschutz</a>
                </div>
                <div class="col-span-8 md:col-span-2 flex items-center">
                    <span>Made with</span>
                    <a href="https://admin.oberberg.dating/_/" target="_blank">
                        <Fa :icon="faHeart" class="w-5 mx-3" size="2x" color="red" />
                    </a>
                    <span>by <a href="http://www.jmartz.de" target="_blank"
                            rel="noopener noreferrer">Jonathan</a></span>
                </div>
                <div class="col-span-8 md:col-span-4">Copyright by
                    <a href="https://www.jonathan-martz.de" target="_blank" class="text-blue-600">Jonathan Martz
                        Softwareentwicklung</a>
                </div>
            </section>
        </footer>
        <Toasts />
    </section>
</template>