import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

import TvShowSeeker from "../views/Projects/TvShowSeeker.vue"
import CairoSymphonyGuide from "../views/Projects/CairoSymphonyGuide.vue"
import Jammr from "../views/Projects/Jammr.vue"
import EewwEcomm from "../views/Projects/EewwEcomm.vue"
import EzzEgypt from "../views/Projects/EzzEgypt.vue"
import GameCase from "../views/Projects/GameCase.vue"
import AEzzAccountants from "../views/Projects/AEzzAccountants.vue"
import Itap from "../views/Projects/Itap.vue"
import AlNour from "../views/Projects/AlNour.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/projects/tvshowseeker",
		name: "TvShowSeeker",
		component: TvShowSeeker,
	},
	{
		path: "/projects/cairo-symphony-guide",
		name: "CairoSymphonyGuide",
		component: CairoSymphonyGuide,
	},
	{
		path: "/projects/jammr",
		name: "Jammr",
		component: Jammr,
	},
	{
		path: "/projects/eeww-ecomm",
		name: "EewwEcomm",
		component: EewwEcomm,
	},
	{
		path: "/projects/ezz-egypt",
		name: "EzzEgypt",
		component: EzzEgypt,
	},
	{
		path: "/projects/game-case",
		name: "GameCase",
		component: GameCase,
	},
	{
		path: "/projects/a-ezz-accountants",
		name: "AEzzAccountants",
		component: AEzzAccountants,
	},
	{
		path: "/projects/itap",
		name: "Itap",
		component: Itap,
	},
	{
		path: "/projects/al-nour",
		name: "AlNour",
		component: AlNour,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;