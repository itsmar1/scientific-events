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

// Organisation Responsable routes
import ResponsableDashboard from '../pages/dashboards/responsable/ResponsableDashboard.vue';
import EventsListResponsable from '../pages/dashboards/responsable/EventsList.vue';
import SessionAdminResponsable from '../pages/dashboards/responsable/SessionAdmin.vue';
import RegularUserResponsable from '../pages/dashboards/responsable/RegularUser.vue';
import UserAccountResponsable from '../pages/dashboards/responsable/UserAccount.vue';

// Session Admin routes
import SessionAdminDashboard from '../pages/dashboards/sessionadmin/SessionAdminDashboard.vue';
import EventsListSessionAdmin from '../pages/dashboards/sessionadmin/EventsList.vue';
import RegularUserSessionAdmin from '../pages/dashboards/sessionadmin/RegularUser.vue';
import UserAccountSessionAdmin from '../pages/dashboards/sessionadmin/UserAccount.vue';

// Simple User routes
import UserDashboard from '../pages/dashboards/user/UserDashboard.vue';
import EventsListUser from '../pages/dashboards/user/EventsList.vue';
import ContactAdmin from '../pages/dashboards/user/ContactAdmin.vue';
import UserAccountUser from '../pages/dashboards/user/UserAccount.vue';



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
        // Organisation Responsable Dashboard
        {
            path: '/responsable',
            component: ResponsableDashboard,
            children: [
                {
                    path: 'events',
                    component: EventsListResponsable,
                    children: [
                        {
                            path: ':id',
                            component: EventDetail,
                            props: true
                        }
                    ]
                },
                { path: 'sessions', component: SessionAdminResponsable },
                { path: 'users', component: RegularUserResponsable },
                { path: 'settings', component: UserAccountResponsable }
            ]
        },
        // Session Admin Dashboard
        {
            path: '/sessionadmin',
            component: SessionAdminDashboard,
            children: [
                {
                    path: 'events',
                    component: EventsListSessionAdmin,
                    children: [
                        {
                            path: ':id',
                            component: EventDetail,
                            props: true
                        }
                    ]
                },
                { path: 'users', component: RegularUserSessionAdmin },
                { path: 'settings', component: UserAccountSessionAdmin }
            ]
        },
        // Session Admin Dashboard
        {
            path: '/user',
            component: UserDashboard,
            children: [
                {
                    path: 'events',
                    component: EventsListUser,
                    children: [
                        {
                            path: ':id',
                            component: EventDetail,
                            props: true
                        }
                    ]
                },
                { path: 'contact', component: ContactAdmin },
                { path: 'settings', component: UserAccountUser }
            ]
        },
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;
