<script setup>
import {computed, onMounted, ref} from "vue";
import {useRouter, useRoute} from 'vue-router'
import projects from "../assets/projects.json"
import ImagesModal from "./ImagesModal.vue";
import SiteHeader from "./SiteHeader.vue";
import SiteFooter from "./SiteFooter.vue";

const route = useRoute();
const project = ref([]);
const slugsList = ref([]);
const currentIndex = ref(null);
const showModal = ref(false);
const currentImage = ref('');

const handleClick = (event) => {
    currentImage.value = event.target.currentSrc;
    showModal.value = true;
}

onMounted(() => {
    project.value = projects.find(project => route.name === project.slug);

    slugsList.value = projects.map(item => item.slug);
    currentIndex.value = slugsList.value.indexOf(route.name);
});

const links = computed(() => {
    let nextIndex;
    if (currentIndex.value === 8) {
        nextIndex = 0;
    } else {
        nextIndex = currentIndex.value + 1;
    }

    let prevIndex;
    if (currentIndex.value === 0) {
        prevIndex = 8;
    } else {
        prevIndex = currentIndex.value - 1;
    }

    return {next: slugsList.value[nextIndex], prev: slugsList.value[prevIndex]}
})
</script>

<template>
    <SiteHeader>
        <div class="space-y-8">
            <div class="">
                <div class="text-5xl font-bold leading-[1.3]">
                    {{ project.name }}
                </div>
                <p class="font-light leading-[2]">
                    {{ project.tag_line }}
                </p>

                <template v-if="project.urls">
                    <a class="text-xs underline inline-block mr-2" v-for="url in project.urls" :href="url" target="_blank" rel="noopener noreferrer nofollow">
                        {{ url }}
                    </a>
                </template>
            </div>

            <div class="flex justify-center md:justify-start gap-2">
						<span v-for="tech in project.tech_used" :key="tech"
                              class="bg-white rounded-full text-[#0083B0] px-3 py-1 text-xs uppercase font-bold">
							{{ tech }}
						</span>
            </div>

            <div class="flex justify-center md:justify-start text-xs text-white">
                <a class="btn btn-primary leading-none rounded-r-none rounded-l"
                   :href="'/projects/' + links.prev">
                    Previous
                </a>

                <a class="btn btn-primary leading-none rounded-none"
                   href="/">Back to all projects</a>

                <a class="btn btn-primary leading-none rounded-l-none rounded-r"
                   :href="'/projects/' + links.next">
                    Next
                </a>
            </div>
        </div>

        <template #img>
            <img :alt="'Featured screenshot from ' + project.name"
                 class="max-w-sm md:max-w-full md:h-full aspect-square md:aspect-video object-cover object-top block rounded-md mb-8 md:mb-0"
                 :src="project.featured_image">
        </template>
    </SiteHeader>

    <main class="max-w-6xl mx-auto pt-10 space-y-6 px-8 mb-10">
        <div class="grid md:grid-cols-4 gap-4">
            <div class="order-2 md:order-1 md:col-span-3 space-y-4">
                <ul class="list-inside space-y-4">
                    <li v-for="detail in project.details" :key="detail"
                        class="pl-2 border-l-4 border-[#0083B0]/50 first-letter:uppercase">
                        {{ detail }}
                    </li>
                </ul>

                <div>
                    Other features include...
                    <ul class="list-inside list-disc">
                        <li v-for="feature in project.other_features" :key="feature">{{ feature }}</li>
                    </ul>
                </div>

                <p v-if="project.note">{{ project.note }}</p>
            </div>


            <div class="order-1 md:order-2 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
                <img v-for="image in project.screenshots" :key="image"
                     :alt="'Screenshot from ' + project.name" :src="image"
                     class="block w-20 h-20 md:w-full md:h-32 border cursor-pointer object-cover object-top ring-2 ring-blue-200 hover:ring-blue-600 rounded-md ring-offset-2"
                     @click.prevent="handleClick($event)">
            </div>
        </div>

        <SiteFooter/>
    </main>

    <ImagesModal v-model="showModal">
        <img :alt="'Screenshot from ' + project.name" :src="currentImage" class="block w-full h-full object-cover">
    </ImagesModal>
</template>