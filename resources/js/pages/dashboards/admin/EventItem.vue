<template>
    <li class="event-item">
        <!-- <div class="card mb-3" style="max-width: 540px;"> -->
        <div class="card mb-3 flex-row flex-wrap">
            <div class="row no-gutters">
                <div class="col-md-4">
                <!-- <img class="img-fluid align-self-start" :src="imageSource" alt="image"> -->
                <img class="card-img-left img-fluid align-self-start" :src="imageSource" alt="image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{{ name }}</h2>
                        <h3><i class="fas fa-map-marker-alt"></i> {{ city }}, {{ country }}</h3>
                        <p class="card-text">{{ description }}</p>
                    </div>
                    <base-badge :type="type" :title="type" class="mb-1"></base-badge>
                    <!-- <div class="update-delete-event mt-auto">
                        <button class="btn btn-warning ml-auto" data-toggle="modal" data-target="#updateEvent">Update</button>
                        <button class="btn btn-danger ml-3" @click="deleteEvent">Delete</button>
                    </div> -->
                    <div class="action">
                        <div class="update-delete-event">
                            <button class="btn btn-warning ml-auto" data-toggle="modal" data-target="#updateEvent">Update</button>
                            <button class="btn btn-danger ml-3" @click="deleteEvent">Delete</button>
                        </div>
                        <router-link class="btn btn-outline-primary float-right ml-auto" :to="eventDetailsLink">Show Event Details <i class="fas fa-chevron-circle-right"></i></router-link>
                    </div>
                </div>

            </div>
        </div>
        <!-- start modal -->
            <div class="modal fade" id="updateEvent">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-warning text-white">
                            <h5 class="modal-title">Update Event</h5>
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
                            <form class="form-group mb-3 mt-5">
                                <label for="startDate">Start Date </label><br>
                                <input type="date" name="startDate" class="form-control" v-model="event.startDate">
                            </form>
                            <form class="form-group mb-3">
                                <label for="endDate">End Date </label><br>
                                <input type="date" name="endDate" class="form-control" v-model="event.endDate">
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
                            <button class="btn btn-warning" data-dismiss="modal" @click="submitForm">Update Event</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end moadl -->
    </li>

</template>

<script>
export default {
    props: ['id', 'image', 'name', 'description', 'city', 'country', 'type'],
    data() {
        return {
            event: {
                id: this.id,
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
        imageSource() {
            return '/images/' + this.image;
        },
        eventDetailsLink() {
            return this.$route.path + '/' + this.id;
        }
    },
    methods: {
        deleteEvent() {
            this.$emit('delete-event', this.id);
        },
        imageSelected(e){
            this.event.image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.event.image);
            reader.onload = e => {
                this.imagepreview = e.target.result;
            };
        },
        submitForm() {
            this.$emit('update-event', this.event);
        }
    }

}
</script>

<style>

</style>
