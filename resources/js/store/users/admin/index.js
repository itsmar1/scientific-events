import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            events: null,
            selectedEvent: null,
            selectedEventSessions: null,
            selectedEventCommittees: null,
            contacts: null,
            eventAdmins: null,
            responsables: null,
            sessionAdmins: null,
            users: null,
            user: null,
        }
    },
    mutations,
    actions,
    getters
}
