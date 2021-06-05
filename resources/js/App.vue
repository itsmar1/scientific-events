<template>
    <the-header></the-header>
    <div style="margin-top: 200px"></div>
    <the-footer></the-footer>
    <router-view></router-view>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter
    }

}
</script>

<style>

</style>
