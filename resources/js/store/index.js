import { createStore } from 'vuex';
import eventsModule from './events/index.js';
import authModule from './auth/index.js';
import adminModule from './users/admin/index.js';
import eventAdminModule from './users/eventadmin/index.js';
import responsableModule from './users/responsable/index.js';
import sessionAdminModule from './users/sessionadmin/index.js';
import userModule from './users/user/index.js';

const store = createStore({
    modules: {
        events: eventsModule,
        auth: authModule,
        admin: adminModule,
        eventadmin: eventAdminModule,
        responsable: responsableModule,
        sessionadmin: sessionAdminModule,
        user: userModule
    }

});

export default store;
