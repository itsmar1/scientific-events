import axios from "axios";

export default {
    async getEvents(context)
    {
        // const response = await axios.get('api/events');
        // console.log(response.data);
        // context.commit('getEvents', response.data);

        // const { data } = await axios.get('/api/events');
        // context.commit('getEvents', data);

        const response = await fetch(
            `api/events`
          );
          const responseData = await response.json();

          if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
          }

          const events = [];

          for (const key in responseData) {
            const event = {
              id: key,
              name: responseData[key].name,
              image: responseData[key].image,
              description: responseData[key].description
            };
            events.push(event);
          }

          context.commit('getEvents', events);

    },
    async getEventSessions(context, id)
    {
    //     const { data } = await axios.get(`/api/sessions/${id}`);
    //     console.log(data);
    //     context.commit('getEventSessions', data);
    // }

    const response = await fetch(
        `/api/sessions/${id}`
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }

      const sessions = [];

      for (const key in responseData) {
        const session = {
          id: key,
          type: responseData[key].type,
        };
        sessions.push(session);
      }

      context.commit('getEventSessions', sessions);
    },
    async getAllSessions(context)
    {
        const { data } = await axios.get('api/getAllSessions');
        context.commit('getAllSessions', data);
    },



    async getEvent(_, id)
    {
        const response = await axios.get(`api/getEvent/${id}`);
        console.log(response);
        // context.commit('getEvent', data);


        // const response = await fetch(
        //     `api/getEvent/${id}`
        //   );
        //   const responseData = await response.json();
        //   console.log(responseData);

        //   if (!response.ok) {
        //     const error = new Error(responseData.message || 'Failed to fetch!');
        //     throw error;
        //   }

        //   const events = [];
        //   const sessions = [];
        //   const committees = [];

        //   for (const key in responseData) {
        //     const event = {
        //       id: key,
        //       name: responseData[key].name,
        //       image: responseData[key].image,
        //       description: responseData[key].description
        //     };
        //     events.push(event);
        //   }

        //   context.commit('getEvents', events);
    }

}
