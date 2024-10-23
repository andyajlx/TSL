
import MainPage from '../pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
