<template>
	<header class="overflow-hidden relative hero">
		<div class="container px-4 py-8 mx-auto h-full">
			<div class="flex justify-between items-center mb-8">
				<div class="h-10 w-10 rounded-full overflow-hidden">
					<a href="/">
						<img alt="Ashraf's Profile Picture" class="h-full w-full object-cover"
						     src="../assets/avatar.png">
					</a>
				</div>

				<nav class="text-[#dcf6fd]">
					<router-link class="btn btn-primary" :to="{ name: 'Home' }">Home</router-link>
				</nav>
			</div>

			<div class="flex flex-col md:grid md:grid-rows-1 md:grid-cols-12 text-[#dcf6fd] h-full mt-auto">
				<div class="order-2 md:order-1 md:col-span-8 flex flex-col md:flex-row items-center text-center md:text-left">
					<slot></slot>
				</div>

				<div class="order-1 md:order-2 md:col-span-4 flex flex-col items-center justify-center">
					<slot name="img"></slot>
				</div>
			</div>
		</div>
	</header>
</template>