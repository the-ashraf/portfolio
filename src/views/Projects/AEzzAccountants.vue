<script setup>
import {ref} from "vue";
import ImagesModal from "../../components/ImagesModal.vue";
import SiteHeader from "../../components/SiteHeader.vue";

const showModal = ref(false);
const currentImage = ref('');

const handleClick = (event) => {
	currentImage.value = event.target.currentSrc;
	showModal.value = true;
}
</script>

<template>
	<SiteHeader>
		<div class="grid md:grid-cols-2 gap-4 p-10">
			<div class="order-2 md:order-1">
				<div class="md:pt-20">
					<!--this very page is built using vue3 and tailwind-->
					<div class="font-cursive text-4xl tracking-wider py-8">
						A. Ezz El-Arab<br>
						Static html profile
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:w-full md:absolute md:-top-10">
					<img class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md" src="/clients/aezz.png" alt="Screenshot from a. ezz elarab homepage">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="flex justify-between">
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">VueJs</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Tailwind</div>
		</div>

		<div class="grid grid-cols-4 gap-4">
			<div class="col-span-3 space-y-4">
				<ul class="list-inside space-y-2">
					<li class="pl-2 border-l-2">Built to be deployed on any html host to avoid renting an entire server</li>
					<li class="pl-2 border-l-2">Optimized to work with social media sharers</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>One click deploy on any cloud host, like netlify or heroku</li>
						<li>Entirely processed on the browser</li>
						<li>100% Responsive</li>
					</ul>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-4">
					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/aezz/aezz_body.png" alt="Screenshot of the a. ezz el arab profile website">
				</div>
			</div>
		</div>
	</main>

	<ImagesModal v-model="showModal">
		<img class="block w-full h-full object-cover" :src="currentImage" alt="Screenshot from TVShowSeeker's show page">
	</ImagesModal>
</template>