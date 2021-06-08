<template>
    <div class="container mt-5 form">
        <div class="row">
            <div class="col-sm-5 mx-auto">
                <div class="form-container">
                    <h5><span class="science">Science</span><span class="events">Events</span></h5>
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="firstName" class="form-control" placeholder="Enter first name" v-model.trim="user.firstName">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-male"></i></span>
                                </div>
                                <input type="text" name="lastName" class="form-control" placeholder="Enter last name" v-model.trim="user.lastName">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" name="email" class="form-control" placeholder="Enter email" v-model.trim="user.email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" name="password" class="form-control" placeholder="Enter password" v-model="user.password">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Confirm Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm password" v-model="user.password_confirmation">
                            </div>
                        </div>
                        <hr>
                        <!-- <input class="btn btn-outline-primary float-right" type="submit" value="Submit"> -->
                        <button class="btn btn-outline-primary float-right mt-2" type="submit"><i class="fas fa-user"></i> Register</button>
                        <br><br>
                    </form>
                    <p class="register mt-3">Already have an account? <router-link to="/login">Sign in</router-link></p>
                </div>
            </div>
        </div>
    </div>
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
            const role = localStorage.getItem('role');
            if(role === 'user')
            {
                this.$router.replace('/user/events');
            }

        }
    }

}
</script>

<style>

</style>
