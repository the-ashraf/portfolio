<script setup>
import SiteHeader from "../components/SiteHeader.vue"
import ProjectsSlider from '../components/ProjectsSlider.vue';
</script>
<template>
	<SiteHeader>
		<div class="grid grid-cols-12 text-[#dcf6fd] h-full mt-auto">
			<div class="col-span-8 flex items-center">
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
						With about 15 years of experience, a good amount of projects built, deployed and maintained <br> lets build something together.
					</p>
					<div class="space-x-4 tracking-wide">
						<a class="btn btn-secondary"
						   href="#projects">My Work</a>
						<a class="btn btn-primary"
						   href="#contact">Contact Me</a>
					</div>
				</div>
			</div>


			<div class="col-span-4 flex items-center">
				<div class="w-full">
					<img alt=""
					     class="w-full h-full object-cover block"
					     src="../assets/hero.svg">
				</div>
			</div>
		</div>
	</SiteHeader>

	<div id="projects" class="max-w-6xl mx-auto px-6 my-8 space-y-4">
		<h1 class="px-4 text-lg font-bold text-[#0083B0]">My Favorite Projects</h1>

		<ProjectsSlider/>
	</div>

	<div id="contact" class="max-w-6xl mx-auto px-6 my-8 space-y-4">
		<h4 class="px-4 text-lg font-bold text-[#0083B0]">I'd love to hear from you, here are my contacts</h4>
		<div class="px-4 space-x-4 flex">
			<a href="mailto:a.ezzat88@gmail.com?Subject=Something%20about%20an%20application">
				<svg aria-hidden="true" class="h-8 w-8 hover:text-[#0083B0]"
				     height="32" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 24 24" width="32"
				     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path
						d="M12 22q-2.05 0-3.875-.788q-1.825-.787-3.187-2.15q-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887q.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787Q9.95 2 12 2q2.075 0 3.887.787q1.813.788 3.175 2.151q1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137q.45.413 1.05.413q.6 0 1.05-.413q.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12t2.362 5.637Q8.725 20 12 20h5v2Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
						fill="currentColor"></path>
				</svg>
			</a>

			<a href="https://m.me/the.ashraf">
				<svg aria-hidden="true" class="h-8 w-8 hover:text-[#0083B0]"
				     height="32" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 24 24" width="32"
				     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path
						d="M12 2a9.65 9.65 0 0 0-10 9.7a9.51 9.51 0 0 0 3.14 7.18a.81.81 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0a11 11 0 0 0 2.9.38A9.7 9.7 0 1 0 12 2Zm6 7.46l-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63Z"
						fill="currentColor"></path>
				</svg>
			</a>

			<a href="https://twitter.com/The__Ashraf">
				<svg aria-hidden="true" class="h-8 w-8 hover:text-[#0083B0]"
				     height="32" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 24 24" width="32"
				     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path
						d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
						fill="currentColor"></path>
				</svg>
			</a>
		</div>
	</div>
</template>