<template>
  <b-card title="Login"  
          border-variant="primary"
          class="col-md-6 mx-auto mt-4"> 
    <b-form @submit="onSubmit" @reset="reset">
      <b-form-group id="usernameInputGroup"
                    label="Username:"
                    label-for="usernameInput">
        <b-form-input id="usernameInput"
                      type="text"
                      v-model="username"
                      required
                      autocomplete="username"
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordInputGroup"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="password"
                      required
                      autocomplete="current-password"
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </b-card>
</template>

<script>
import ApiService from '../store/api'

export default {
    data() {
        return {
          username: '',
          password: ''
        }
    },
    created() {
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        const req = {
          username: this.username,
          password: this.password
        }
        ApiService.login(req);
      },
      reset(evt) {
        console.log(evt);
      }
    }
}
</script>
</script>

<style>
</style>