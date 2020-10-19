import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import('../views/Register')
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: {layout: 'main'},
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        meta: {layout: 'main'},
        component: () => import('../views/Detail.vue')
    },
    {
        path: '/history',
        name: 'History',
        meta: {layout: 'main'},
        component: () => import('../views/History.vue')
    },
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/planning',
        name: 'Planning',
        meta: {layout: 'main'},
        component: () => import('../views/Planning.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {layout: 'main'},
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/record',
        name: 'Record',
        meta: {layout: 'main'},
        component: () => import('../views/Record.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
