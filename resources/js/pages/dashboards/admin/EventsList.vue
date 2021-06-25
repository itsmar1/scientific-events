<template>
      <div class="event-list">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <button class="btn btn-success btn-block" data-toggle="modal" data-target="#addEvent"><i class="fas fa-plus ml-auto"></i>   Create New Event</button>
                </div>
            </div>
            <hr>
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
                        @delete-event="deleteEvent"
                        @update-event="updateEvent"
                        ></event-item>
                    <!-- </ul> -->
                </div>
            </div>
            </base-card>
            <!-- start modal -->
            <div class="modal fade" id="addEvent">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">Add Event</h5>
                            <button class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" name="title" class="form-control" v-model.trim="event.name">
                            </div>
                            <div class="form-group mb-3">
                                <label for="description">Description</label>
                                <textarea name="description" rows="8" class="form-control" v-model="event.description"></textarea>
                            </div>
                            <!-- Start Image upload -->
                            <div class="custom-file form-group">
                                <input type="file" @change="imageSelected" class="custom-file-input" name="customFile">
                                <label class="custom-file-label form-control" for="customFile">Choose an image</label>
                            </div>
                            <div v-if="imagepreview" class="mt-3">
                                <img :src="imagepreview" class="figure-img img-fluid rounded"  style="max-height:100px;">
                            </div>
                            <!-- End Image upload -->
                            <hr/>
                            <form class="form-inline mb-3 mt-5">
                                <label for="startDate">Start Date </label><br>
                                <input type="date" name="startDate" class="form-control ml-5" v-model="event.startDate">
                            </form>
                            <form class="form-inline mb-3">
                                <label for="endDate">End Date </label><br>
                                <input type="date" name="endDate" class="form-control ml-5" v-model="event.endDate">
                            </form>
                            <div class="form-group">
                                <label for="category">Event Type</label>
                                <select class="form-control" v-model="event.type">
                                    <option value="conference">Conference</option>
                                    <option value="atelier">Workshop</option>
                                    <option value="formation">Training</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" name="country" class="form-control" v-model.trim="event.country">
                            </div>
                            <div class="form-group">
                                <label for="city">City</label>
                                <input type="text" name="city" class="form-control" v-model.trim="event.city">
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" name="address" class="form-control" v-model.trim="event.address">
                            </div>
                            <div class="form-group">
                                <label for="venueName">Venue Name</label>
                                <input type="text" name="venueName" class="form-control" v-model.trim="event.venueName">
                            </div>
                            <div class="form-group">
                                <label for="phone">Venue Phone Number</label>
                                <input type="text" name="phone" class="form-control" v-model.trim="event.phone">
                            </div>
                            <div class="form-group">
                                <label for="email">Venue Email</label>
                                <input type="email" name="email" class="form-control" v-model.trim="event.email">
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-dismiss="modal" @click="submitForm">Add Event</button>
                        </div>
                    </div>
                </div>
            </div>
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
          const events = this.$store.getters['admin/events'];
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
      await this.$store.dispatch('admin/events');
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
            this.$store.dispatch('admin/postEvent', { event: this.event, image: data});
            // axios.post('api/userprofile', data)
            // .then(()=>{
            //     // window.location = '../profile';
            //     console.log(response);
            // }).catch(()=>{
            // })
    },
    deleteEvent(id)
    {
        this.$store.dispatch('admin/deleteEvent', id);
    },
    updateEvent(payload)
    {
        this.$store.dispatch('admin/putEvent', payload);
    }
  },
  created() {
    this.loadEvents();
  },
};
</script>

<style>
</style>
