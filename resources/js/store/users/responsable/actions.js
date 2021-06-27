import axios from "axios";

export default {

    // Events
    async events(context)
    {
        await axios.get('/api/responsable/events', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            const events = JSON.parse(JSON.stringify(res.data));
            context.commit('events', events);
        });
    },
    async getEvent(context, id)
    {
        await axios.get(`/api/responsable/getEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            context.commit('getEvent', res.data);
        });
    },



    // Session CRUD Admin APIs
    async getSessionAdmins(context)
    {
        await axios.get('/api/responsable/getSessionAdmins', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('sessionAdmins', res.data);
        });
    },
    async postSessionAdmins(_, payload)
    {
        await axios.post('/api/responsable/postSessionAdmins', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putSessionAdmins(_, payload)
    {
        await axios.put(`/api/responsable/putSessionAdmins/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteSessionAdmins(_, id)
    {
        await axios.delete(`/api/responsable/deleteSessionAdmins/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },


    // User CRUD APIs
    async getUsers(context)
    {
        await axios.get('/api/responsable/getUsers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('users', res.data);
        });
    },
    async postUsers(_, payload)
    {
        await axios.post('/api/responsable/postUsers', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putUsers(_, payload)
    {
        await axios.put(`/api/responsable/putUsers/${id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteUsers(_, id)
    {
        await axios.delete(`/api/responsable/deleteUsers/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // GET & UPDATE account
    async user(context)
    {
        await axios.get('/api/responsable/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            const user = [];
            user.push(res.data);
            console.log(user);
            context.commit('user', user);
        });
    },
    async putUser(_, payload)
    {
        await axios.put('/api/responsable/user', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Logout user
    async logout(_)
    {
        const response = await axios.post('/api/responsable/logout', null, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        console.log(response.data.message);
    }
}
