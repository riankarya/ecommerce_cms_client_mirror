<template>
  <div id="app">
    <div id="nav">
      <button v-if="isLoggedIn" @click="logout">Log Out</button> |
      <router-link to="/">Home</router-link> |
      <router-link v-if="isLoggedIn" to="/addProduct">Add Product</router-link>
      <router-link class="logreg" v-if="!isLoggedIn" to="/login">Login</router-link> |
      <router-link class="logreg" v-if="!isLoggedIn" to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>

</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('setIsLoggedIn', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLoggedIn: {
      get () {
        if (localStorage.getItem('token')) {
          return true
        }
        return this.$store.state.isLoggedIn
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: inline-flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
