export default {
    events(state, payload)
    {
        state.events = payload;
    },
    getEvent(state, payload)
    {
        state.selectedEvent = payload.events;
        state.selectedEventSessions = payload.sessions;
        state.selectedEventCommittees = payload.committees;
    },
    contacts(state, payload)
    {
        state.contacts = payload;
    },
    eventAdmins(state, payload)
    {
        state.eventAdmins = payload;
    },
    responsables(state, payload)
    {
        state.responsables = payload;
    },
    sessionAdmins(state, payload)
    {
        state.sessionAdmins = payload;
    },
    users(state, payload)
    {
        state.users = payload;
    },
    user(state, payload)
    {
        state.user = payload;
    }

}
