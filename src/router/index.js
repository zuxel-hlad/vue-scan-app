import { createRouter, createWebHistory } from 'vue-router';
import Scan from '../pages/Scan.vue';
import Login from '../pages/Login.vue';
import Result from '../pages/Result.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/scan',
        },
        {
            path: '/scan',
            component: Scan,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/result',
            component: Result,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});

export default router;
