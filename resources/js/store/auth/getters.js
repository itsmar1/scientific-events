export default {
    user(state)
    {
        return state.user;
    },
    userId(state)
    {
        return state.userId;
    },
    token(state)
    {
        return state.token;
    },
    role(state)
    {
        return state.token;
    },
    isAuthenticated(state)
    {
        console.log(state.isAuthenticated);
        return state.isAuthenticated;
    }
}
