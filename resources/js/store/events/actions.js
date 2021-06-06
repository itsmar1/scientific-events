export default {
    async getEvents(context)
    {
        // const response = await axios.get('api/events');
        // const events = null;

        // axios.get('api/events')
        // .then( response => response.data)
        // .then( items => {
        //     console.log(items);
        //     commit('getEvents', items);
        // });

        const { data } = await axios.get('api/events');
        // .then( response => commit('getEvents', response.data));
        context.commit('getEvents', data);

    }

}
