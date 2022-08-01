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
						Jammr.<br>
						A Laravel/Livewire project for musicians.
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:w-full md:absolute md:-top-10">
					<img class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md" src="/clients/jammr.png" alt="Screenshot from Jammr">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="flex justify-between">
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Laravel</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Livewire</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">AlpineJs</div>
		</div>

		<div class="grid grid-cols-4 gap-4">
			<div class="col-span-3 space-y-4">
				<ul class="list-inside space-y-2">
					<li class="pl-2 border-l-2">Jammr is a unique concept that allows musicians to upload their own music for others to listen and remix.</li>
					<li class="pl-2 border-l-2">The infrastructure was built to allow an artist to either upload an entire complete song or to upload the individual tracks that makes a song, which allows other artists to use specific instruments in their mixes or to remix the entire song.</li>
					<li class="pl-2 border-l-2">Built with swappable storage in mind, meaning you can use local storage for upload or any other object storage (i.e. amazon s3 bucket)</li>
					<li class="pl-2 border-l-2">Implemented a custom js audio player to control playback</li>
					<li class="pl-2 border-l-2">Users can follow their favorite creators</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>Upload audio files</li>
						<li>Ability to use an object storage or local uploads</li>
						<li>Follow creators to get notifications about their uploads</li>
					</ul>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full">
					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/jammr/jammr_home.png" alt="Screenshot from Jammr's homepage">

					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/jammr/jammr_track.png" alt="Screenshot from Jammr's track page">
				</div>
			</div>
		</div>
	</main>

	<ImagesModal v-model="showModal">
		<img class="block w-full h-full object-cover" :src="currentImage" alt="Screenshot from TVShowSeeker's show page">
	</ImagesModal>
</template>