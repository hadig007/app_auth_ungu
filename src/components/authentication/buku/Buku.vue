<template>
    <div>
        <div  class="card" v-if="!deleted">
            <div class="header">
                <h3>Data Buku</h3>
            </div>
        <div class="body">
            <span>Judul Buku</span>
            <h6> {{ judul}} </h6>
            <span>Penulis </span>
            <p>{{ penulis}} </p>
            <router-link :to="toDetail">Detail/Edit📙</router-link>
            <button @click="hapus">Hapus❌</button>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id','judul','penulis'],
    data(){
        return{
            deleted:false
        }
    },
    computed:{
        toDetail(){
            return 'detail_buku' + '/' + this.id
        }
    },
    methods:{
        async hapus(){
        console.log('menghapus')
        await axios.delete(`delete_buku/${this.id}`)
                .then((res)=>{
                    console.log(res.data)
                    this.deleted = true
                })
                .catch(er=>console.log(er.response.data))
    }
    }
}
</script>

<style scoped>
div{
    display: inline-block;
}
.card{
    background-color: rgb(241, 177, 241);
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.1);
    min-width: 12rem;
    max-width: 15rem;
    text-align: center;
    border-radius: 4px;
    /* display: inline-block; */
    margin: 10px;
}
.header{
    background-color: indianred;
    width: 100%;
    padding: 5px;
}
h3{
    margin: 0;
}
.body{
    padding: 5px;
}
span{
    color: grey;
}
button, a{
    border: solid 1px violet;
    border-radius: 4px;
    margin: 5px;
    /* min-width: 210px; */
    background-color: rgba(255, 208, 255, 0.644);
    color: grey;
}
a{
    padding: 2px 6px;
    text-decoration: none;
}
    /* .no-data{
        width: 20rem;
        display: block;
        height: 10rem;
        margin: 20px auto;
        background-color: rgb(240, 240, 240);
        border-radius: 4px;
        text-align: center;
        color: grey;
        padding-top: 45px;
    } */
</style>