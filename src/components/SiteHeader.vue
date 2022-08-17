<template>
	<header class="overflow-hidden relative hero">
		<div class="container px-4 py-8 mx-auto h-full">
			<div class="flex justify-between">
				<div class="h-10 w-10 rounded-full overflow-hidden">
					<a href="/">
						<img alt="Ashraf's Profile Picture" class="h-full w-full object-cover"
						     src="../assets/avatar.png">
					</a>
				</div>

				<nav class="text-[#dcf6fd]">
					<router-link :to="{ name: 'Home' }">Home</router-link>
				</nav>
			</div>
			<slot></slot>
		</div>
	</header>
</template>