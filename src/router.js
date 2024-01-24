import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";
import AppContact from "./pages/AppContact.vue";
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:AppHome,
        },
        {
            path:"/projects",
            name:"projects",
            component:AppProjects,
        },
        {
            path:"/project/:id",
            name:"project-detail",
            component:ProjectDetail,
        },
        {
            path:"/contacts/",
            name:"contacts",
            component:AppContact,
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: NotFound
        },
        
    ],
});

export default router;
