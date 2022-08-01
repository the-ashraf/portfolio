<script setup>
import SiteHeader from "../../components/SiteHeader.vue"
</script>
<template>
	<SiteHeader>
		<div class="grid grid-cols-2 gap-4 p-10">
			<div class="">
				<div class="pt-20">
					<!--this very page is built using vue3 and tailwind-->
					<div class="font-cursive text-4xl tracking-wider py-8">
						EEWW eComm.<br>
						Highly customizable ecommerce platform
					</div>
					<a class="btn inline-block border-2 border-[#0083B0] font-bold bg-[#0083B0] text-white text-sm rounded-md inline-block py-2 px-3 hover:bg-black/25" href="/">Back to all projects</a>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full absolute -top-10">
					<img class="" src="/public/clients/ecomm.png" alt="Screenshot from EEWW eComm">
				</div>
			</div>
		</div>
	</SiteHeader>

	<main class="max-w-6xl mx-auto pt-10 space-y-6 px-8">
		<div class="flex justify-between">
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Laravel</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">VueJs</div>
			<div class="py-3 px-4 border rounded-md border-gray-300 font-bold text-center">Livewire</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="space-y-4">
				<ul class="list-inside space-y-2">
					<li class="pl-2 border-l-2">Built specifically to suite almost all types of products, can be customized to add any amount of categories and products</li>
					<li class="pl-2 border-l-2">Admin panel built with Livewire to allow for rapid filtration and fast access</li>
					<li class="pl-2 border-l-2">Admin panel supports roles and permissions, Admins can add teams to manage all sections (like delivery and product management)</li>
					<li class="pl-2 border-l-2">Quick Stock previews and updates</li>
					<li class="pl-2 border-l-2">Ability to add specific delivery areas with difference delivery rates</li>
					<li class="pl-2 border-l-2">Orders management and filtration</li>
				</ul>

				<div>
					other features include...
					<ul class="list-inside list-disc">
						<li>Admins quick stats</li>
						<li>Roles and permissions</li>
						<li>Filter orders by any parameter</li>
						<li>Filter products by any parameter</li>
					</ul>
				</div>
			</div>


			<div class="relative">
				<div class="w-full h-full space-y-2">
					<img class="block" src="/public/clients/ecomm/ecomm_admin.png" alt="Screenshot from ecomm's admin page">

					<img class="block" src="/public/clients/ecomm/ecomm_roles.png" alt="Screenshot from ecomm's roles section">

					<img class="block" src="/clients/ecomm/ecomm_stats.png" alt="Screenshot from ecomm's stats section">
				</div>
			</div>
		</div>
	</main>
</template>