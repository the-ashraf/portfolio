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
import DotCareCms from "../views/Projects/DotCareCms.vue";
import Awp from "../views/Projects/Awp.vue";
import Aes from "../views/Projects/Aes.vue";
import Aha from "../views/Projects/Aha.vue";
import SayaPublic from "../views/Projects/SayaPublic.vue";
import SayaAdmin from "../views/Projects/SayaAdmin.vue";
import ElsewedyAuthenticator from "../views/Projects/ElsewedyAuthenticator.vue";
import SatransCms from "../views/Projects/SatransCms.vue";
import SatransAdmin from "../views/Projects/SatransAdmin.vue";

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
		path: "/projects/satrans-admin",
		name: "satrans-admin",
		component: SatransAdmin,
	},
	{
		path: "/projects/satrans-cms",
		name: "satrans-cms",
		component: SatransCms,
	},
	{
		path: "/projects/elsewedy-authenticator",
		name: "elsewedy-authenticator",
		component: ElsewedyAuthenticator,
	},
	{
		path: "/projects/saya-admin",
		name: "saya-admin",
		component: SayaAdmin,
	},
	{
		path: "/projects/saya-public",
		name: "saya-public",
		component: SayaPublic,
	},
	{
		path: "/projects/dotcare-cms",
		name: "dotcare-cms",
		component: DotCareCms,
	},
	{
		path: "/projects/aha",
		name: "aha",
		component: Aha,
	},
	{
		path: "/projects/awp",
		name: "awp",
		component: Awp,
	},
	{
		path: "/projects/aes",
		name: "aes",
		component: Aes,
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