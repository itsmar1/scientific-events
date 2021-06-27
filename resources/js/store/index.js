import { createStore } from 'vuex';
import eventsModule from './events/index.js';
import authModule from './auth/index.js';
import adminModule from './users/admin/index.js';
import eventAdminModule from './users/eventadmin/index.js';

const store = createStore({
    modules: {
        events: eventsModule,
        auth: authModule,
        admin: adminModule,
        eventadmin: eventAdminModule
    }

});

export default store;
