import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Thanks from "../views/Thanks.vue";
import ProjectTemplate from "../components/ProjectTemplate.vue";

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
		path: "/projects/:projectName",
		name: "project",
		component: ProjectTemplate,
		props: route => ({ projectName: route.params.projectName })
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;