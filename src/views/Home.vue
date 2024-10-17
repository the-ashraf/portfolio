<script setup>
import {ref} from "vue";
import SiteHeader from "../components/SiteHeader.vue"
import SiteFooter from "../components/SiteFooter.vue"
import ProjectsSlider from '../components/ProjectsSlider.vue';

const input = ref(null)

const scrollToElement = (elementId, focus = false) => {
	const element = document.getElementById(elementId);
	element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  if (focus) {
    setTimeout(() => element.querySelector('#name').focus(), 400)
  }
}

</script>
<template>
	<SiteHeader>
		<div class="space-y-8">
			<div class="inline-flex gap-2 items-center py-1 px-3 bg-black/20 rounded-md shadow">
				<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24">
					<path
						d="M7.03 4.95 3.5 8.5c-3.33 3.31-3.33 8.69 0 12s8.69 3.33 12 0l6-6c1-.97 1-2.56 0-3.54-.1-.12-.23-.23-.37-.32l.37-.39c1-.97 1-2.56 0-3.54-.14-.16-.33-.3-.5-.41.38-.92.21-2.02-.54-2.77-.87-.87-2.22-.96-3.2-.28a2.517 2.517 0 0 0-3.88-.42l-2.51 2.51c-.09-.14-.2-.27-.32-.39a2.53 2.53 0 0 0-3.52 0m1.41 1.42c.2-.2.51-.2.71 0s.2.51 0 .71l-3.18 3.18a3 3 0 0 1 0 4.24l1.41 1.41a5.004 5.004 0 0 0 1.12-5.36l6.3-6.3c.2-.2.51-.2.7 0s.21.51 0 .71l-4.59 4.6 1.41 1.41 6.01-6.01c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6.01 6.01 1.41 1.41 4.95-4.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-5.66 5.65 1.41 1.42 3.54-3.54c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5H23M1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5H1Z"
						fill="currentColor"/>
				</svg>
				<span>Hello</span>
			</div>
			<!--this very page is built using vue3 and tailwind-->
			<div class="text-5xl font-bold leading-[1.3]">
				I'm Ashraf, <br>
				a full-stack developer <br>
				from Cairo, Egypt.
			</div>
			<p class="font-light leading-[2]">
				With about 15 years of experience, a good amount of projects built, deployed and maintained <br>
				lets build something together.
			</p>
			<div class="space-x-4 tracking-wide">
				<a class="btn btn-secondary"
				   href="#projects" @click.prevent="scrollToElement('projects')">My Work</a>
				<a class="btn btn-primary"
				   href="#contact" @click.prevent="scrollToElement('contact', true)">Contact Me</a>
			</div>
		</div>


		<template #img>
			<img alt="Illustration of a computer and code"
			     class="w-full h-full max-w-sm md:max-w-full md:w-full md:h-auto object-cover block"
			     src="../assets/hero.svg">
		</template>
	</SiteHeader>

	<div id="projects" class="container px-4 pt-8 pb-16 mx-auto space-y-4">
		<h1 class="text-lg font-bold text-[#0083B0]">My Favorite Projects</h1>

		<ProjectsSlider/>
	</div>

	<div id="contact" class="">
		<div class="container mx-auto">
			<SiteFooter />
		</div>
	</div>
</template>