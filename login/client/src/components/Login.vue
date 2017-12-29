<template>
  <div class="Login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <div class="card">
                <div class="card-content">

                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" v-model="email" type="email" placeholder="Email">
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left">
                      <input class="input" v-model="password" type="password" placeholder="Password">
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <h1 v-if="error"> {{ error }}</h1>

                  <div class="field">
                    <p class="control">
                      <button class="button is-success" @click='loginUser'>
                        Login
                      </button>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async loginUser() {
      const credentials = {
        email: this.email,
        password: this.password
      }
      const payload = await UserService.login(credentials)

      if (payload.data.error) {
        return this.error = payload.data.error
      }

      this.updateId(payload.data.user._id)
      this.updateToken(payload.data.token)
      this.$store.dispatch('updateLogged', true)
      this.$router.push('/home')
    },
    getId() {
      return this.$store.getters.getId
    },
    updateId(id) {
      return this.$store.dispatch('updateId', id)
    },
    updateToken(token) {
      return this.$store.dispatch('updateToken', token)
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
