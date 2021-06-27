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
    sessionAdmins(state)
    {
        return state.sessionAdmins;
    },
    users(state)
    {
        return state.users;
    },
    user(state)
    {
        return state.user;
    }

}
