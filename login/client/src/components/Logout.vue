<template>
  <div class="Logout">
    <button class="button" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import UserService from '@/services/UserService' 
export default {
  methods: {
    async logout() {
      const token = this.$store.state.token
      const response = await UserService.logout({ token })
      this.$store.dispatch('updateLogged', false)
      this.$store.dispatch('updateReset')
      this.router.push('/home')
      // Use this response to trigger success
      console.log(response)
    }
  }
}
</script>
