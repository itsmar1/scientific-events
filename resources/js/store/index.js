import { createStore } from 'vuex';
import eventsModule from './events/index.js';
import authModule from './auth/index.js';

const store = createStore({
    modules: {
        events: eventsModule,
        auth: authModule
    }

});

export default store;
