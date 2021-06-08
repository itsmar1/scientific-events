<template>
  <h1>Messages</h1>
  <hr>
  <ul v-for="contact in contacts" :key="contact.id">
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">From: {{ contact.name }}</h5>
              <h5 class="card-title">Email: {{ contact.email }}</h5>
              <p class="card-text">Message:</p>
              <p class="card-text">{{ contact.message }}</p>
          </div>
      </div>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            contacts: null,
        }
    },
    methods: {
        async loadContacts() {
            this.$store.dispatch('admin/contacts');
            this.contacts = await this.$store.getters['admin/contacts'];
        }
    },
    created()
    {
        this.loadContacts();
    }

}
</script>

<style>

</style>
