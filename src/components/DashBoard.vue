<template>
    <div>
        <header>
            <h1>MyAPP</h1>
            <ul>
                <li><router-link to="/login">login</router-link></li>
                <li><router-link to="/register">register</router-link></li>
                <li><a href="javascript:void(0)">logout</a></li>
            </ul>
        </header>
        <!-- sidebar -->
        <section>
            <div class="container-fluid">
                <button class="posa" v-if="show" @click="show=!show"><i class="fas fa-bars"></i></button>
                <button class="posb" v-if="!show" @click="show=!show"><i class="fas fa-times"></i></button>
                <div class="row">
                    <div class="col-md-3" v-if="show">
                        <div class="sidebar">
                            <h3 class="account"><i class="fas fa-user-circle"></i> Account</h3>
                            <div class="navigasi"> 
                                <div class="nav">
                                    <h5>
                                        <i class="fas fa-tachometer-alt"></i><router-link to="/home/dashboard">   Dashboard</router-link>  
                                    </h5>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                                <h6>menu</h6>
                                <div class="nav">
                                    <h5>
                                        <i class="fas fa-book"></i><router-link to="/home/data_buku">   Data Buku</router-link>  
                                    </h5>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                                <div class="nav">
                                    <h5>
                                        <i class="fas fa-user-friends"></i><router-link to="/home/suppliers">   Suppliers</router-link>  
                                    </h5>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data(){
        return{
            show:true
        }
    },
    async created(){
        let data_user = await axios.get('auth/user-profile',{
            headers:{
                Authorization : "Berer " + localStorage.getItem('token')
            }
        })
            .then((res)=>{
                data_user = res.data
                console.log('user data dari created',data_user)
                this.$store.dispatch('user_profile', data_user)
            }).catch((e)=>{
                console.log(e.response)
                this.$router.push('/login')
            })
        // pengecekan autentikasi
        if(this.$store.getters['authenticated']){
            return this.$router.push('/home/dashboard')
        }else{
            
            return false
        }
        // pengecekan authentikasi selesai
    },
    computed:{
        ...mapGetters(['authenticated']),
    }
}
</script>

<style scoped>
.container-fluid{
    padding: 0;
}
.posa,.posb{
    background-color: rgb(220, 220, 250);
    border: none;
    display: inline;
    width: 260px;
}
header{
    background-color: rgb(139, 97, 255);
    color: white;
    font-family: inherit;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
}
ul{
    display: flex;
    flex-direction: row;
    margin: 0;
}
li{
    list-style: none;
    margin: 5px 10px;
}
.sidebar{
    background-color: lavender;
    width: 100%;
    height: 1000px;
    padding: 10px 20px;
}
.row>*{
    padding: 0;
}
.account{
    text-align: center;
    font-weight: bold;
    color: rgb(42, 48, 70);
    padding: 15px;
}
h6{
    color: grey;
}
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .3s;
    padding: 10px;
}
h5,h6{
    padding: 15px;
    margin: 0;
}
a{
    color: rgb(49, 59, 78);
    text-decoration: none;
}
.nav:hover,
.nav:active{
    transform: scale(1.09);
    background-color: whitesmoke;
    border-radius: 4px;
}
</style>