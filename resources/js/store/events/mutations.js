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
        state.event = payload.events;
        console.log(payload.events);
        state.sessions = payload.sessions;
        console.log(payload.committees);
        state.committees = payload.committees;
    }

}
