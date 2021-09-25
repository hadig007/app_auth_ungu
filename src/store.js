import { createStore } from 'vuex'


const store = createStore({
    state(){
        return{
            token: null,
            user: null
        }
    },
    getters:{
        authenticated(state){
            return state.token && state.user
        },
        token(state){
            return state.token = localStorage.getItem('token')
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        LOGIN(state, payload){
            state.token = payload
        },
        USER_PROFILE(state, payload){
            state.user = payload
        }
    },
    actions:{
        login(context, loginData){
            context.commit('LOGIN', loginData)
        },
        user_profile(context, data_user){
            context.commit('USER_PROFILE',data_user)
        }
    },
})

export default store;