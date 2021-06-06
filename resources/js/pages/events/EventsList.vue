<template>
    <ul v-for="event in events" :key="event">
        <event-item :image="event.image" :name="event.name" :description="event.description"></event-item>
    </ul>
</template>

<script>

import EventItem from '../../components/events/EventItem.vue';

export default {
    components: {
        EventItem
    },
    data() {
        return {
            events: []
        }
    },
    methods: {
        async loadEvents()
        {
            await this.$store.dispatch('events/getEvents');
            this.events = this.$store.getters['events/events'];
        }
    },
    created() {
        this.loadEvents();
    }

}
</script>

<style>

</style>
