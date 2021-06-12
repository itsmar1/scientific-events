<template>
    <div class="event-list">
        <div class="container">
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
        </div>
    </div>
  <!-- <ul v-for="event in events" :key="event">
    <event-item
      :id="event.id"
      :image="event.image"
      :name="event.name"
      :description="event.description"
      :city="event.city"
      :country="event.country"
    ></event-item>
  </ul> -->
</template>

<script>
import EventItem from "../../components/events/EventItem.vue";
import EventFilter from "../../components/events/EventFilter.vue";
import TheCounter from '../../components/layouts/TheCounter.vue';

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
      }
      //testing
    };
  },
  computed: {
      events(){
          const events = this.$store.getters["events/events"];
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
      }
  },
  methods: {
    async loadEvents() {
      await this.$store.dispatch("events/getEvents");


      // this.events = this.$store.getters["events/events"];
    },
    setFilter(updatedFilters){
        this.activeFilters = updatedFilters;
    }
  },
  created() {
    this.loadEvents();
    // testing
  },
};
</script>

<style>
</style>
