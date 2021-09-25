<template>
    <div v-if="user">
        <h1>Home Dashboard</h1>
        <hr>
        <div class="box">
            <h3>Active User</h3>
            <hr>
            <h4>Name : {{ user.name }}</h4>
            <h4>Email : {{ user.email }}</h4>
            
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['user'])
    },
}
</script>

<style scoped>
h1{
    text-align: center;
    color: grey;
    font-size: 3rem;
    margin-top: 30%;
}
.box{
    background-color: rgba(238, 130, 238, 0.747);
    width: 25rem;
    padding: 1rem;
    border-radius: 4px;
    position: relative;
    left: 28%;
}
</style>