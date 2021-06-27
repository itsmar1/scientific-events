<template>
  <div class="event-admins">
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-3">
            <button class="btn btn-success btn-block" data-toggle="modal" data-target="#addUser"><i class="fas fa-plus ml-auto"></i>   {{ $t('dashboard.sessionadmin.create') }}</button>
        </div>
      </div>
      <hr>
      <base-card>
        <div class="row">
          <div class="col-sm-12">
            <ul v-for="user in sessionAdmins" :key="user" class="list-unstyled">
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
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title">{{ $t('dashboard.sessionadmin.add') }}</h5>
                        <button class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="firstName">{{ $t('dashboard.sessionadmin.firstName') }}</label>
                            <input type="text" name="firstName" class="form-control" v-model.trim="user.firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastName">{{ $t('dashboard.sessionadmin.lastName') }}</label>
                            <input type="text" name="lastName" class="form-control" v-model.trim="user.lastName">
                        </div>
                        <div class="form-group">
                            <label for="email">{{ $t('dashboard.sessionadmin.email') }}</label>
                            <input type="email" name="email" class="form-control" v-model.trim="user.email">
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('dashboard.sessionadmin.password') }}</label>
                            <input type="password" name="password" class="form-control" v-model.trim="user.password">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">{{ $t('dashboard.sessionadmin.password_confirmation') }}</label>
                            <input type="password" name="password_confirmation" class="form-control" v-model.trim="user.password_confirmation">
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" data-dismiss="modal" @click="addUser">{{ $t('dashboard.sessionadmin.add') }}n</button>
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
    sessionAdmins() {
      return this.$store.getters["admin/sessionAdmins"];
    },

  },
  methods: {
    async getSessionAdmins() {
      await this.$store.dispatch('admin/getSessionAdmins');
    },
    updateUser(payload){
        this.$store.dispatch('admin/putSessionAdmins', {
            user: payload,
            id: payload.id
        });
    },
    deleteUser(id) {
        this.$store.dispatch('admin/deleteSessionAdmins', id);
    },
    async addUser() {
        await this.$store.dispatch('admin/postSessionAdmins', this.user);
    }
  },
  mounted() {
    this.getSessionAdmins();
  },
};
</script>

<style>
</style>
