<template>
    <select class="custom-select" v-model="lang" @change="handleEvent($event)">
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
    </select>

</template>

<script>
export default {
    data() {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang: lang
        }
    },
    methods:{
        handleEvent(event)
        {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        }
    }
}
</script>

<style scoped>

</style>
