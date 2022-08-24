<script setup>
import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import clients from "../assets/projects.json"
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

let modules = [Navigation, Pagination, Scrollbar, Autoplay];

let breakpoints = {
	320: {
		slidesPerView: 1,
	},
	640: {
		slidesPerView: 2,
	},
	1024: {
		slidesPerView: 3,
	},
	1280: {
		slidesPerView: 4,
	}
}

</script>

<template>
	<Swiper id="projects_slider" :autoplay="{pauseOnMouseEnter: true}"
	        :modules="modules"
	        :pagination="{ clickable: true }"
	        :breakpoints="breakpoints"
	        :space-between="32" navigation>
		<SwiperSlide v-for="client in clients" :key="client.name" class="group">
			<div class="w-full h-full flex flex-col flex-1 bg-white overflow-hidden">
				<div class="flex flex-col flex-1 border overflow-hidden rounded-md">
					<div class="w-full h-48">
						<a :href="'/projects/' + client.slug">
							<img :alt="client.name" :src="client.featured_image"
							     class="block w-full h-full object-top object-cover">
						</a>
					</div>
					<div class="flex-1 p-4 space-y-4 transition-transform duration-300 group-hover:scale-105">
						<h5 class="font-bold text-lg font-cursive text-[#485b73] pl-2 border-l-4 border-[#485b73]">
							<a :href="'/projects/' + client.slug">
								{{ client.name }}
							</a>
						</h5>
						<p class="text-sm text-[#485b73] min-h-[3ch]">{{ client.description }}</p>
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
		</SwiperSlide>
	</Swiper>
</template>

<style lang="scss">
@at-root {
	:root {
		--swiper-pagination-bullet-size: 12px;
		--swiper-theme-color: #485b73;
	}
}

.swiper-slide {
	height: auto;
	align-self: stretch;
}

.swiper-button-prev, .swiper-button-next {
	padding: 75px 30px;
	top: 12%;
	//transform: translateY(-50%);
	color: #ffffff;
	background-color: rgba(0, 0, 0, 0.35);
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
	display: none;
}

.swiper-button-next, .swiper-rtl .swiper-button-prev {
	right: 0;
	left: auto;
}

.swiper-button-prev, .swiper-rtl .swiper-button-next {
	left: 0;
	right: auto;
}
</style>