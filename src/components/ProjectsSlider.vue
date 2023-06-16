<script setup>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import clients from "../assets/projects.json"

const options = {
    gap: '1rem',
    perPage: 4,
    breakpoints: {
        640: {
            perPage: 1,
        },
        1024: {
            perPage: 2,
        },
        1280: {
            perPage: 3,
        }
    },
    classes: {
        arrows: 'splide__arrows absolute -top-12 right-2 inline-block flex gap-4',
        arrow: 'inline-flex z-10 justify-center items-center p-2 w-8 h-8 rounded-full border-2 shadow-lg bg-white disabled:bg-gray-100 disabled:fill-gray-300 fill-gray-500',
        pagination: 'inline-flex absolute -bottom-8 right-1/2 z-10 flex-wrap justify-center items-center p-0 m-0 translate-x-1/2', // container
        page: 'inline-block bottom-0 p-0 m-1 w-2 h-2 lg:w-4 lg:h-4 rounded-full transition-all duration-200 bg-gray-200 custom-is-active', // each button
    }
}

</script>

<template>
    <Splide id="projects_slider" :options="options">
        <SplideSlide v-for="client in clients" :key="client.name" class="group">
            <div class="w-full h-full flex flex-col flex-1 bg-white overflow-hidden">
                <div class="flex flex-col flex-1 border overflow-hidden rounded-md">
                    <div class="w-full h-48 border-b overflow-hidden">
                        <a :href="'/projects/' + client.slug">
                            <img :alt="client.name" :src="client.featured_image"
                                 class="block w-full h-full object-top object-cover transition-transform duration-300 group-hover:scale-105">
                        </a>
                    </div>
                    <div class="flex-1 p-4 space-y-4">
                        <h5 class="relative inline-block pr-4 isolate font-bold text-lg font-cursive text-[#485b73] pl-2 border-l-4 border-[#485b73] group-hover:text-white transition-colors duration-300">
                            <span class="absolute block inset-0 right-1 group-hover:bg-[#485b73] w-0 group-hover:w-full transition-all duration-300 -z-10"></span>
                            <a :href="'/projects/' + client.slug">
                                {{ client.name }}
                            </a>
                        </h5>
                        <p class="text-sm text-[#485b73] min-h-[3ch]">{{ client.description }}</p>
                    </div>
                    <div class="p-4 flex justify-between">
                        <a
                                :href="'/projects/' + client.slug"
                                class="btn btn-secondary">
                            More details
                        </a>
                        <a
                                v-if="client.urls"
                                :href="client.urls[0]"
                                class="btn inline-flex items-center gap-2 hover:bg-gray-300"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                        >
                            Visit

                            <svg class="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</template>

<style>
.custom-is-active.is-active {
    @apply w-4 lg:w-8;
    background: #0083B0;
}
</style>