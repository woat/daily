<template>
  <div class="Register">
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

                  <div class="field">
                    <p class="control">
                      <button class="button is-info" @click='register'>
                        Register
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
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordMatch: ''
    }
  },
  methods: {
    async register() {
      const credentials = {
        email: this.email,
        password: this.password
      }

      const response = await UserService.register(credentials)
      this.$store.dispatch('updateId', response.data.user._id)
      this.$store.dispatch('updateToken', response.data.token)
      this.$store.dispatch('updateLogged', true)

    }
  }
}
</script>
