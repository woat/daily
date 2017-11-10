const todoInput = Vue.component('todo-input', {
  template: `
  <div>
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <form>
            <input v-model="title" class="input" type="text" placeholder="title of todo" name="title">
            <textarea v-model="contents" class="textarea" placeholder="contents of todo" name="what do you have to do?"></textarea>
          </form>
          <button class="button" @click="postTodo()">post it</button>
        </div>
      </div>
    </div>
    <br>
      <div v-for="todo in todos">
        <div :id="todo._id" class="modal">
        <div class="modal-background"></div>
          <div class="modal-content">
            <div class="column is-8 is-offset-2">
              <div class="box has-text-centered">
              <input :id="todo._id+'title'" v-model="title" class="input" type="text" placeholder="title of todo">
              <textarea :id="todo._id+'contents'" v-model="contents" class="textarea" placeholder="contents of todo"></textarea>
              <p class="subtitle is-5">{{todo.created}}</p>
              <button @click="closeModal(todo._id)" class="button">close</button>
              <button @click="putTodo(todo._id)" class="button">done</button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <div class="box has-text-centered">
            <button @click="deleteTodo(todo._id)" class="delete is-pulled-right"></button>
            <br>
            <p class="title is-1">{{todo.title}}</p>
            <p class="subtitle is-3">{{todo.contents}}</p>
            <p class="subtitle is-5">{{todo.created}}</p>
            <button @click="openModal(todo._id)" class="button">edit</button>
          </div>
        </div>
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
        .then((res) => {
          const temp = [];
          res.map(todo => temp.push(todo));
          this.todos.push(temp.slice(-1)[0]);
        });
    },
    putTodo(id) {
      const putHeaders = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          contents: this.contents,
        }),
      };

      fetch(`api/todos/${id}`, putHeaders)
        .catch(res => console.error(res));

      const targetTodo = this.todos[this.todos.indexOf(this.todos.find(todo => todo._id === id))];
      // essentially boils to this.todos[i]
      // pass _id in .find to get target object
      // target object is then passed to indexOf to get the index
      // index is then used to target the proper todo
      targetTodo.title = this.title;
      targetTodo.contents = this.contents;
      this.closeModal(id);
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.indexOf(this.todos.find(todo => todo._id === id)), 1);
      fetch(`api/todos/${id}`, { method: 'DELETE' })
        .then(res => console.log(res));
    },
    openModal(id) {
      const modal = document.getElementById(id);
      const title = document.getElementById(`${id}title`);
      const contents = document.getElementById(`${id}contents`);
      const targetTodo = this.todos[this.todos.indexOf(this.todos.find(todo => todo._id === id))];

      modal.classList.add('is-active');
      title.value = targetTodo.title;
      contents.value = targetTodo.contents;
    },
    closeModal(id) {
      const modal = document.getElementById(id);
      modal.classList.remove('is-active');
    },
  },
  created() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(res => res.map(todo => this.todos.push(todo)));
  },
});

new Vue({
  el: '#app',
});
