import axios from "axios";

export default {

    // Events
    async events(context)
    {
        await axios.get('/api/admin/events', {
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
        await axios.get(`/api/admin/getEvent/${id}`, {
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
        await axios.post('/api/admin/postEvent', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putEvent(_, payload)
    {
        await axios.put(`/api/admin/putEvent/${payload.id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteEvent(_, id)
    {
        await axios.delete(`/api/admin/deleteEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // CONTACTS GET & DELETE
    async contacts(context)
    {
        await axios.get('/api/admin/contacts', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            context.commit('contacts', res.data);
        });
    },
    async deleteContacts(_, id)
    {
        await axios.delete(`/api/admin/contacts/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // Event Admins
    async getEventAdmins(context)
    {
        await axios.get('/api/admin/getEventAdmins', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('eventAdmins', res.data);
        });
    },
    async postEventAdmins(_, payload)
    {
        await axios.post('/api/admin/postEventAdmins', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putEventAdmins(_, payload)
    {
        console.log(payload.id);
        console.log(payload);
        await axios.put(`/api/admin/putEventAdmins/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteEventAdmins(_, id)
    {
        await axios.delete(`/api/admin/deleteEventAdmins/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },


    // Responsable CRUD APIs
    async getResponsable(context)
    {
        await axios.get('/api/admin/getResponsable', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('responsables', res.data);
        });
    },
    async postResponsable(_, payload)
    {
        await axios.post('/api/admin/postResponsable', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putResponsable(_, payload)
    {
        await axios.put(`/api/admin/putResponsable/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteResponsable(_, id)
    {
        await axios.delete(`/api/admin/deleteResponsable/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },



    // Session CRUD Admin APIs
    async getSessionAdmins(context)
    {
        await axios.get('/api/admin/getSessionAdmins', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('sessionAdmins', res.data);
        });
    },
    async postSessionAdmins(_, payload)
    {
        await axios.post('/api/admin/postSessionAdmins', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putSessionAdmins(_, payload)
    {
        await axios.put(`/api/admin/putSessionAdmins/${payload.id}`, payload.user, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteSessionAdmins(_, id)
    {
        await axios.delete(`/api/admin/deleteSessionAdmins/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },


    // User CRUD APIs
    async getUsers(context)
    {
        await axios.get('/api/admin/getUsers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('users', res.data);
        });
    },
    async postUsers(_, payload)
    {
        await axios.post('/api/admin/postUsers', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putUsers(_, payload)
    {
        await axios.put(`/api/admin/putUsers/${id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteUsers(_, id)
    {
        await axios.delete(`/api/admin/deleteUsers/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // GET & UPDATE account
    async user(context)
    {
        await axios.get('/api/admin/user', {
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
        await axios.put('/api/admin/user', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Logout user
    async logout(_)
    {
        const response = await axios.post('/api/admin/logout', null, {
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
