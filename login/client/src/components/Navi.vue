<template>
  <div class="Navi">
    <div class="container">
      <h1>Navi</h1>
      <router-link to='/login' v-if='!this.$store.state.isLoggedIn' class="button is-primary">Login</router-link>
      <router-link to='/register' v-if='!this.$store.state.isLoggedIn' class="button is-info">Register</router-link>
      <router-link to= '/logout' v-if='this.$store.state.isLoggedIn'class="button is-danger">Logout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navi'
}
</script>
