<template>
    <!-- How it works secion -->
    <div class="how-it-works">
        <div class="container text-center">
            <p class="how">{{ $t('homepage.how-it-works.how') }}</p>
            <h2>{{ $t('homepage.how-it-works.title') }}</h2>
            <p class="description">{{ $t('homepage.how-it-works.description.our') }} <span class="font-weight-bold">e{{ $t('homepage.how-it-works.description.event') }}</span> {{ $t('homepage.how-it-works.description.gives') }}<br> <span class="font-weight-bold">{{ $t('homepage.how-it-works.description.success') }}</span></p>
            <div class="row features">
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/Create_profile2x.jpg" alt="">
                    <h3>{{ $t('homepage.how-it-works.sign-up') }}</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/fill_event_data2x.jpg" alt="">
                    <h3>{{ $t('homepage.how-it-works.fill') }}</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/launch2x.jpg" alt="">
                    <h3>{{ $t('homepage.how-it-works.launch') }}</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/observe_magic2x.jpg" alt="">
                    <h3>{{ $t('homepage.how-it-works.let') }}</h3>
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
            <h2 class="text-center">{{ $t('homepage.types-events.title') }}</h2>
            <p class="types-desc text-center">{{ $t('homepage.types-events.description') }}</p>
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
                    <p>{{ $t('homepage.types-events.types') }}</p>
                    <h3>{{ $t('homepage.types-events.sub-title') }}</h3>
                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">{{ $t('homepage.types-events.conference') }}</p>
                    </div>
                    </div>

                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">{{ $t('homepage.types-events.workshop') }}</p>
                    </div>
                    </div>

                    <div class="d-flex">
                    <div class="p-4 align-self-start">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                        <p class="event-type">{{ $t('homepage.types-events.training') }}</p>
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
            <p class="text-center">{{ $t('homepage.types-of-roles.desc') }}</p>
            <h2 class="text-center">{{ $t('homepage.types-of-roles.title') }}</h2>
            <div class="row text-center">
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/seniorAdmin.jpg" alt="senior administrator">
                    <h3>{{ $t('homepage.types-of-roles.admin') }}s</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/eventAdmin.jpg" alt="Event Admin">
                    <h3>{{ $t('homepage.types-of-roles.event-admin') }}</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/organisationResponsables.jpg" alt="Organisation Responsables">
                    <h3>{{ $t('homepage.types-of-roles.responsable') }}</h3>
                </div>
                <div class="col-sm-6 col-md-3">
                    <img class="img-fluid" src="/images/homepage/roles/sessionAdmin.jpg" alt="Session Admin">
                    <h3>{{ $t('homepage.types-of-roles.session-admin') }}</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- End types of roles section -->


    <!-- Start Event plateform section -->
    <div class="events-intro">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h1>{{ $t('homepage.events-intro.title') }}</h1>
                    <h2>{{ $t('homepage.events-intro.subtitle') }}</h2>
                    <p>{{ $t('homepage.events-intro.do-you') }}</p>
                    <router-link class="btn btn-outline-primary" to="/events">{{ $t('homepage.events-intro.start') }}</router-link>
                </div>
                <div class="col-sm-12 col-md-6">
                    <img class="img-fluid" src="/images/homepage/event_management_platform.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- End Event plateform section -->

    <!-- Start Get Started -->
    <div class="get-started">
      <div class="container">
        <div class="row">
          <div class="col-md-8 text-right">
            <p>{{ $t('homepage.get-started.ready') }}</p>
          </div>
          <div class="col-md-4 text-left">
            <router-link to="/events">{{ $t('homepage.get-started.start') }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- End Get Started -->




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
