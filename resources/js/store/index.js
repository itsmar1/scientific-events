import { createStore } from 'vuex';
import eventsModule from './events/index.js';
import authModule from './auth/index.js';
import adminModule from './users/admin/index.js';

const store = createStore({
    modules: {
        events: eventsModule,
        auth: authModule,
        admin: adminModule
    }

});

export default store;
