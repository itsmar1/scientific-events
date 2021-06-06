<template>
    <div class="contact-help">
        <div class="container mx-auto text-center">
            <h1>How can we <span>Help</span>?</h1>
            <input type="text" class="form-control" placeholder="Ask us a question">
            <h5>Alternatively, you can browse our <router-link to="/events">Events</router-link></h5>
        </div>
    </div>

    <div class="contact-form">
        <div class="container">
            <h4>Contact an event organiser</h4>
            <p>If you have a question about an event, we can send your request directly to the event organiser.</p>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" v-model.trim="name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control" v-model.trim="email">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" rows="5" class="form-control" v-model.trim="message"></textarea>
                </div>
                <input type="submit" value="Send message" class="btn btn-primary">
            </form>
        </div>
    </div>

    <div class="contact-us">
        <div class="container">
            <h4>Contact Us</h4>
            <p>If you're unable to find the answers to your questions, please get in touch.</p>
            <div class="row">
                <div class="col-sm-4">
                    <i class="fas fa-envelope"></i>
                    <p>Send us an email</p>
                    <a href="mailto:support@events.com">support@events.com</a>
                </div>
                <div class="col-sm-4">
                    <i class="fas fa-phone"></i>
                    <p>Call TicketSource</p>
                    <a href="tel:0123456789">0-123-456789</a>
                </div>
                <div class="col-sm-4">
                    <i class="fas fa-envelope"></i>
                    <p>Drop us a line</p>
                    <p>Off Edge, Station Approach, Penarth CF64 3EE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            message: null
        }
    },
    methods: {
        async submitForm() {
            const response = await axios.post('/api/contact', {
                name: this.name,
                email: this.email,
                message: this.message
            });

            console.log(response);
        }
    }

}
</script>

<style>

</style>
