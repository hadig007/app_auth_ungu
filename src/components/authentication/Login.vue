<template>
    <div>
        <form @submit.prevent="login">
            <h2>Login Form</h2>
            <div class="form-login">
                <div class="form">
                <label for="email">Email</label>
                <input type="text" v-model.trim="email">
            </div>
            <div class="form">
                <label for="password">Password</label>
                <input type="text" v-model.trim="password">
            </div>
            <button>Login</button>
            <p>haven't an account? <router-link to="/register">register</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let data_login = await axios.post('auth/login',{
                email :this.email,
                password :this.password,
                password_confirmation :this.password,
            })
                .then((res)=>{
                    data_login = res.data.access_token
                    localStorage.setItem('token', data_login)
                    this.$store.dispatch('login', data_login)
                    this.$router.replace('/home/dashboard')
                    console.log(data_login)
                })
                .catch(e=>console.log('gagal',e.response.data))

        }
    }
}
</script>

<style scoped>
form{
    background-color: violet;
    width: auto;
    position: absolute;
    top: 30%;
    left: 36%;
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
input{
    border: solid 1px violet;
    border-radius: 4px;
    /* margin: 5px 0; */
    min-width: 210px;
}
p{
    font-size: 0.9rem;
    margin-top: 5px;
}
</style>