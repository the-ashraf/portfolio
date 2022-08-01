<template>
	<header class="bg-gradient-to-br from-[#00B4DB] to-[#0083B0] text-white overflow-hidden">
		<div class="max-w-6xl mx-auto ">
			<div class="flex justify-between px-8 pt-10">
				<div class="h-10 w-10 rounded-full overflow-hidden">
					<a href="/">
						<img class="h-full w-full object-cover" src="../assets/avatar.png" alt="Ashraf's Profile Picture">
					</a>
				</div>

				<nav>
					<router-link :to="{ name: 'Home' }">Home</router-link>
				</nav>
			</div>
			<slot></slot>
		</div>
	</header>
</template>