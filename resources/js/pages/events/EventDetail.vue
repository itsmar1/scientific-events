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
export default {
    props: ['id'],
    data() {
        return {
            selectedEvent: null,
            selectedSessions: null
        }
    },
    computed: {
        sessionLink() {
            return 'api/sessions/' + this.id;
        }
    },
    methods: {
        // loadSessions() {
        //     this.$store.dispatch('events/getEventSessions', this.id);
        //     this.selectedSessions = this.$store.getters['events/getEventSessions'];
        // },
        loadData() {
            this.selectedEvent = this.$store.getters['events/events'].find(
                (event) => event.id = this.id
            );
            this.$store.dispatch('events/getEventSessions', this.id);
            this.selectedSessions = this.$store.getters['events/getEventSessions']
        }
    },
    created() {
        // this.selectedEvent = this.$store.getters['events/events'].find(
        //     (event) => event.id = this.id
        // );
        // this.loadSessions();

        this.loadData();

    }

}
</script>

<style>

</style>
