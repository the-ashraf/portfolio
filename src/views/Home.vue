<script setup>
import SiteHeader from "../components/SiteHeader.vue"
import SiteFooter from "../components/SiteFooter.vue"
import ProjectsSlider from '../components/ProjectsSlider.vue';

function scrollToElement(elementId) {
	const element = document.getElementById(elementId);
	element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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
				   href="#contact" @click.prevent="scrollToElement('contact')">Contact Me</a>
			</div>
		</div>


		<template #img>
			<img alt="Illustration of a computer and code"
			     class="w-full h-full max-w-sm md:max-w-full md:w-full md:h-auto object-cover block"
			     src="../assets/hero.svg">
		</template>
	</SiteHeader>

	<div id="projects" class="container px-4 py-8 mx-auto space-y-4">
		<h1 class="text-lg font-bold text-[#0083B0]">My Favorite Projects</h1>

		<ProjectsSlider/>
	</div>

	<div id="contact" class="bg-gradient-to-b from-gray-200 to-white">
		<div class="container px-4 py-8 mx-auto">
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-4">
					<h4 class="text-lg font-bold text-[#0083B0]">I'd love to hear from you, here are my contacts</h4>
					<div class="space-x-4 flex">
						<a class="text-[#004f9f] hover:text-[#0083B0] hover:scale-125 transition-all duration-300"
						   title="Send me an e-mail"
						   href="mailto:a.ezzat88@gmail.com?Subject=Something%20about%20an%20application">
							<svg aria-hidden="true" class="h-8 w-8" role="img" viewBox="0 0 24 24">
								<path
									d="M12 22q-2.05 0-3.875-.788q-1.825-.787-3.187-2.15q-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887q.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787Q9.95 2 12 2q2.075 0 3.887.787q1.813.788 3.175 2.151q1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137q.45.413 1.05.413q.6 0 1.05-.413q.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12t2.362 5.637Q8.725 20 12 20h5v2Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
									fill="currentColor"></path>
							</svg>
						</a>

						<a class="text-[#25d366] hover:text-[#0083B0] hover:scale-125 transition-all duration-300"
						   title="Find me on WhatsApp"
						   href="https://wa.me/+201008520909">
							<svg class="w-8 h-8" role="img" viewBox="0 0 24 24">
								<path
									d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
									fill="currentColor"/>
							</svg>
						</a>

						<a class="text-[#006AFF] hover:text-[#0083B0] hover:scale-125 transition-all duration-300"
						   title="Find me on Messenger"
						   href="https://m.me/the.ashraf">
							<svg aria-hidden="true" class="h-8 w-8" role="img" viewBox="0 0 24 24">
								<path
									d="M12 2a9.65 9.65 0 0 0-10 9.7a9.51 9.51 0 0 0 3.14 7.18a.81.81 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0a11 11 0 0 0 2.9.38A9.7 9.7 0 1 0 12 2Zm6 7.46l-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63Z"
									fill="currentColor"></path>
							</svg>
						</a>

						<a class="text-[#00acee] hover:text-[#0083B0] hover:scale-125 transition-all duration-300"
						   title="Find me on Twitter"
						   href="https://twitter.com/The__Ashraf">
							<svg aria-hidden="true" class="h-8 w-8" role="img" viewBox="0 0 24 24">
								<path
									d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
									fill="currentColor"></path>
							</svg>
						</a>
					</div>
					<p class="font-light leading-[2] max-w-sm">
						Contact me to get a quote, know more about a website idea you have, improvements to your existing website or even to know what TV show i'm currently watching.
					</p>
				</div>
				<div class="">
					<form name="ask-question" class="space-y-2" action="thanks" method="post" data-netlify="true"
					      data-netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded">
						<div class="grid grid-cols-2 gap-4">
							<div class="relative">
								<label for="name" class="text-sm text-gray-500">Name</label>
								<input type="text" id="name" name="port-name" class="w-full bg-gray-50 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out">
							</div>
							<div class="relative">
								<label for="email" class="text-sm text-gray-500">E-Mail</label>
								<input type="email" id="email" name="port-email" class="w-full bg-gray-50 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out">
							</div>
						</div>
						<div class="relative">
							<label for="message" class="text-sm text-gray-500">Message</label>
							<textarea id="message" name="port-message" class="w-full bg-gray-50 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
						</div>
						<button class="btn btn-primary leading-5" type="submit">Send</button>
					</form>
				</div>
			</div>

			<SiteFooter />
		</div>
	</div>
</template>