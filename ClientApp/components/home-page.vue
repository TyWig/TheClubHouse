<template>
    <div>
        <full-calendar :config="config"></full-calendar>
        <pre>{{currentUser}}</pre>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.user,
            config: state => state.calendarConfig
        })
    },
    created() {
        const userReq = {
            name: 'Tyler Wigington',
            age: 69,
            claims: [
                'SuperAdmin',
                'Admin',
                'Developer'
            ]
        }
        this.setUser({user: userReq})
    },
    methods: {
        ...mapActions(['setUser']),
    }
}
</script>

<style>
</style>
