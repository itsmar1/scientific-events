<template>
      <div class="event-list">
        <div class="container">
            <!-- <div class="row">
                <div class="col-sm-3">
                    <button class="btn btn-success btn-block" data-toggle="modal" data-target="#addEvent"><i class="fas fa-plus ml-auto"></i>   {{ $t('dashboard.events.list.create') }}</button>
                </div>
            </div>
            <hr> -->
            <div class="row">
                <div class="col-sm-12">
                    <event-filter @change-filter="setFilter"></event-filter>
                </div>
            </div>
            <base-card>
            <div class="row" v-for="event in events" :key="event.id">
                <div class="col-sm-3 text-center">
                    <div >
                        <!-- {{  event.type }} -->
                        <the-counter
                        :year="2021"
                        :month="7"
                        :date="8"
                        :hour="10"
                        :minute="24"
                        :second="40"
                        :millisecond="10"
                    ></the-counter>
                    </div>
                </div>
                <div class="col-sm-9">
                    <!-- <ul v-for="event in events" :key="event"> -->
                        <event-item
                        :id="event.id"
                        :image="event.image"
                        :name="event.name"
                        :description="event.description"
                        :city="event.city"
                        :country="event.country"
                        :type="event.type"
                        ></event-item>
                    <!-- </ul> -->
                </div>
            </div>
            </base-card>
            <!-- start modal -->
            
            <!-- end moadl -->
        </div>
    </div>
</template>

<script>
// import EventItem from "../../../components/events/EventItem.vue";
import EventItem from './EventItem.vue';
import EventFilter from '../../../components/events/EventFilter.vue';
import TheCounter from '../../../components/layouts/TheCounter.vue';

export default {
  components: {
    EventItem,
    EventFilter,
    TheCounter
  },
  data() {
    return {
      // events: [],
      activeFilters: {
          conference: true,
          formation: true,
          atelier: true
      },
      event: {
          name: null,
          description: null,
          type: null,
          startDate: null,
          endDate: null,
          city: null,
          country: null,
          address: null,
          venueName: null,
          phone: null,
          email: null,
          image: null
      },
      imagepreview: null
    };
  },
  computed: {
      events(){
          const events = this.$store.getters['responsable/events'];
          return events.filter( (event) => {
              if(this.activeFilters.conference && event.type === 'conference')
              {
                  return true;
              }
              if(this.activeFilters.formation && event.type === 'formation')
              {
                  return true;
              }
              if(this.activeFilters.atelier && event.type === 'atelier')
              {
                  return true;
              }
              return false;
          });
      },

  },
  methods: {
    async loadEvents() {
      await this.$store.dispatch('responsable/events');
      // test
      // await this.$store.dispatch("events/getAllSessions");
      // this.events = this.$store.getters["admin/events"];
    },
    // Events filter
    setFilter(updatedFilters){
        this.activeFilters = updatedFilters;
    },
    imageSelected(e){
            this.event.image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.event.image);
            reader.onload = e => {
            this.imagepreview = e.target.result;
            };
    },
    submitForm(){
            const data = new FormData;
            data.append('image', this.event.image);
            // this.event.image = data;
            this.$store.dispatch('responsable/postEvent', { event: this.event, image: data});
            // axios.post('api/userprofile', data)
            // .then(()=>{
            //     // window.location = '../profile';
            //     console.log(response);
            // }).catch(()=>{
            // })
    },
    updateEvent(payload)
    {
        this.$store.dispatch('responsable/putEvent', payload);
    }
  },
  created() {
    this.loadEvents();
  },
};
</script>

<style>
</style>
