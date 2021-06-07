// import axios from "axios"


export default {
    async registerUser(context, payload)
    {
        await axios.post('api/register', payload)
            .then( (res) => context.commit('registerUser', res.data))
            .catch( (err) => console.log(err) );
    },
    async loginUser(context, payload)
    {
        // const { data } = await axios.post('api/login', payload);
        // console.log(data);
        // context.commit('loginUser', data);

        await axios.post('api/login', payload)
            .then( (res) => context.commit('loginUser', res.data))
            .catch( (err) => console.log(err) );
    },
    async logout(context)
    {
        const response = await axios.post('api/logout', null, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        console.log(response.data.message);
        context.commit('logout');
    }
}
