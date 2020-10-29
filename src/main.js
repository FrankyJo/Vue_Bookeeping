import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import tooltipDirective from './directives/tooltip.directives.js'
import MessagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(MessagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
    apiKey: 'AIzaSyC5wjdP4_VjngRq-sqXR-YJ4Nu1AIF26is',
    authDomain: 'vuebookkeeping-dbd80.firebaseapp.com',
    databaseURL: 'https://vuebookkeeping-dbd80.firebaseio.com',
    projectId: 'vuebookkeeping-dbd80',
    storageBucket: 'vuebookkeeping-dbd80.appspot.com',
    messagingSenderId: '686326216309',
    appId: '1:686326216309:web:fa35cfbe05484d56adaa3c',
    measurementId: 'G-H7HYCXLCC8'
})
let app
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
