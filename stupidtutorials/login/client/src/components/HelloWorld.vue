<template>
  <div class="hello">
    <div> Message from a GET: {{ msgGet }} </div>
    <button @click="getData">Grab Data from Express</button>
    <div> Message from a POST: {{ msgPost }}</div>
    <input v-model="postThisMsg">
    <button @click="postData(postThisMsg)">Post Data to Express</button>
  </div>
</template>

<script>
import TestService from '@/services/TestService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msgGet: 'Welcome to Your Vue.js App',
      postThisMsg: '',
      msgPost: 'Waiting for a response...'
    }
  },
  methods: {
    async getData() {
      console.log('getting data from express...')
      const response = await TestService.testGet();
      this.msgGet = response.data.msg;
    },
    async postData(payload) {
      console.log('posting data from express...')
      const response = await TestService.testPost({
        msg: payload
      });
      this.msgPost = response.data.msg;
    },
    // VUEX - Getters with params need be in methods
    // ** Does not change actual state
    testGetterParam(param) {
      return this.$store.getters.testGetterParam(param);
    },
    // VUEX - Mutations with payload
    // ** Does change actual state
    changeStateWithPayload(payload) {
      this.$store.commit('changeStateWithPayload', payload);
    }
  },
  computed: {
    // VUEX - Simple getters can stay in computed
    testGetter() {
      return this.$store.getters.testGetter; 
    },
    changeState() {
      this.$store.commit('changeState')
    }
  },
  created() {
    console.log(this.testGetter);
    console.log(this.testGetterParam('Meeko'))
    // VUEX - Access a mutation via commit
    this.changeState;
    console.log(this.testGetter);
    this.changeStateWithPayload({
      text: 'Payload Text'
    })
    console.log(this.testGetter);
    this.$store.dispatch('actionState');
    console.log(this.testGetter);
    this.$store.dispatch('actionStateD', 'owo');
    console.log(this.testGetter);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
