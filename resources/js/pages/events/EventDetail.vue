<template>
    <div class="event-header">
        <h2>{{ selectedEvent.name }}</h2>
    </div>
    <div>
        <img class="image-flex" src="" alt="">
    </div>
    <div class="about">
        <h3>About ...</h3>
        <p>Description Here</p>
    </div>
    <ul v-for="session in selectedSessions" :key="session">
        <li>{{ session.type }}</li>
    </ul>
</template>

<script>

//import SessionList from '../../components/events/SessionList.vue';
export default {
    // components: {
    //     SessionList
    // },
    props: ['id'],
    data() {
        return {
            selectedEvent: {},
            selectedSessions: {}
        }
    },
    computed: {
        sessionLink() {
            return 'api/sessions/' + this.id;
        }
    },
    methods: {
        // },
        loadData() {
            this.$store.dispatch('events/getEvent', this.id);
            // await axios.get(`api/getEvent/${this.id}`)
            // .then( (res) => {
            //     this.selectedEvent = res.data.events;
            //     console.log(res.data.events);
            //     this.selectedSessions = res.data.sessions;
            // })
            // .catch( (error) => console.log(error));

        }
    },
    created() {
        this.loadData();
        // this.selectedEvent = await this.$store.getters['events/events'].find(
        //     (event) => event.id === this.id
        // );


    }

}
</script>

<style>

</style>
