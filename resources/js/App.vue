<template>
  <!-- <the-header v-if="1 == 2"></the-header> -->
  <the-header v-if="!isAuthenticated"></the-header>
  <router-view></router-view>
  <!-- <div class="row">
      <div class="col-sm-4 text-center">
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
  </div> -->
  <!-- <the-footer v-if="1 == 2"></the-footer> -->
  <the-footer v-if="!isAuthenticated"></the-footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import AdminDashboard from "./pages/dashboards/admin/AdminDashboard.vue";

import TheCounter from "./components/layouts/TheCounter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    AdminDashboard,
    TheCounter,
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem('token');
    },
  },
  // data() {
  //     return {
  //         isAuthenticated: false,
  //     }
  // },
  // methods: {
  //     setIsAuthenticated() {
  //         this.isAuthenticated = this.$store.getters.isAuthenticated;
  //     }
  // },
  // mounted() {
  //     this.setIsAuthenticated();
  // }
};

</script>

<style>
</style>
