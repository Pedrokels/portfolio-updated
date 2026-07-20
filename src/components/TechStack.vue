<script setup>
import Footer from './MyProfile/Footer.vue';
</script>

<template>
    <div class="min-h-screen px-3 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 rounded-[28px] border border-zinc-200/80 bg-white/60 px-3 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <router-link :to="{ name: 'Home' }" class="mt-5 mb-5 flex cursor-pointer items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 -mt-1 transition-transform hover:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <h2 class="text-sm font-thin">Back to home</h2>
            </router-link>

            <h2 class="animate__animated animate__fadeInDown text-2xl font-bold">Tech Stack</h2>
            <p class="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">A practical mix of web, data, mapping, and automation tools I use to build reliable products from concept to deployment.</p>

            <div class="grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Languages</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">PHP</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Python</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">JavaScript</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">HTML</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">CSS</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Backend Development</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Laravel</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Laravel Livewire</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">RESTful APIs</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">FastAPI</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Flask</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Databases</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">MySQL</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">SQLite</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Frontend Development</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Livewire</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">AlpineJS</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">VueJS</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Bootstrap</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Tailwind CSS</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Machine Learning</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Scikit-learn</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Pandas</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">NumPy</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Matplotlib</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Seaborn</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90">
                    <h3 class="mb-3 text-base font-semibold">Tools</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">GIT</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Github</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Postman</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">VS Code</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Google Cloud</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Jupyter Notebook</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">PyCharm</span>
                    </div>
                </div>

                <div class="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-[#141414]/90 md:col-span-2">
                    <h3 class="mb-3 text-base font-semibold">GIS & Mapping</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Mapbox GL JS</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">deck.gl</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">GIS</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">GeoJSON</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">Spatial Data Visualization</span>
                        <span class="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">PostGIS</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>
