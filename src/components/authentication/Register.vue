<template>
    <div>
        <form @submit.prevent="register">
            <h2>Register Form</h2>
            <div class="form-login">
                <div class="form">
                    <label for="name">Name</label>
                    <input type="text" v-model.trim="name">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="email">Email</label>
                    <input type="text" v-model.trim="email">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="password">Password</label>
                    <input type="text" v-model.trim="password">
                </div>
            </div>
            <div class="form-login">
                <div class="form">
                    <label for="password_confirmation">Password Confirmation</label>
                    <input type="text" v-model.trim="password_confirmation">
                </div>
            <button>Register</button>
            <p>have an account? <router-link to="/login">login</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            password_confirmation:''
        }
    },
    methods:{
        register(){
            axios.post('auth/register',{
                name: this.name,
                email:this.email,
                password: this.password,
                password_confirmation:this.password_confirmation
            }).then(res=>console.log(res.data))
            .catch(e=>console.log(e.response.data))
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
    min-width: 210px;
    color: grey;

}
p{
    font-size: 0.9rem;
    margin-top: 5px;
}
</style>