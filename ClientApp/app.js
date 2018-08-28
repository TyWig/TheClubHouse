import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import BootstrapVue from 'bootstrap-vue'
import FullCalendar from 'vue-full-calendar'
import 'bootstrap';

Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.use(FullCalendar);

sync(store, router)

const app = new Vue({
    store,
    router,
    ...App
})

export {
    app,
    router,
    store
}
