import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

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
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Detail.vue')
    },
    {
        path: '/history',
        name: 'History',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/History.vue')
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/planning',
        name: 'Planning',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Planning.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/record',
        name: 'Record',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Record.vue')
    },
    {
        path: '/version',
        name: 'Version',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/Version.vue')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login?message=login')
    } else {
        next()
    }
})

export default router
