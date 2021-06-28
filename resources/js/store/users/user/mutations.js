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
    user(state, payload)
    {
        state.user = payload;
    }

}
