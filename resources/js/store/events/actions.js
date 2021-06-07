import axios from "axios";

export default {
    async getEvents(context)
    {
        const { data } = await axios.get('api/events');

        context.commit('getEvents', data);

    },
    async getEventSessions(context, id)
    {
        const { data } = await axios.get(`/api/sessions/${id}`);
        // const response = await axios.get(`/api/sessions/${id}`);
        console.log(data);
        context.commit('getEventSessions', data);
    }

}
