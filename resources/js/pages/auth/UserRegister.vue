<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" class="form-control" v-model.trim="user.firstName">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" class="form-control" v-model.trim="user.lastName">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-controll" v-model.trim="user.email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="user.password">
        </div>
        <div class="form-group">
            <label for="password_confirmation">Password Confirmation</label>
            <input type="password" name="password_confirmation" class="form-control" v-model="user.password_confirmation">
        </div>
        <input type="submit" value="Submit">
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        }
    },
    methods: {
        async submitForm() {
            await this.$store.dispatch('registerUser', this.user);
        }
    }

}
</script>

<style>

</style>
