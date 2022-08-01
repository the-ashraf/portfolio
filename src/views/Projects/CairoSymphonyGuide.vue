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
						Cairo Symphony Guide.<br>
						The definitive directory for all things Cairo Symphony.
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:w-full md:absolute md:-top-10">
					<img class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md" src="/clients/csg.png" alt="Screenshot from Cairo Symphony Guide">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="flex justify-between">
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Laravel</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">VueJs</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Cloudinary</div>
		</div>

		<div class="grid grid-cols-4 gap-4">
			<div class="col-span-3 space-y-4">
				<ul class="list-inside space-y-2">
					<li class="pl-2 border-l-2">The idea of this app is to have an accurate directory to track everything related to the Cairo Symphony.</li>
					<li class="pl-2 border-l-2">Users are able to follow performers and conductors and specific musical works so they get notifications when it is being performed in future concerts.</li>
					<li class="pl-2 border-l-2">The app has an integration with the Cloudinary Api which makes uploading poster/profile images very optimized.</li>
					<li class="pl-2 border-l-2">The app includes a complete list of every concert that was performed in the last few years. along with all related information.</li>
					<li class="pl-2 border-l-2">The app makes it very easy to generate analysis and stats regarding what was performed when and who performed it and who conducted that specific performance.</li>
					<li class="pl-2 border-l-2">App is 100% responsive across all platforms, and is optimized to for social media sharing</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>Concerts Calendar</li>
						<li>RSVP to concerts</li>
						<li>Personal concerts archive</li>
						<li>Following artists to get notifications about their concerts</li>
					</ul>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-4">
					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/csg/csg_calendar.png" alt="Screenshot from cairo symphony guide's calendar section">

					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/csg/csg_concert.png" alt="Screenshot from cairo symphony guide's concert section">
				</div>
			</div>
		</div>
	</main>

	<ImagesModal v-model="showModal">
		<img class="block w-full h-full object-cover" :src="currentImage" alt="Screenshot from TVShowSeeker's show page">
	</ImagesModal>
</template>