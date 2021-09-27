<template>
    <div>
        <form @submit.prevent="simpan" enctype="multipart/form-data">
            <h2>Form Tambah Buku</h2>
            <div class="form-login">
                <div class="form">
                    <label for="id_buku">ID Buku</label>
                    <input type="text" v-model.trim="id_buku" placeholder="masukkan id buku...">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="judul">Judul Buku</label>
                    <input type="text" v-model.trim="judul" placeholder="masukkan judul buku...">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="penulis">Penulis Buku</label>
                    <input type="text" v-model.trim="penulis" placeholder="masukkan penulis buku...">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="keterangan">Keterangan</label>
                    <textarea rows="4" v-model.trim="keterangan" placeholder="masukkan keterangan buku..."></textarea>
                </div>
                <div class="button">
                    <button>Simpan✔️</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            id_buku :'',
            judul :'',
            penulis :'',
            keterangan :'',
            selesai:true

        }
    },
    methods:{
        simpan(){
            axios.post('create_buku',{
                id_buku :this.id_buku,
                judul :this.judul,
                penulis :this.penulis,
                keterangan :this.keterangan,
            }).then(res=>console.log(res.data))
            .catch(e=>console.log(e.response.data))
        }
    }
}
</script>

<style scoped>
.image img{
    position: relative;
    width: 100px;
    border: grey solid 2px;
}
.image{
    display: flex;
    flex-direction: column;
}
form{
    background-color: violet;
    position: block;
    margin: 50px auto;
    width: 40rem;
    padding: 1.2rem;
    border-radius: 4px;
    color: whitesmoke;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
h2{
    font-size: 2rem;
    font-weight: bold;
    border-bottom: solid 2px whitesmoke;
    text-align: center;
    padding-bottom: 10px;
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
.custom-file{
    display: flex;
    flex-direction: column;
}
.custom-file-input{
    padding: 0;
}
</style>






