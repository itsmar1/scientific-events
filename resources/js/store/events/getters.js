export default {
    events(state)
    {
        console.log(state.events);
        return state.events;
    },
    getEventSessions(state)
    {
        // console.log(state.eventSessions);
        return state.eventSessions;
    },
    getEventSession(state, id)
    {
        return state.sessions.filter( (session) => {
            session.event_id = id;
        })
    },
    event(state)
    {
        // console.log({...state.event});
        // const event = JSON.parse(JSON.stringify(state.event));
        console.log(state.event);
        return state.event;
    },
    sessions(state)
    {
        return state.sessions;
    },
    committees(state)
    {
        return state.committees;
    }

}
