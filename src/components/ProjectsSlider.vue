<script setup>
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import clients from "../assets/projects.json"

const breakpoints = {
	// 700px and up
	100: {
		itemsToShow: 1,
		snapAlign: 'start',
	},
	// 700px and up
	500: {
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
	<carousel id="projects_slider" :breakpoints='breakpoints' :wrapAround="true">
		<slide v-for="client in clients" :key="client.name" class="">
			<div class="w-full flex flex-col flex-1 px-4 bg-white">
				<div class="flex flex-col flex-1 border border-[#485b73] overflow-hidden rounded-md">
					<div class="w-full h-48">
						<img :alt="client.name" :src="client.featured_image" class="block w-full h-full object-top object-cover">
					</div>
					<div class="flex-1 p-4 space-y-4">
						<h5 class="font-bold text-lg font-cursive text-[#485b73] pl-2 border-l-4 border-[#485b73]">{{ client.name }}</h5>
						<p class="text-sm text-[#485b73]">{{ client.description }}</p>
					</div>
					<div class="p-4">
						<a
							:href="'/projects/' + client.slug"
							class="btn btn-secondary">
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

<style lang="scss">
#projects_slider {
	.carousel {
		text-align: left;
	}

	.carousel__slide {
		align-items: flex-start;
		flex-direction: column;
		text-align: left;
	}

	.carousel__pagination-button {
		background-color: #ffe9bf;
	}

	.carousel__prev, .carousel__next, .carousel__pagination-button--active {
		background-color: #f9bf3b;
	}
}
</style>