import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
import MenteAdmin from '../components/MenteAdmin'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [

        // Login
        {path: "/", name: "Login", component: Login},

        // Main
        {path: "/main", name: "Main", component: Main,

            children: [
                // Main - MenteAdmin / main/mente-admin
                {path: "mente-admin", name: "MenteAdmin", component: MenteAdmin},
            ]},

        // NotFound
        {path: "*", name: "NotFound", component: NotFound},
    ]
})

export default router