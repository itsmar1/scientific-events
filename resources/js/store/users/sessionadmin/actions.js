import axios from "axios";

export default {

    // Events
    async events(context)
    {
        await axios.get('/api/sessionadmin/events', {
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
        await axios.get(`/api/sessionadmin/getEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            context.commit('getEvent', res.data);
        });
    },




    // User CRUD APIs
    async getUsers(context)
    {
        await axios.get('/api/sessionadmin/getUsers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then( (res) => {
            context.commit('users', res.data);
        });
    },
    async postUsers(_, payload)
    {
        await axios.post('/api/sessionadmin/postUsers', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async putUsers(_, payload)
    {
        await axios.put(`/api/sessionadmin/putUsers/${id}`, payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    async deleteUsers(_, id)
    {
        await axios.delete(`/api/sessionadmin/deleteUsers/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },


    // GET & UPDATE account
    async user(context)
    {
        await axios.get('/api/sessionadmin/user', {
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
        await axios.put('/api/sessionadmin/user', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Logout user
    async logout(_)
    {
        const response = await axios.post('/api/sessionadmin/logout', null, {
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
