<template>
    <div class="card" >
        <div class="header">
            <h1>{{ onEdit ?  'Edit Buku' :'Detail Buku' }}</h1>
        </div>
        <div class="body">
            <div v-if="!onEdit">
                <span>ID Buku</span>
                <h3>{{ data.id_buku }}</h3>
                <span>Judul Buku</span>
                <h1>{{ data.judul }}</h1>
                <span>Penulis</span>
                <h3>{{ data.penulis }}</h3>
                <div class="ket">
                    <span>Keterangan</span>
                    <h3>{{ data.keterangan }}</h3>
                    <router-link :to="{name:'data_buku'}" >Back</router-link>
                </div>
                <button @click="edit">Edit📙</button>

                </div>
                <button v-if="onEdit" @click="this.onEdit =! this.onEdit">Batal</button>
                <div class="body1">
                    <div v-if="onEdit">
                        <form @submit.prevent="simpan">
                            <div class="form-login">
                                <div class="form">
                                    <label for="id_buku">ID Buku</label>
                                    <input type="text" v-model.trim="data.id_buku">
                                </div>
                            </div>
                            <div class="form-login">
                                <div class="form">
                                    <label for="judul">Judul Buku</label>
                                    <input type="text" v-model.trim="data.judul">
                                </div>
                            </div>
                            <div class="form-login">
                                <div class="form">
                                    <label for="penulis">Penulis Buku</label>
                                    <input type="text" v-model.trim="data.penulis" >
                                </div>
                            </div>
                            <div class="form-login">
                                <div class="form">
                                    <label for="keterangan">Keterangan</label>
                                    <textarea rows="4" v-model.trim="data.keterangan"></textarea>
                                </div>
                            </div>
                            <button>Simpan</button>
                        </form>
                    </div>  
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:[
        'id'
    ],
    computed:{
    },
    data(){
        return{
            data:'',
            onEdit:false
        }
    },
    methods:{
       edit(){
           this.onEdit =! this.onEdit
       },
       async simpan(){
           console.log(this.data)
           await axios.put(`update_buku/${this.id}`, this.data)
            .then((res)=>{
                console.log(res.data)
                this.onEdit =! this.onEdit
            })
            .catch(er=>er.response.data)
       }
    },
    async created(){
        console.log(this.id)
        await axios.get(`edit_buku/${this.id}`)
            .then((res)=>{
                console.log(res.data)
                this.data = res.data
            }).catch(e=>console.log(e.response))
    }
}
</script>

<style scoped>
form{
    position: block;
    margin: 50px auto;
    border-radius: 4px;
    color: rgb(21, 41, 83);
}
.form-login{
    margin: 10px;
}
.form{
    display: flex;
    flex-direction: column;
}
button{
    border: solid 1px violet;
    border-radius: 4px;
    margin: 5px 0;
    min-width: 210px;
    background-color: rgb(255, 208, 255);
    color: grey;
}
input,
textarea{
    border: solid 1px violet;
    border-radius: 4px;
    min-width: 210px;
    color: grey;
    padding: 0 10px;
}
p{
    font-size: 0.9rem;
    margin-top: 5px;
}
.card{
    text-align: center;
    margin: 20px;
    border-radius: 10px;
}
.header{
    background-color: violet;

}
.body{
    padding: 10px;
    background-color: rgba(238, 130, 238, 0.589);
}
.body1{
    /* background-color: rgba(255, 211, 255, 0.589); */
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: start;
}
span{
    color: rgb(161, 161, 161);
}
a, button{
    border: solid 1px violet;
    border-radius: 4px;
    margin: 5px auto;
    min-width: 210px;
    background-color: rgb(255, 245, 255);
    color: grey;
    display: block;
    text-decoration: none;
}
button{
    background-color: rgb(255, 225, 255);
    width: 100%;
}
</style>

