<template>
    <section v-if="!isAuthenticated">
        <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container">
            <router-link class="navbar-brand" to="/"><span class="elite">Science</span><span class="corp">Events</span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
                <base-lang></base-lang>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn btn-outline-primary" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    </section>
</template>

<script>

import BaseLang from '../ui/BaseLang.vue';

export default {
    components: {
        BaseLang
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
        // isAuthenticated() {
        //     return localStorage.getItem('isAuth');
        // }

    }

}
</script>

<style>

</style>
