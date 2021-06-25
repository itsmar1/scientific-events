<template>
  <div class="event-admins">
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-3">
            <button class="btn btn-warning btn-block" data-toggle="modal" data-target="#updateAccount"><i class="fas fa-user-edit"></i>   Update Account</button>
        </div>
      </div>
      <hr>
      <base-card>
        <div class="row">
          <div class="col-sm-12">
            <ul v-for="user in users" :key="user" class="list-unstyled">
                <base-card>
              <account-item
                :id="user.id"
                :firstName="user.firstName"
                :lastName="user.lastName"
                :email="user.email"
                :role="user.role"
              ></account-item>
              </base-card>
            </ul>
          </div>
        </div>
      </base-card>
      <!-- start modal -->
        <div class="modal fade" id="updateAccount">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-white">
                        <h5 class="modal-title">Update Account</h5>
                        <button class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" name="firstName" class="form-control" v-model.trim="user.firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" name="lastName" class="form-control" v-model.trim="user.lastName">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control" v-model.trim="user.email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" class="form-control" v-model.trim="user.password">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Password Confirmation</label>
                            <input type="password" name="password_confirmation" class="form-control" v-model.trim="user.password_confirmation">
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" data-dismiss="modal" @click="updateAccount">Update Account</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end moadl -->
    </div>
  </div>
</template>

<script>
import AccountItem from "../../../components/users/AccountItem.vue";

export default {
  components: {
    AccountItem,
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
    users() {
      return this.$store.getters["admin/user"];
    },

  },
  methods: {
    async getUser() {
      await this.$store.dispatch('admin/user');
    },
    updateAccount(){
        this.$store.dispatch('admin/putUser', this.user);
    }
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
</style>
