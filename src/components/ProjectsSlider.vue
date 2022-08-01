<script setup>
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import clients from "../assets/clients"

const breakpoints = {
	// 700px and up
	100: {
		itemsToShow: 2,
		snapAlign: 'start',
	},
	// 1024 and up
	1024: {
		itemsToShow: 3,
		snapAlign: 'start',
	},
};

</script>

<template>
	<carousel id="projects_slider" :breakpoints='breakpoints' :wrapAround="true" class="text-xs">
		<slide v-for="client in clients" :key="client.name" class="">
			<div class="w-full flex flex-col flex-1 px-4">
				<div class="flex flex-col flex-1 border border-blue-300 overflow-hidden rounded-md">
					<div class="w-full h-48">
						<img :alt="client.name" :src="client.image" class="block w-full h-full object-top object-cover">
					</div>
					<div class="flex-1 p-4 space-y-4">
						<h5 class="font-bold text-lg font-cursive">{{ client.name }}</h5>
						<p>{{ client.description }}</p>
					</div>
					<div class="p-4">
						<a
							:href="'/projects/' + client.slug"
							class="btn inline-block border border-[#0083B0] font-bold text-[#0083B0] text-sm rounded-md inline-block py-2 px-3 hover:bg-blue-100">
							More details
						</a>
					</div>
				</div>
			</div>
		</slide>

		<template #addons>
			<navigation/>
			<pagination/>
		</template>
	</carousel>
</template>

<style>
#projects_slider .carousel__prev, #projects_slider .carousel__next {
	background-color: #0083b0;
}

#projects_slider .carousel {
	text-align: left;
}

#projects_slider .carousel__slide {
	align-items: flex-start;
	flex-direction: column;
	text-align: left;
}
</style>