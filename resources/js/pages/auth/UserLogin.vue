<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-controll" v-model.trim="user.email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" v-model="user.password">
        </div>
        <input type="submit" value="Submit">
    </form>
    <button class="btn btn-primary" @click="logout">logout</button>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        async submitForm() {
            await this.$store.dispatch('loginUser', this.user);
            this.userRole();
        },
        logout(){
            // const token = localStorage.getItem('token');
            this.$store.dispatch('logout');
            this.$router.replace('/');
        },
        userRole() {
            const role = localStorage.getItem('role');
            if( role === 'admin'){
                this.$router.replace('/admin');
            }
            else if( role === 'user'){
                this.$router.replace('/admin');
            }
        }
    }

}
</script>

<style scoped>

</style>
