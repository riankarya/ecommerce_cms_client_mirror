<template>
  <div class="login">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form @submit.prevent="register" class="login100-form validate-form">
            <span class="login100-form-title"> Register </span>

            <div
              :class="{ 'alert-validate': emailError }"
              class="wrap-input100 validate-input"
              :data-validate="emailErrorMsg"
            >
              <input
                v-model="email"
                :class="{ 'has-val': email.length }"
                class="input100"
                type="text"
                name="email"
              />
              <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div
              :class="{ 'alert-validate': passwordError }"
              class="wrap-input100 validate-input"
              :data-validate="passwordErrorMsg"
            >
              <input
                v-model="password"
                :class="{ 'has-val': password.length }"
                class="input100"
                type="password"
                name="pass"
              />
              <span class="focus-input100" data-placeholder="Password"></span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      emailError: false,
      emailErrorMsg: '',
      passwordError: false,
      passwordErrorMsg: ''
    }
  },
  methods: {
    register () {
      const regEmail = new RegExp(
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      this.emailError = false
      this.passwordError = false
      if (this.email === '') {
        this.emailError = true
        this.emailErrorMsg = 'Enter email'
      } else if (!regEmail.test(String(this.email).toLowerCase())) {
        this.emailError = true
        this.emailErrorMsg = 'Invalid email format'
      }
      const regPassword = new RegExp(/^[a-zA-Z0-9]+$/)
      if (this.password === '') {
        this.passwordError = true
        this.passwordErrorMsg = 'Enter password'
      } else if (!regPassword.test(this.password)) {
        this.passwordError = true
        this.passwordErrorMsg = 'Invalid email password'
      }
      if (this.passwordError || this.emailError) {
        return
      }
      console.log('LOGIN PENCET')
      this.$store.dispatch('register', { email: this.email, password: this.password })
        .then(data => {
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css" scoped>
@import "../assets/styleSheet/login.css";
@import "../assets/styleSheet/bootstrap.min.css";
</style>
