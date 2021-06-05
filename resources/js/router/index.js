import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../pages/auth/UserLogin.vue';
import UserRegister from '../pages/auth/UserRegister.vue';
import NotFound from '../pages/NotFound.vue';
import HomePage from '../pages/Home/HomePage.vue';
import ContactUs from '../pages/contact/ContactUs.vue';
import EventsList from '../pages/events/EventsList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/events', component: EventsList },
        { path: '/contact', component: ContactUs },
        { path: '/login', component: UserLogin },
        { path: '/register', component: UserRegister },
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;
