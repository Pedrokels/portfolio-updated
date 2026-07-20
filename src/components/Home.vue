<script setup>
import { onMounted } from 'vue';
import Footer from './MyProfile/Footer.vue';
import MyProfile from './MyProfile/myProfile.vue';
import Statistics from './MyProfile/Statistics.vue';
import Summary from './MyProfile/Summary.vue';
import Experience from './MyProfile/Experience.vue';
import Project from './MyProfile/Project.vue';
import Techstack from './MyProfile/Techstack.vue';
import Socials from './MyProfile/Socials.vue';
import Recommendation from './MyProfile/Recommendation.vue';
import Education from './MyProfile/Education.vue';

onMounted(() => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const portfolio = document.getElementById('portfolio');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.classList.add('hidden');
                if (portfolio) {
                    portfolio.classList.add('fade-in');
                }
            }, 500);
        }
    }, 2000);
});
</script>

<template>
    <div class="min-h-screen bg-transparent text-zinc-900 transition-colors duration-300 dark:text-zinc-50">
        <div id="loader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#f7f7f1] dark:bg-black">
            <div class="spinner">
                <img id="main_logo" class="block h-10 w-10 animate__animated animate__flip dark:hidden" src="/src/icons/fsd.png" alt="">
                <img id="main_logo" class="hidden h-10 w-10 animate__animated animate__flip dark:block" src="/src/icons/fsdwhite.png" alt="">
            </div>
        </div>

        <div id="portfolio" class="flex min-h-screen flex-col justify-center px-2 py-8 pb-10 sm:px-3 sm:py-10 lg:px-4 lg:py-12">
            <div class="mx-auto w-full max-w-none">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-6">
                    <div class="flex flex-col gap-4 lg:col-span-2">
                        <my-profile />
                        <Summary />
                        <Statistics />
                    </div>

                    <div class="flex flex-col gap-4 lg:col-span-4">
                        <div class="grid grid-cols-1 gap-4 xl:grid-cols-7">
                            <div class="flex flex-col gap-4 xl:col-span-2">
                                <Socials />
                                <Experience />
                            </div>

                            <div class="flex flex-col gap-4 xl:col-span-3">
                                <Techstack />
                                <Project />
                                <Education />
                            </div>

                            <div class="flex flex-col gap-4 xl:col-span-2">
                                <Recommendation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<style>
.theme-checkbox {
    --toggle-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 40px;
    height: 20px;
    background: linear-gradient(to right, #2a2a2a 50%, #e4e3e3 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
}

.theme-checkbox::before {
    content: "";
    width: 13px;
    height: 13px;
    position: absolute;
    top: 3px;
    left: 24px;
    background: black;
    border-radius: 50%;
    transition: 0.4s;
}

.theme-checkbox:checked::before {
    left: 5.5px;
    background: #fff;
}

.theme-checkbox:checked {
    background-position: 0;
}

#main_logo {
    width: 40px;
    height: 40px;
}

.fade-out {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>
