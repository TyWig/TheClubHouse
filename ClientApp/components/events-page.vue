<template>
    <div>
      <full-calendar :events="events" :config="calendarConfig" @day-click="dayClicked"></full-calendar>
      <b-jumbotron header="Register For an Event">
        <!-- <p>For more information visit website</p> -->
        <!-- <b-btn variant="primary" href="#">More Info</b-btn> -->
      </b-jumbotron>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import ApiService from '../store/api';

export default {
  data() {
    return {
      calendarConfig: {
        themeSystem: 'bootstrap4',
        defaultView: 'month',
        header: {
          left: 'prev,next, today',
          center: 'title',
          right: 'month'
        },
        eventClick: (event) => {
          console.log(event);
        }
      }
    }
  },
  computed: {
    ...mapState({
      events: state => state.events
    })
  },
  created() {
    this.getEvents();
  },
  methods: {
    ...mapActions(['getEvents']),
    dayClicked: (event) => {
      console.log(event);
    }
  }
}
</script>

<style>
</style>