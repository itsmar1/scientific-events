<template>
  <div class="event-admins">
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-3">
            <button class="btn btn-success btn-block" data-toggle="modal" data-target="#addUser"><i class="fas fa-plus ml-auto"></i>   {{ $t('dashboard.responsable.create') }}</button>
        </div>
      </div>
      <hr>
      <base-card>
        <div class="row">
          <div class="col-sm-12">
            <ul v-for="user in responsables" :key="user" class="list-unstyled">
                <base-card>
              <user-item
                :id="user.id"
                :firstName="user.firstName"
                :lastName="user.lastName"
                :email="user.email"
                :role="user.role"
                @update-user="updateUser"
                @delete-user="deleteUser"
              ></user-item>
              </base-card>
            </ul>
          </div>
        </div>
      </base-card>
      <!-- start modal -->
        <div class="modal fade" id="addUser">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">{{ $t('dashboard.responsable.add') }}</h5>
                        <button class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="firstName">{{ $t('dashboard.responsable.firstName') }}</label>
                            <input type="text" name="firstName" class="form-control" v-model.trim="user.firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastName">{{ $t('dashboard.responsable.lastName') }}</label>
                            <input type="text" name="lastName" class="form-control" v-model.trim="user.lastName">
                        </div>
                        <div class="form-group">
                            <label for="email">{{ $t('dashboard.responsable.email') }}</label>
                            <input type="email" name="email" class="form-control" v-model.trim="user.email">
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('dashboard.responsable.password') }}</label>
                            <input type="password" name="password" class="form-control" v-model.trim="user.password">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">{{ $t('dashboard.responsable.password_confirmation') }}</label>
                            <input type="password" name="password_confirmation" class="form-control" v-model.trim="user.password_confirmation">
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-dismiss="modal" @click="addUser">{{ $t('dashboard.responsable.add') }}</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end moadl -->
    </div>
  </div>
</template>

<script>
import UserItem from "../../../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  data() {
      return {
          user: {
              firstName: null,
              lastName: null,
              email: null,
              password: null,
              password_confirmation: null,
          },
      }
  },
  computed: {
    responsables() {
      return this.$store.getters["admin/responsables"];
    },

  },
  methods: {
    async getResponsable() {
      await this.$store.dispatch('admin/getResponsable');
    },
    updateUser(payload){
        this.$store.dispatch('admin/putResponsable', {
            user: payload,
            id: payload.id
        });
    },
    // getId(id){
    //     this.id = id;
    // },
    // updateUser(payload){
    //     this.$store.dispatch('admin/putEventAdmins', {
    //       user: payload,
    //       id: this.id
    //     });
    // },
    deleteUser(id) {
        this.$store.dispatch('admin/deleteResponsable', id);
    },
    async addUser() {
        await this.$store.dispatch('admin/postResponsable', this.user);
    }
  },
  mounted() {
    this.getResponsable();
  },
};
</script>

<style>
</style>
