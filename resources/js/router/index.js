import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../pages/auth/UserLogin.vue';
import UserRegister from '../pages/auth/UserRegister.vue';
import NotFound from '../pages/NotFound.vue';
import HomePage from '../pages/Home/HomePage.vue';
import ContactUs from '../pages/contact/ContactUs.vue';
import EventsList from '../pages/events/EventsList.vue';
import EventDetail from '../pages/events/EventDetail.vue';

// Admin routes
import AdminDashboard from '../pages/dashboards/admin/AdminDashboard.vue';
import EventsListAdmin from '../pages/dashboards/admin/EventsList.vue';
import ContactMessage from '../pages/dashboards/admin/ContactMessage.vue';
import EventAdmin from '../pages/dashboards/admin/EventAdmin.vue';
import EventResponsable from '../pages/dashboards/admin/EventResponsable.vue';
import SessionAdmin from '../pages/dashboards/admin/SessionAdmin.vue';
import UserAccount from '../pages/dashboards/admin/UserAccount.vue';
import RegularUser from '../pages/dashboards/admin/RegularUser.vue';

// Event Admin routes
import EventAdminDashboard from '../pages/dashboards/eventadmin/EventAdminDashboard.vue';
import EventsListEventAdmin from '../pages/dashboards/eventadmin/EventsList.vue';
import EventResponsableEventAdmin from '../pages/dashboards/eventadmin/EventResponsable.vue';
import SessionAdminEventAdmin from '../pages/dashboards/eventadmin/SessionAdmin.vue';
import RegularUserEventAdmin from '../pages/dashboards/eventadmin/RegularUser.vue';
import UserAccountEventAdmin from '../pages/dashboards/eventadmin/UserAccount.vue';


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
        // Admin Dashboard
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
        // Event Admin Dashboard
        {
            path: '/eventadmin',
            component: EventAdminDashboard,
            children: [
                {
                    path: 'events',
                    component: EventsListEventAdmin,
                    children: [
                        {
                            path: ':id',
                            component: EventDetail,
                            props: true
                        }
                    ]
                },
                { path: 'responsables', component: EventResponsableEventAdmin },
                { path: 'sessions', component: SessionAdminEventAdmin },
                { path: 'users', component: RegularUserEventAdmin },
                { path: 'settings', component: UserAccountEventAdmin }
            ]
        },        
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;
