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
                    <base-badge :type="type" :title="type"></base-badge>
                    <div class="action">
                        <router-link class="btn btn-outline-primary float-right ml-auto" :to="eventDetailsLink">{{ $t('events.item.show') }} <i class="fas fa-chevron-circle-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'image', 'name', 'description', 'city', 'country', 'type'],
    computed: {
        imageSource() {
            return '/images/' + this.image;
        },
        eventDetailsLink() {
            return this.$route.path + '/' + this.id;
        }
    }

}
</script>

<style>

</style>
