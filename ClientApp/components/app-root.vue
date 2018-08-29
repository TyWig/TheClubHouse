<template>
  <div id="app">
    <nav-menu params="route: route"></nav-menu>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import HomePage from './home-page'
import NavMenu from './nav-menu'
import EventsPage from './events-page'
import Footer from './footer.vue'

Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);
Vue.component('events-page', EventsPage);
Vue.component('app-footer', Footer);

export default {
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
