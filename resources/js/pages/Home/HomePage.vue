<template>
    <!-- How it works secion -->
    <div class="how-it-works">
        <div class="container text-center">
            <p class="how">How It Works</p>
            <h2>Online Event Planning and Management. Simplified.</h2>
            <p class="description">Our <span class="font-weight-bold">event planning platform</span> gives you the tools to design memorable experiences and run<br> <span class="font-weight-bold">successful events.</span></p>
            <div class="row features">
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/Create_profile2x.jpg" alt="">
                    <h3>Sign up and create your profile</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/fill_event_data2x.jpg" alt="">
                    <h3>Fill in the event data</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/launch2x.jpg" alt="">
                    <h3>Launch the event</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/observe_magic2x.jpg" alt="">
                    <h3>Let the magic happen</h3>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-sm-6 col-md-3">
                    <h3>Sign up and create your profile</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Fill in the event data</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Launch the event</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Let the magic happen</h3>
                </div>
            </div> -->
        </div>
    </div>


    <!-- Start Types events section -->
    <div class="types-events">
        <div class="container">
            <h2 class="text-center">Plan Many Types of Events Online</h2>
            <p class="types-desc text-center">ScienceEvents can help you manage different kind of scientific events</p>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="/images/homepage/eventTypes/conference.jpg" class="d-block w-100" alt="conference">
                        </div>
                        <div class="carousel-item">
                        <img src="/images/homepage/eventTypes/workshop.jpg" class="d-block w-100" alt="workshop">
                        </div>
                        <div class="carousel-item">
                        <img src="/images/homepage/eventTypes/training.jpg" class="d-block w-100" alt="training">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 slider-section">
                    <p>TYPES OF EVENTS</p>
                    <h3>ScienceEvents works for several types of events</h3>
                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">Conference</p>
                    </div>
                    </div>

                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">Workshop</p>
                    </div>
                    </div>

                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">Training</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- End Types events section -->


    <!-- Start types of roles section -->
    <div class="types-of-roles">
        <div class="container">
            <p class="text-center">types of roles</p>
            <h2 class="text-center">ScienceEvents empowers different types of event management roles</h2>
            <div class="row text-center">
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/seniorAdmin.jpg" alt="senior administrator">
                    <h3>senior administrators</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/eventAdmin.jpg" alt="Event Admin">
                    <h3>event administrators</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/organisationResponsables.jpg" alt="Organisation Responsables">
                    <h3>organisation responsables</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/sessionAdmin.jpg" alt="Session Admin">
                    <h3>session administrators</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- End types of roles section -->




    <!-- <the-counter :year="2021" :month="6"  :date="6" :hour="19" :minute="30" :second="32" :millisecond="31"></the-counter>
    <event-list></event-list> -->
</template>

<script>

// import TheCounter from '../../components/layouts/TheCounter.vue';
// import EventList from '../../pages/events/EventsList.vue';

export default {
    components: {
        // TheCounter,
        // EventList
    }

}
</script>

<style>

</style>
