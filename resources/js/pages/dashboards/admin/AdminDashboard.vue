<template>
    <nav class="navbar navbar-dark bg-primary fixed-top flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0"  href="#">Scientific Events</a>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <button class="nav-link logout-btn" @click="logout">Logout</button>
            </li>
        </ul>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <!-- sidebar -->
            <div class="col-md-2 bg-light d-none d-md-block sidebar">
                <div class="left-sidebar">
                    <ul class="nav flex-column sidebar-nav mt-5">
                        <li class="nav-item">
                            <router-link class="nav-link active" to="events">Events</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="eventadmins">Event Admins</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="responsables">Organization Responsables</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="sessions">Sessions Admins</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="sessions">Regular Users</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="contact">Messages</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="settings">Account</router-link>
                        </li>
                        <li class="nav-item mt-5">
                            <button class="btn logout-btn" @click="logout">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- main -->
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
                <h3>candidated</h3>
                <hr>
                <div class="table-responsive">
                    <table class="table table-sm table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('admin/logout');
            this.$route.replace('/');
        }
        }
    }

</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    padding: 70px 0 0 10px;
    border-right: 1px solid #d3d3d3;

}

.left-sidebar {
    position: sticky;
    top: 0;
    height: calc(100vh - 70px);
}

.sidebar-nav li .nav-link {
    color: #333;
    font-weight: 500;
}

main {
    padding-top: 90px;
}
</style>
