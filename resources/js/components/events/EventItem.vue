<template>
    <li>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img class="img-fluid align-self-start" :src="imageSource" alt="image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ name }}</h5>
                        <p class="card-text">{{ description }}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div class="action">
                        <router-link class="btn btn-outline-primary" :to="eventDetailsLink">Show Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'image', 'name', 'description'],
    computed: {
        imageSource() {
            return 'images/' + this.image;
        },
        eventDetailsLink() {
            return this.$route.path + '/' + this.id;
        }
    }

}
</script>

<style>

</style>
