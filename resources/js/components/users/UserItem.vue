<template>
    <li class="user-item-desc">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <span class="user-key">First Name: </span> <span class="user-value">{{ firstName }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">Last Name: </span> <span class="user-value">{{ lastName }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">Email: </span> <span class="user-value">{{ email }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">User Role: </span> <base-badge :title="userRole" :type="role"></base-badge>
                </li>
                <li class="list-group-item">
                    <div class="buttons-action">
                        <button class="btn btn-warning ml-auto" data-toggle="modal" data-target="#updateUser">Update</button>
                        <button class="btn btn-danger ml-3" @click="deleteUser">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
        <!-- start modal -->
        <div class="modal fade" id="updateUser">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-white">
                        <h5 class="modal-title">Update User</h5>
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
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" data-dismiss="modal" @click="submitForm(user)">Update user</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end moadl -->
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'email', 'role'],
    emits: ['update-user', 'delete-user'],
    data() {
        return {
            user: {
                id: this.id,
                firstName: null,
                lastName: null,
                email: null,
                password: null,
            }
        }
    },
    computed: {
        userRole() {
            if( this.role === 'admin' )
            {
                return 'Admin';
            }
            else if( this.role === 'event_admin')
            {
                return 'Event Admin';
            }
            else if( this.role === 'responsable')
            {
                return 'Organisation Responsable';
            }
            else if(this.role === 'session_admin')
            {
                return 'Session Admin'
            }
            else if(this.role === 'user')
            {
                return 'Simple User';
            }
        }
    },
    methods: {
        // submitForm() {
        //     this.$emit('update-user', {
        //         user: this.user,
        //         id: this.id
        //     });
        // },
        submitForm() {
            this.$emit('update-user', this.user);
        },
        deleteUser(){
            this.$emit('delete-user', this.id);
        }
    }

}
</script>

<style>

</style>
