<script setup>
import {computed, onMounted, ref} from "vue";
import {useRouter, useRoute} from 'vue-router'
import projects from "../assets/projects.json"
import ImagesModal from "./ImagesModal.vue";
import SiteHeader from "./SiteHeader.vue";

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
		<div class="grid md:grid-cols-2 gap-4 p-10">
			<div class="order-2 md:order-1">
				<div class="md:pt-20">
					<!--this very page is built using vue3 and tailwind-->
					<div class="py-10">
						<div class="font-cursive text-4xl tracking-wider">
							<h1 class="mb-1">{{ project.name }}</h1>
							{{ project.tag_line }}
						</div>
						<div class="flex gap-2 mt-4">
							<span v-for="tech in project.tech_used" :key="tech"
							      class="bg-white rounded-full text-[#0083B0] px-3 py-1 text-xs uppercase font-bold">
								{{ tech }}
							</span>
						</div>
					</div>

					<div class="flex text-xs text-white">
						<a class="btn block bg-[#0083B0] rounded-l-md py-2 px-3 hover:bg-black/25"
						   :href="'/projects/' + links.prev">
							Previous
						</a>

						<a class="btn border-x border-black/5 block bg-[#0083B0] py-2 px-3 hover:bg-black/25"
						   href="/">Back to all projects</a>

						<a class="btn block bg-[#0083B0] rounded-r-md py-2 px-3 hover:bg-black/25"
						   :href="'/projects/' + links.next">
							Next
						</a>
					</div>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:absolute md:-top-10">
					<img :alt="'Featured screenshot from ' + project.name"
					     :src="project.featured_image"
					     class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="grid grid-cols-4 gap-4">
			<div class="col-span-3 space-y-4">
				<ul class="list-inside space-y-2.5">
					<li v-for="detail in project.details" :key="detail" class="pl-2 border-l-4 border-[#0083B0]/50 first-letter:uppercase">
						{{ detail }}
					</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li v-for="feature in project.other_features" :key="feature">{{ feature }}</li>
					</ul>
				</div>

				<p v-if="project.note">{{ project.note }}</p>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-4">
					<img v-for="image in project.screenshots" :key="image"
					     :alt="'Screenshot from ' + project.name" :src="image"
					     class="block rounded-md border cursor-pointer"
					     @click.prevent="handleClick($event)">
				</div>
			</div>
		</div>
	</main>

	<ImagesModal v-model="showModal">
		<img :alt="'Screenshot from ' + project.name" :src="currentImage" class="block w-full h-full object-cover">
	</ImagesModal>
</template>