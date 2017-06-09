Vue.component('todo-list', {
  methods: {
    testMethod() {
      console.log('your a fag');
    },
  },
  template: `
  <form>
  <input v-model="title" type="text" placeholder="title of note" name="title">
  <input v-model=""
  </form>
  <button @click="testMethod()">Submit</button>
  `,
});

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
  },
});
