<template>
    <b-navbar type="dark" variant="primary" toggleable="md">
        <b-navbar-brand :to="'/'">The Club House</b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav v-if="isAuthenticated">
                <b-nav-item v-for="(route, index) in authenticatedRoutes" :to="route.path" :key="index">
                    <span class="route.style"></span> {{ route.display }}
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <!--<b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>-->
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>{{ currentUser ? currentUser.name : 'Guest'}}</em>
                    </template>
                    <div v-if="isAuthenticated">
                        <b-dropdown-item :to="{path: 'profile'}">Profile</b-dropdown-item>
                        <b-dropdown-item-button v-on:click="signout()">Signout</b-dropdown-item-button>
                    </div>
                    <div v-else>
                        <b-dropdown-item :to="{path: 'login'}">Login</b-dropdown-item>
                    </div>
                    
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { authenticatedRoutes } from '../routes'
import { mapState } from 'vuex'
import ApiService from '../store/api'

export default {
    data() {
        return {
            authenticatedRoutes,
            collapsed: true,
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.user,
            isAuthenticated: state => state.isAuthenticated
        })
    },
    created() {
      ApiService.getValues();
    },
    methods: {
      signout() {
        console.log('Boiiii')
      }
    }
}
</script>

<style>
</style>
