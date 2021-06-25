import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../pages/auth/UserLogin.vue';
import UserRegister from '../pages/auth/UserRegister.vue';
import NotFound from '../pages/NotFound.vue';
import HomePage from '../pages/Home/HomePage.vue';
import ContactUs from '../pages/contact/ContactUs.vue';
import EventsList from '../pages/events/EventsList.vue';
import EventDetail from '../pages/events/EventDetail.vue';
import AdminDashboard from '../pages/dashboards/admin/AdminDashboard.vue';
// Admin routes
import EventsListAdmin from '../pages/dashboards/admin/EventsList.vue';
import ContactMessage from '../pages/dashboards/admin/ContactMessage.vue';
import EventAdmin from '../pages/dashboards/admin/EventAdmin.vue';
import EventResponsable from '../pages/dashboards/admin/EventResponsable.vue';
import SessionAdmin from '../pages/dashboards/admin/SessionAdmin.vue';
import UserAccount from '../pages/dashboards/admin/UserAccount.vue';
import RegularUser from '../pages/dashboards/admin/RegularUser.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        {
            path: '/events',
            component: EventsList,
        },
        {
            path: '/events/:id',
            component: EventDetail,
            props: true
        },
        { path: '/contact', component: ContactUs },
        { path: '/login', component: UserLogin },
        { path: '/register', component: UserRegister },
        {
            path: '/admin',
            component: AdminDashboard,
            children: [
                {
                    path: 'events',
                    component: EventsListAdmin,
                    children: [
                        {
                            path: ':id',
                            component: EventDetail,
                            props: true
                        }
                    ]
                },
                { path: 'contact', component: ContactMessage },
                { path: 'eventadmins', component: EventAdmin },
                { path: 'responsables', component: EventResponsable },
                { path: 'sessions', component: SessionAdmin },
                { path: 'users', component: RegularUser },
                { path: 'settings', component: UserAccount }
            ]
        },
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;
