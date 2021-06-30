<template>
<div class="event-detail">
    <div class="container">
        <div v-for="event in selectedEvent" :key="event.id">
            <base-card>
                <base-card>
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="text-center">{{ event.name }}</h1>
                            <img class="img-fluid mx-auto" :src="'/images/' + event.image" alt="">
                            <h3><i class="fas fa-map-marker-alt fa-2x"></i> {{ event.city }}, {{ event.country }}</h3>
                            <h4><i class="fas fa-calendar-alt fa-2x"></i>  {{ event.startDate }}</h4>
                            <p class="text-center">{{ event.description }}</p>
                        </div>
                    </div>
                </base-card>
            </base-card>
        </div>
        <base-card>
            <div class="row">
                <div class="col-sm-12">
                    <base-card>
                        <h2>{{ $t('events.detail.venue.title') }}</h2>
                    </base-card>
                    <base-card>
                        <div v-for="event in selectedEvent" :key="event.id">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><span class="venue-key">{{ $t('events.detail.venue.name') }}: </span> <span class="venue-value">{{ event.venueName }}</span></li>
                                    <li class="list-group-item"><span class="venue-key">{{ $t('events.detail.venue.address') }}: </span> <span class="venue-value">{{ event.address }}</span></li>
                                    <li class="list-group-item"><span class="venue-key">{{ $t('events.detail.venue.email') }}: </span> <span class="venue-value">{{ event.email }}</span></li>
                                    <li class="list-group-item"><span class="venue-key">{{ $t('events.detail.venue.phone') }}: </span> <span class="venue-value">{{ event.phone }}</span></li>
                                </ul>
                            </div>
                        </div>
                    </base-card>
                </div>
            </div>
        </base-card>
        <base-card>
        <div class="row">
            <div class="col-sm-12">
                <base-card>
                    <h2>{{ $t('events.detail.sessions.title') }}</h2>
                </base-card>
                <base-card>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">{{ $t('events.detail.sessions.hour') }}</th>
                                <th scope="col">{{ $t('events.detail.sessions.date') }}</th>
                                <th scope="col">{{ $t('events.detail.sessions.titre') }}</th>
                                <th scope="col">{{ $t('events.detail.sessions.type') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="session in selectedSessions" :key="session.id">
                                <td>{{ session.hour }}:00</td>
                                <td>{{ session.date }}</td>
                                <td>{{ session.title }}</td>
                                <td>{{ session.type }}</td>
                            </tr>
                        </tbody>
                    </table>
                </base-card>
            </div>
        </div>
        </base-card>
        <base-card>
        <div class="row">
            <div class="col-sm-12">
                <base-card>
                    <h2>{{ $t('events.detail.committees') }}</h2>
                </base-card>
                <base-card>
                    <div class="card">
                        <ul class="list-group list-group-flush"  v-for="committee in selectedCommittees" :key="committee.id">
                            <li class="list-group-item"><span class="committee-name">{{ committee.name }}</span></li>
                        </ul>
                    </div>
                </base-card>
            </div>
        </div>
        </base-card>
    </div>
</div>
</template>

<script>

//import SessionList from '../../components/events/SessionList.vue';
export default {
    // components: {
    //     SessionList
    // },
    props: ['id'],
    computed: {
        imageSource(image) {
            return '/images/' + image;
        },
        selectedEvent() {
            const event = this.$store.getters["events/event"];
            return event;

        },
        selectedSessions() {
            const sessions = this.$store.getters["events/sessions"];
            return sessions;
        },
        selectedCommittees() {
            const committees = this.$store.getters["events/committees"];
            return committees;
        }
    },
    methods: {
        // },
        async loadData() {
            await this.$store.dispatch("events/getEvent", this.id);
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
        // this.selectedEvent = this.$store.getters['events/events'].find(
        //     (event) => event.id === this.id
        // );


    }

}
</script>

<style>

</style>
