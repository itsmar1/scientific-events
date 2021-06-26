<template>
    <div class="contact-page">
    <div class="contact-help">
        <div class="container mx-auto text-center">
            <h1>{{ $t('contact.help.how') }} <span class="help">{{ $t('contact.help.help') }}</span>?</h1>
            <input type="text" class="form-control" placeholder="Ask us a question">
            <h5>{{ $t('contact.help.alt') }} <router-link to="/events">{{ $t('contact.help.events') }}</router-link></h5>
        </div>
    </div>

    <div class="contact-form">
        <div class="container">
            <h4 class="text-center mb-2">{{ $t('contact.form.title') }}</h4>
            <p class="text-center">{{ $t('contact.form.subtitle') }}</p>
            <form @submit.prevent="submitForm">
                <div class="form-inline">
                    <input type="text" name="name" class="form-control mr-3" v-model.trim="name" placeholder="Enter your name">
                    <input type="email" name="email" id="email" class="form-control mr-3" v-model.trim="email" placeholder="Ente email">
                </div>
                <textarea name="message" rows="5" class="form-control my-4" v-model.trim="message" placeholder="Ask your question"></textarea>
                <!-- <input type="submit" value="Send message" class="btn btn-primary"> -->
                <button type="submit" class="btn btn-primary">{{ $t('contact.form.submit') }}</button>
            </form>
        </div>
    </div>

    <div class="contact-us text-center">
        <div class="container">
            <h4 class="h2">{{ $t('contact.infos.title') }}</h4>
            <p class="para">{{ $t('contact.infos.subtitle') }}</p>
            <div class="row mt-3">
                <div class="col-sm-6 col-lg-4">
                    <i class="fas fa-envelope fa-3x rounded-circle"></i>
                    <h3>{{ $t('contact.infos.send') }}</h3>
                    <a href="mailto:support@fsa.ac.ma">support@events.com</a>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <i class="fas fa-phone fa-flip-horizontal  fa-3x rounded-circle"></i>
                    <h3>{{ $t('contact.infos.call') }}</h3>
                    <a href="tel:0123456789">0-(123)-456789</a>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <i class="fas fa-building fa-3x rounded-circle"></i>
                    <h3>{{ $t('contact.infos.line') }}</h3>
                    <p>B.P 8106, Agadir 80000</p>
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

            this.name = '',
            this.email = '',
            this.message = ''
        }
    }

}
</script>

<style>

</style>
