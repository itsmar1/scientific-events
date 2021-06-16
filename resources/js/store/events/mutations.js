export default {
    getEvents(state, payload)
    {
        state.events = payload;


    },
    // getEventSessions(state, payload)
    // {
    //     state.eventSessions = payload;
    // },
    // getAllSessions(state, payload)
    // {
    //     state.sessions = payload;
    // },
    getEvent(state, payload)
    {
        // console.log(payload.event);
        state.event = payload.event;
        state.sessions = payload.sessions;
        state.committees = payload.committees;
    }

}
