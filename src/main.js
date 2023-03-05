import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free';
import router from './router';
import store from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';
import "./plugins/chart.js";

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App).use(router).use(store).use(VueAxios, axios).use(VueChartkick).mount('#app')
