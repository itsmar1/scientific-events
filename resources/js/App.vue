<template>

    <the-header v-if="1 == 2"></the-header>
    <router-view></router-view>
    <the-footer v-if="1 == 2"></the-footer>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';
import AdminDashboard from './pages/dashboards/admin/AdminDashboard.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
        AdminDashboard,
    },
    computed: {
        isAuthenticated()
        {
            return this.$store.isAuthenticated;
        }
    }
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

}
</script>

<style>

</style>
