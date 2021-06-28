import axios from "axios";

export default {

    // Events
    async events(context)
    {
        await axios.get('/api/user/events', {
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
        await axios.get(`/api/user/getEvent/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( (res) => {
            context.commit('getEvent', res.data);
        });
    },


    // Contact Admin
    async sendMessage(_, payload)
    {
        await axios.post('/api/user/contact', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // GET & UPDATE account
    async user(context)
    {
        await axios.get('/api/user/user', {
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
        await axios.put('/api/user/user', payload, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },




    // Logout user
    async logout(_)
    {
        const response = await axios.post('/api/user/logout', null, {
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
