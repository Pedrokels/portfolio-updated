<script setup>
import Footer from './MyProfile/Footer.vue';
</script>


<template>
    <div class="min-h-screen px-3 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 rounded-[28px] border border-zinc-200/80 bg-white/60 px-3 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <router-link :to="{ name: 'Home' }" class="flex items-center gap-2 mt-5 mb-5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 -mt-1 hover:scale-110 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <h2 class="text-sm font-thin">Back to home</h2>
            </router-link>

            <h2 class=" animate__animated animate__fadeInDown text-2xl font-bold">Projects</h2>
            <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f] border-gray-300 shadow-lg  rounded-xl">
                <div class="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-5 -mt-1">
                        <path fill-rule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-sm font-bold sm:text-base md:text-lg">PALIGID MAPPING SYSTEM (CONTRIBUTED DURING DEVELOPMENT)</h2>
                </div>
                <div class="space-y-3 text-left">
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Developed core features of the PALIGID Mapping System, a web-based GIS and analytics dashboard
                        for visualizing the Philippine food supply chain across the Philippines. Built interactive geospatial
                        visualizations using Mapbox GL JS and deck.gl, integrated spatial data using PostGIS, and developed
                        backend modules with Laravel to support map layers, regional analytics, and food system indicators.
                        Designed responsive dashboard components for displaying geospatial insights, data visualizations,
                        and supply chain analytics. The project was still under active development at the end of my
                        employment.
                    </p>
                    <div class="space-y-5 text-center">
                        <div class="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50/70 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
                            Images not available.
                        </div>
                    </div>
                </div>
            </div>
    <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f] border-gray-300 shadow-lg  rounded-xl">
                <div class="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-5 -mt-1">
                        <path fill-rule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-sm font-bold sm:text-base md:text-lg">eNutrition Data Analytics & Prediction Module</h2>
                </div>
                <div class="space-y-3 text-left">
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">Developed a web-based analytics platform with prediction features for nutrition and health-related data reporting.</p>
                    <div class="space-y-5 text-center">
                        <img src="/src/assets/images/projects/nutritiondatainaclick/main_page.png" alt="Main Page"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                        <img src="/src/assets/images/projects/nutritiondatainaclick/prediction_module.png"
                            alt="Prediction Module" class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
            
            <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f]  shadow-lg  rounded-xl">
                <div class="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-5 -mt-1">
                        <path fill-rule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-sm font-bold sm:text-base md:text-lg">Barangay e-Services & ID Management System</h2>
                </div>
                <div class="space-y-3 text-left">
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">Built a digital service platform supporting barangay transactions, resident records, and institutional workflows.</p>
                    <div class="space-y-5 text-center">
                        <img src="/src/assets/images/projects/bims/bimslogin.png" alt="Prediction Module"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                        <img src="/src/assets/images/projects/bims/bims.png" alt="Main Page"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
            <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f] border-gray-300 shadow-lg  rounded-xl">
                <div class="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-5 -mt-1">
                        <path fill-rule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-sm font-bold sm:text-base md:text-lg">Attendance Management System with QR Tracking</h2>
                </div>
                <div class="space-y-3 text-left">
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">Implemented attendance tracking with QR-based validation and reporting for streamlined monitoring.</p>
                    <div class="space-y-5 text-center">
                        <img src="/src/assets/images/projects/attendance/attendance.png" alt="Prediction Module"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                        <img src="/src/assets/images/projects/attendance/attrecord.png" alt="Main Page"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>

            <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f] border-gray-300 shadow-lg  rounded-xl">
                <div class="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-5 -mt-1 sm:size-6 md:size-7">
                        <path fill-rule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-sm font-bold sm:text-base md:text-lg">IT Help Desk & Support Portal</h2>
                </div>

                <div class="space-y-3 text-left">
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">Designed a support-focused platform for issue tracking, service requests, and operational coordination.</p>
                    <div class="space-y-5 text-center">
                        <img src="/src/assets/images/projects/helpdesk/ithelpdesk.png" alt="Prediction Module"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                        <img src="/src/assets/images/projects/ithelpdesk/itadmin.png" alt="Main Page"
                            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
         

            <div
                class=" p-4 relative dark:bg-[#141414] bg-white border dark:border-[#4f4f4f] border-gray-300 shadow-lg  rounded-xl">
                <div class="flex items-center justify-center">

                    <span class="text-xs text-neutral-300 "><i>Private projects not included..</i></span>
                </div>

            </div>
            <!-- FOOTER -->
            <Footer />
        </div>
    </div>
</template>