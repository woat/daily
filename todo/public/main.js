const todoInput = Vue.component('todo-input', {
  template: `
  <div>
    <form>
      <input v-model="title" type="text" placeholder="title of todo" name="title">
      <input v-model="contents" type="text" placeholder="contents of todo" name="what do you have to do?">
    </form>
    <button @click="postTodo()">fuck</button>
    <div v-for="todo in todos">
      <ul>
        <li>{{todo.title}}</li>
        <li>{{todo.contents}}</li>
      </ul>
    </div>
  </div>
  `,
  data: function () {
    return {
      title: '',
      contents: '',
      todos: [],
    };
  },
  methods: {
    postTodo() {
      const postHeaders = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          contents: this.contents,
        }),
      };
      
      fetch('/api/todos', postHeaders)
        .then(res => res.json())
        .catch(res => console.error(res));

      fetch('/api/todos')
        .then(res => res.json())
        .then(res => res.map(todo => this.todos.push(todo)))
    },
  },
  created() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(res => res.map(todo => this.todos.push(todo)));
  },
  beforeUpdate() {
    console.log(this.todos);
  },
});

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
  },
});
