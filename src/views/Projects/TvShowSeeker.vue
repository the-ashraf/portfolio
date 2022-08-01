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
						TVShowSeeker.<br>
						A massive Laravel/Vue/Redis project.
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:absolute md:-top-10">
					<img class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md" src="/clients/seek.png" alt="Screenshot from TVShowSeeker">
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
					<li class="pl-2 border-l-2">A very fun project that i worked on from start to finish, TVShowSeeker used an external api source to seed information about tv shows.</li>
					<li class="pl-2 border-l-2">i used Cronjobs to ensure continues seeding to make sure the local database is never out of date.</li>
					<li class="pl-2 border-l-2">users can follow their favorite shows and through an algorithm i determine their missed episodes and present it in an organized queue.</li>
					<li class="pl-2 border-l-2">to ensure the app is always fast i implemented a background queue worker to constantly check the users episodes queue.</li>
					<li class="pl-2 border-l-2">latest iteration of frontend updates included separating the desktop and the mobile layout, to make sure the browsing experience is optimal and streamlined regardless of the platform.</li>
					<li class="pl-2 border-l-2">latest iteration of the frontend updates followed the progressive web app specifications to make sure the website is installable through browsers.</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>Recommended tv shows</li>
						<li>Watched episodes time tracker</li>
						<li>Episodes calendar</li>
						<li>New seasons notifications</li>
						<li>Custom collage background images generated from the users own favorite tv show posters.</li>
					</ul>
				</div>

				<p>Ever since the app launch back in 2016, it went through a major backend upgrade and 2 minor style upgrades.</p>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-4">
					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/seeker/seeker_show.png" alt="Screenshot from TVShowSeeker's show page">

					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/seeker/seeker_related_tags.png" alt="Screenshot from TVShowSeeker's related section">

					<img @click.prevent="handleClick($event)" class="block rounded-md border cursor-pointer" src="/clients/seeker/seeker_episodes.png" alt="Screenshot from TVShowSeeker's episodes section">
				</div>
			</div>
		</div>
	</main>

	<ImagesModal v-model="showModal">
		<img class="block w-full h-full object-cover" :src="currentImage" alt="Screenshot from TVShowSeeker's show page">
	</ImagesModal>
</template>