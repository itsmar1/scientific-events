<template>
    <div class="contact-admin">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <base-card>
                        <h2>Contact an Event Organizer</h2>
                    </base-card>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <ul v-for="user in users" :key="user" class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span class="user-key">From: </span> <span class="user-value">{{ user.firstName + ' ' + user.lastName }}</span>
                            </li>
                            <li class="list-group-item">
                                <span class="user-key">Email: </span> <span class="user-value">{{ user.email }}</span>
                            </li>
                            <li class="list-group-item">
                                <p class="user-key">Message: </p>
                                <div class="user-value">
                                    <form @submit.prevent="sendMessage">
                                        <div class="form-group">
                                            <textarea name="message" id="message" rows="10" v-model.trim="message" class="form-control"></textarea>
                                            <button type="submit" class="btn btn-danger mt-3">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    computed: {
        users() {
            return this.$store.getters['user/user'];
        }
    },
    methods: {
        sendMessage() {
            this.$store.dispatch('user/sendMessage', {
                message: this.message
            });
            this.message = '';
        },
        getUser() {
            this.$store.dispatch('user/user');
        }
    },
    mounted() {
        this.getUser();
    }

}
</script>

<style>

</style>
