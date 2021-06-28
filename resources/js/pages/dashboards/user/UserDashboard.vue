<template>
    <div class="header-nav">
        <nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap shadow">
        <!-- <router-link class="navbar-brand col-sm-3 col-md-2 mr-0"  :to="headerLink"><span class="science">Science</span><span class="events">Events</span></router-link> -->
        <router-link class="navbar-brand col-sm-3 col-md-2 mr-0"  :to="headerLink"></router-link>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <!-- <a class="nav-link logout-btn" @click="logout">Logout</button> -->
                <button class="btn btn-outline-light logout-btn" @click="logout"><i class="fas fa-power-off"></i> {{ $t('dashboard.nav.logout') }}</button>
            </li>
        </ul>
        </nav>
    </div>
    <div class="container-fluid">
        <div class="row">
            <!-- sidebar -->
            <div class="col-md-2 bg-light d-none d-md-block sidebar">
                <!-- <div class="sidebar-image"></div>
                <div class="sidebar-overlay"></div> -->
                <div class="left-sidebar">
                    <ul class="nav flex-column sidebar-nav mt-5">
                        <div class="role-dashboard text-center">
                            <i class="fas fa-user fa-3x rounded-circle"></i>
                            <h5 class="mt-2">{{ $t('dashboard.nav.type.user') }}</h5>
                            <hr>
                        </div>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="events">{{ $t('dashboard.nav.events') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="contact">{{ $t('dashboard.nav.contact') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="settings">{{ $t('dashboard.nav.settings') }}</router-link>
                        </li>
                        <li class="nav-item mt-5">
                            <button class="btn btn-outline-light logout-btn" @click="logout"><i class="fas fa-power-off"></i> {{ $t('dashboard.nav.logout') }}</button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- main -->
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
                <!-- <h3>candidated</h3>
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
                </div> -->
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
    computed: {
        role() {
            return localStorage.getItem('role');
        },
        headerLink()
        {
            return '/' + this.role + '/events';
        }

    },
    methods: {
        async logout() {
            await this.$store.dispatch('user/logout');
            this.$router.replace('/');
        }
        }
    }

</script>

<style scoped>

</style>
