export default {
    events(state)
    {
        // console.log(state.events);
        return state.events;
    },
    selectedEvent(state)
    {
        return state.selectedEvent;
    },
    selectedEventSessions(state)
    {
        return state.selectedEventSessions;
    },
    selectedEventCommittees(state)
    {
        return state.selectedEventCommittees;
    },
    user(state)
    {
        return state.user;
    }

}
