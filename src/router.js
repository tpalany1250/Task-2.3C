import { createRouter, createWebHistory } from 'vue-router';

import myHome from './views/myHome.vue';
import RouterView from './views/routerView.vue';


const routes = [
    { path: '/', name: 'home', component: myHome },
    { path: '/RouterView', name: 'router', component: RouterView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
