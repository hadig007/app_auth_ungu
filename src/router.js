import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './components/DashBoard.vue'
import HomeDashboard from './components/HomeDashboard.vue'
import NotFound from './components/NotFound.vue'
import Employee from './components/menu/Employee.vue'
import Suppliers from './components/menu/Suppliers.vue'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect: '/home'},
        {path:'/home', component: Dashboard, children:[
            {path: 'dashboard', component: HomeDashboard, name:'home'},
            {path: 'employee', component: Employee, name:'employee'},
            {path: 'suppliers', component: Suppliers, name:'suppliers'},
        ]},
        {path:'/:NotFound(.*)', component: NotFound},
        // autentikasi 
        {path :'/login', component: Login },
        {path :'/register', component: Register },
    ]

})

export default router;