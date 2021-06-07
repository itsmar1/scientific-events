export default {
    getEvents(state, payload)
    {
        state.events = payload;


    },
    getEventSessions(state, payload)
    {
        state.eventSessions = payload;
    },
    getAllSessions(state, payload)
    {
        state.sessions = payload;
    }

}
