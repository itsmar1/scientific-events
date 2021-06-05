import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../pages/auth/UserLogin.vue';
import UserRegister from '../pages/auth/UserRegister.vue';
import NotFound from '../pages/NotFound.vue';
import HomePage from '../pages/Home/HomePage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/login', component: UserLogin },
        { path: '/register', component: UserRegister },
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;
