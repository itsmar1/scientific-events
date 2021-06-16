<template>
    <div class="container">
        <div class="row">
            <h1>Messages</h1>
        </div>
        <hr>
        <base-card>
        <div class="row">
            <ul v-for="contact in contacts" :key="contact.id" class="list-unstyled">
                <base-card>
                <contact-item
                :id="contact.id"
                :name="contact.name"
                :email="contact.email"
                :message="contact.message"
                @delete-message="deleteMessage"
                >
                </contact-item>
                </base-card>
            </ul>
        </div>
        </base-card>
    </div>
</template>

<script>
import ContactItem from "../../../components/users/ContactItem.vue";

export default {
  components: {
    ContactItem,
  },
  computed: {
    contacts() {
      return this.$store.getters["admin/contacts"];
    },
  },
  methods: {
    async loadContacts() {
      await this.$store.dispatch("admin/contacts");
    },
    deleteMessage(id)
    {
        this.$store.dispatch('admin/deleteContacts', id);
    }
  },
  created() {
    this.loadContacts();
  },
};
</script>

<style>
</style>
