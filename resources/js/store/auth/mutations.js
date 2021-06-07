export default {
    loginUser(state, payload)
    {
        state.user = payload.user;
        state.userId = payload.user.id;
        state.token = payload.token;
        state.role = payload.user.role;
        state.isAuthenticated = true;

        localStorage.setItem('userId', payload.user.id);
        localStorage.setItem('role', payload.user.role);
        localStorage.setItem('token', payload.token);
        console.log(payload.user);
        console.log(payload.token);
    },
    logout(state)
    {
        state.user = null;
        state.userId = null;
        state.token = null;
        state.role = null;
        state.isAuthenticated = false;

        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
    }
}
