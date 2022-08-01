<script setup>
import SiteHeader from "../../components/SiteHeader.vue"
</script>
<template>
	<SiteHeader>
		<div class="grid md:grid-cols-2 gap-4 p-10">
			<div class="order-2 md:order-1">
				<div class="md:pt-20">
					<!--this very page is built using vue3 and tailwind-->
					<div class="font-cursive text-4xl tracking-wider py-8">
						Ezz Egypt B2B.<br>
						A unique business to business ecommerce platform.
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative order-1 md:order-2">
				<div class="w-full h-60 md:h-full md:w-full md:absolute md:-top-10">
					<img class="w-full h-full object-cover object-top md:w-auto md:h-auto md:rounded-t-md" src="/clients/ezze.png" alt="Screenshot from Cairo Symphony Guide">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="flex justify-between">
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Laravel</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">VueJs</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="space-y-4">
				<ul class="list-inside space-y-2">
					<li class="pl-2 border-l-2">App allows factories and shops and service sellers to offer their products to individuals and businesses.</li>
					<li class="pl-2 border-l-2">Backend built with scaling in mind, app can be deployed on any size server</li>
					<li class="pl-2 border-l-2">App includes very complex forms that allows sellers to properly display their products</li>
					<li class="pl-2 border-l-2">Admin can require sellers to prove their tax identity and registration</li>
					<li class="pl-2 border-l-2">App has a language switcher and offer arabic/english versions with proper name values</li>
					<li class="pl-2 border-l-2">App is 100% responsive for all platforms and also is optimized for all social media sharers</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>Image Uploads</li>
						<li>A language switcher</li>
						<li>Admin approval for new vendors</li>
						<li>Features ads</li>
					</ul>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-2">
					<img class="block" src="/clients/ezzegypt/ezz_header.png" alt="Screenshot from ezzegypt's header section">

					<img class="block" src="/clients/ezzegypt/ezz_product.png" alt="Screenshot from ezzegypt's product section">
				</div>
			</div>
		</div>
	</main>
</template>