<template>
    <li class="user-item-desc">
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <span class="user-key">From: </span> <span class="user-value">{{ name }}</span>
                </li>
                <li class="list-group-item">
                    <span class="user-key">Email: </span> <span class="user-value">{{ email }}</span>
                </li>
                <li class="list-group-item">
                    <p class="user-key">Message: </p> <p class="user-value">{{ message }}</p>
                </li>
                <li class="list-group-item">
                    <div class="buttons-action">
                        <button class="btn btn-danger ml-3" @click="deleteMessage">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'email', 'message'],
    methods: {
        deleteMessage(){
            this.$emit('delete-message', this.id);
        }
}

}
</script>

<style>

</style>
