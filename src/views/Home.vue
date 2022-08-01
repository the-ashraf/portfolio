<script setup>
import SiteHeader from "../components/SiteHeader.vue"
import ProjectsSlider from '../components/ProjectsSlider.vue';
</script>
<template>
	<SiteHeader>
		<div class="grid md:grid-cols-2 gap-4 p-10">
			<div class="order-2 md:order-1">
				<div class="md:pt-20">
					<div class="inline-block font-bold bg-black/20 pr-2 rounded-md">
						<span class="text-lg">👋</span> Hello,
					</div>
					<!--this very page is built using vue3 and tailwind-->
					<div class="font-cursive text-4xl tracking-wider pt-8">
						I'm Ashraf, <br>
						a full-stack developer from Cairo, Egypt.
					</div>
					<div class="space-x-4 pt-16 tracking-wide">
						<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="#projects">My Work</a>
						<a class="btn inline-block border-2 border-white/50 font-bold text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-white/20" href="#contact">Contact Me</a>
					</div>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:absolute md:-top-10">
					<img class="w-full h-full object-top object-cover md:w-auto md:h-auto md:object-fill" src="../assets/hero_illustration.svg" alt="">
				</div>
			</div>
		</div>
	</SiteHeader>

	<div id="projects" class="max-w-6xl mx-auto px-6 my-8 space-y-4">
		<h1 class="px-4 text-lg font-bold text-[#0083B0]">My Favorite Projects</h1>

		<ProjectsSlider />
	</div>

	<div id="contact" class="max-w-6xl mx-auto px-6 my-8 space-y-4">
		<h4 class="px-4 text-lg font-bold text-[#0083B0]">I'd love to hear from you, here are my contacts</h4>
		<div class="px-4 space-x-4 flex">
			<a href="mailto:a.ezzat88@gmail.com?Subject=Something%20about%20an%20application">
				<svg class="h-8 w-8 hover:text-[#0083B0]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788q-1.825-.787-3.187-2.15q-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887q.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787Q9.95 2 12 2q2.075 0 3.887.787q1.813.788 3.175 2.151q1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137q.45.413 1.05.413q.6 0 1.05-.413q.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12t2.362 5.637Q8.725 20 12 20h5v2Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"></path></svg>
			</a>

			<a href="https://m.me/the.ashraf">
				<svg class="h-8 w-8 hover:text-[#0083B0]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a9.65 9.65 0 0 0-10 9.7a9.51 9.51 0 0 0 3.14 7.18a.81.81 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0a11 11 0 0 0 2.9.38A9.7 9.7 0 1 0 12 2Zm6 7.46l-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63Z"></path></svg>
			</a>

			<a href="https://twitter.com/The__Ashraf">
				<svg class="h-8 w-8 hover:text-[#0083B0]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path></svg>
			</a>
		</div>
	</div>
</template>