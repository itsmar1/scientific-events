<template>
    <div class="container mt-5 form">
        <div class="row">
            <div class="col-sm-5 mx-auto login-container">
                <div class="form-container">
                    <h5><span class="science">Science</span><span class="events">Events</span></h5>
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="email">{{ $t('login.email') }}</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="email" name="email" class="form-control" placeholder="Enter email" v-model.trim="user.email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('login.password') }}</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" name="password" class="form-control" placeholder="Enter password" v-model="user.password">
                            </div>
                        </div>
                        <hr>
                        <!-- <input class="btn btn-outline-primary float-right" type="submit" value="Submit"> -->
                        <button class="btn btn-outline-primary float-right mt-2" type="submit"><i class="fas fa-sign-in-alt"></i> {{ $t('login.login') }}</button>
                        <br><br>
                    </form>
                    <p class="register mt-3">{{ $t('login.not') }} <router-link to="/register">{{ $t('login.create') }}</router-link></p>
                </div>
            </div>
        </div>
    </div>
    <!-- <button class="btn btn-primary" @click="logout">logout</button> -->
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
                this.$router.replace('/admin/events');
            }
            else if (role === 'event_admin')
            {
                this.$router.replace('/eventadmin/events');
            }
            else if( role === 'responsable')
            {
                this.$router.replace('/responsable/events');
            }
            else if(role === 'session_admin')
            {
                this.$router.replace('/sessionadmin/events');
            }
            else if( role === 'user'){
                this.$router.replace('/user/events');
            }
        }
    }

}
</script>

<style scoped>


</style>
