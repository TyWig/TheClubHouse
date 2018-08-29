<template>
  <b-card title="Registration"  
          border-variant="primary"
          class="col-md-6 mx-auto mt-4"> 
    <b-form @submit="register">
      <b-form-group id="emailInputGroup"
                    label="Email:"
                    label-for="emailinput">
        <b-form-input id="emailinput"
                      type="email"
                      v-model="form.email"
                      required
                      autocomplete="email"
                      placeholder="Enter email"
                      aria-describedby="emailFeedback">
        </b-form-input>
        <b-form-invalid-feedback id="emailFeedback">
          This email has already been used.
        </b-form-invalid-feedback>
      </b-form-group>
      <div class="row">
        <b-form-group id="firstNameInputGroup"
                      label="First Name:"
                      label-for="firstNameInput"
                      class="col-md-6">
          <b-form-input id="firstNameInput"
                        type="text"
                        v-model="form.firstName"
                        required
                        placeholder="Enter first name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="lastNameInputGroup"
                      label="Last Name:"
                      label-for="lastNameInput"
                      class="col-md-6">
          <b-form-input id="lastNameInput"
                        type="text"
                        v-model="form.lastName"
                        required
                        placeholder="Enter last name">
          </b-form-input>
        </b-form-group>
      </div>
      <div class="row">
        <b-form-group id="passwordInputGroup"
                      label="Password:"
                      label-for="passwordInput"
                      class="col-md-6">
          <b-form-input id="passwordInput"
                        type="password"
                        autocomplete="new-password"
                        v-model="form.password"
                        required
                        placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-form-group id="confirmPasswordInputGroup"
                      label="Confirm Password:"
                      label-for="confirmPasswordInput"
                      class="col-md-6">
          <b-form-input id="confirmPasswordInput"
                        type="password"
                        autocomplete="new-password"
                        v-model="form.confirmPassword"
                        required
                        placeholder="Confirm password">
          </b-form-input>
        </b-form-group>
      </div>
      
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </b-card>
</template>

<script>
import ApiService from '../store/api'

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
      }
    }
  },
  computed: {
    emailState() {
      ApiService.userExists(this.form.email).then(res => {
        return res.data;
      })
    }
  },
  created() {
  },
  methods: {
    register(evt) {
      evt.preventDefault();
      this.$store.dispatch(REGISTER_REQUEST, this.form);
    },
  }
}
</script>

<style>
</style>