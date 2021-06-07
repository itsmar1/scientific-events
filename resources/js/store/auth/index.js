import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    state() {
        return {
            user: null,
            userId: null,
            token: null,
            role: null,
            isAuthenticated: false
        }
    },
    mutations,
    actions,
    getters
}
