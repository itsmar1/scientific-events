<template>
    <li class="user-item-desc">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <span class="user-key">{{ $t('dashboard.account.firstName') }}: </span> <span class="user-value">{{ firstName }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">{{ $t('dashboard.account.lastName') }}: </span> <span class="user-value">{{ lastName }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">{{ $t('dashboard.account.email') }}: </span> <span class="user-value">{{ email }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">{{ $t('dashboard.account.role') }}: </span> <base-badge :title="userRole" :type="role"></base-badge>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'email', 'role'],
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

}
</script>

<style>

</style>
