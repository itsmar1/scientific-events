import axios from "axios";

export default {

    // Events
    async events(context)
    {
        await axios.get('/api/eventadmin/events', {
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
        await axios.get(`/api/eventadmin/getEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            context.commit('getEvent', res.data);
        });
    },
    async postEvent(_, payload)
    {
        await axios.post('/api/eventadmin/postEvent', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putEvent(_, payload)
    {
        await axios.put(`/api/eventadmin/putEvent/${payload.id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteEvent(_, id)
    {
        await axios.delete(`/api/eventadmin/deleteEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Responsable CRUD APIs
    async getResponsable(context)
    {
        await axios.get('/api/eventadmin/getResponsable', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('responsables', res.data);
        });
    },
    async postResponsable(_, payload)
    {
        await axios.post('/api/eventadmin/postResponsable', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putResponsable(_, payload)
    {
        await axios.put(`/api/eventadmin/putResponsable/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteResponsable(_, id)
    {
        await axios.delete(`/api/eventadmin/deleteResponsable/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },



    // Session CRUD Admin APIs
    async getSessionAdmins(context)
    {
        await axios.get('/api/eventadmin/getSessionAdmins', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('sessionAdmins', res.data);
        });
    },
    async postSessionAdmins(_, payload)
    {
        await axios.post('/api/eventadmin/postSessionAdmins', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putSessionAdmins(_, payload)
    {
        await axios.put(`/api/eventadmin/putSessionAdmins/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteSessionAdmins(_, id)
    {
        await axios.delete(`/api/eventadmin/deleteSessionAdmins/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },


    // User CRUD APIs
    async getUsers(context)
    {
        await axios.get('/api/eventadmin/getUsers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('users', res.data);
        });
    },
    async postUsers(_, payload)
    {
        await axios.post('/api/eventadmin/postUsers', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putUsers(_, payload)
    {
        await axios.put(`/api/eventadmin/putUsers/${id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteUsers(_, id)
    {
        await axios.delete(`/api/eventadmin/deleteUsers/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // GET & UPDATE account
    async user(context)
    {
        await axios.get('/api/eventadmin/user', {
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
        await axios.put('/api/eventadmin/user', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Logout user
    async logout(_)
    {
        const response = await axios.post('/api/eventadmin/logout', null, {
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
