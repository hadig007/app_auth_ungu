<template>
    <div>
        <h1>Data Buku</h1>
        <hr>
        <button @click="isShow=!isShow">Tambah Buku</button>
        <tambah-buku  @onBatal="isShow=!isShow" v-if="isShow"></tambah-buku>
        <buku 
            v-for="buku in data" :key="buku.id"
            :id="buku.id" 
            :judul="buku.judul"
            :penulis="buku.penulis"
        ></buku>
    </div>
</template>

<script>
import axios from 'axios'
import Buku from '../authentication/buku/Buku.vue'
import TambahBuku from '../authentication/buku/TambahBuku.vue'
export default {
    components: { TambahBuku,Buku },
    data(){
        return{
            isShow:false,
            data: ''
        }
    },
    async created(){
        await axios.get('buku')
            .then((res)=>{
                this.data=res.data
            })
            .catch(e=>e.response.data)
        }

}
</script>

<style scoped>
h1{
    text-align: center;
    color: grey;
    font-size: 3rem;
    margin-top: 10%;
}
button{
    border: solid 1px violet;
    border-radius: 4px;
    margin: 5px auto;
    min-width: 210px;
    background-color: rgb(255, 208, 255);
    color: grey;
    display: block;
}
</style>