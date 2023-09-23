import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Thanks from "../views/Thanks.vue";

import TvShowSeeker from "../views/Projects/TvShowSeeker.vue"
import CairoSymphonyGuide from "../views/Projects/CairoSymphonyGuide.vue"
import Jammr from "../views/Projects/Jammr.vue"
import EewwEcomm from "../views/Projects/EewwEcomm.vue"
import EzzEgypt from "../views/Projects/EzzEgypt.vue"
import GameCase from "../views/Projects/GameCase.vue"
import AEzzAccountants from "../views/Projects/AEzzAccountants.vue"
import Itap from "../views/Projects/Itap.vue"
import AlNour from "../views/Projects/AlNour.vue"
import AlwCms from "../views/Projects/AlwCms.vue";
import HjhCms from "../views/Projects/HjhCms.vue";
import AkwCms from "../views/Projects/AkwCms.vue";
import Awp from "../views/Projects/Awp.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/thanks",
		name: "Thanks",
		component: Thanks,
	},
	{
		path: "/projects/tvshowseeker",
		name: "tvshowseeker",
		component: TvShowSeeker,
	},
	{
		path: "/projects/awp",
		name: "awp",
		component: Awp,
	},
	{
		path: "/projects/alw-cms",
		name: "alw-cms",
		component: AlwCms,
	},
	{
		path: "/projects/hjh-cms",
		name: "hjh-cms",
		component: HjhCms,
	},
	{
		path: "/projects/akw-cms",
		name: "akw-cms",
		component: AkwCms,
	},
	{
		path: "/projects/cairo-symphony-guide",
		name: "cairo-symphony-guide",
		component: CairoSymphonyGuide,
	},
	{
		path: "/projects/jammr",
		name: "jammr",
		component: Jammr,
	},
	{
		path: "/projects/eeww-ecomm",
		name: "eeww-ecomm",
		component: EewwEcomm,
	},
	{
		path: "/projects/ezz-egypt",
		name: "ezz-egypt",
		component: EzzEgypt,
	},
	{
		path: "/projects/game-case",
		name: "game-case",
		component: GameCase,
	},
	{
		path: "/projects/a-ezz-accountants",
		name: "a-ezz-accountants",
		component: AEzzAccountants,
	},
	{
		path: "/projects/itap",
		name: "itap",
		component: Itap,
	},
	{
		path: "/projects/al-nour",
		name: "al-nour",
		component: AlNour,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;