<template>
    <section class="bg-blue-500 min-h-screen bg-cover"
        style="background-repeat: repeat;background-image: url('/unsplash/skyline2.jpg')">
        <header class="mx-auto max-w-6xl bg-white px-3 py-3 flex justify-between">
            <section class="logo font-bold flex items-center">
                <a href="/" class="flex flex-row">
                    <img src="/icon-oberberg-dating.svg" class="h-16" alt="">
                    <section class="headline-logo flex flex-col justify-center">
                        <div class="ml-5 text-3xl">
                            Oberberg.Dating
                        </div>
                        <p class="text-xs mx-auto pl-6">Dein Match aus dem Oberberg</p>
                    </section>
                </a>
            </section>
            <section class="nav">
                <section class="mobile md:hidden">mobile</section>
                <section class="desktop hidden md:flex items-center mt-12">
                    <ul class="flex space-x-6">
                        <li><a href="" class="btn btn-sm btn primary">Startseite</a></li>
                        <li><a href="" class="btn btn-sm btn primary">zum Daten</a></li>
                        <li><a href="" class="btn btn-sm btn primary">Setting</a></li>
                    </ul>
                </section>
            </section>
        </header>
        <main class="min-h-screen mx-auto max-w-6xl py-3">
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