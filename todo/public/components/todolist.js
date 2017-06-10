const todolist = Vue.component('todo-list', {
  template: `
  <form>
    <input v-model="title" type="text" placeholder="title of todo" name="title">
    <input v-model="contents" type="text" placeholder="contents of todo" name="what do you have to do?">
    <input @click="postTodo()" type="submit" value="post it">
  </form>
  `,
  data: function () {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    postTodo() {
      console.log(this.title)
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
        .then(res => console.log(res))
        .catch(res => console.error(res));
    },
  },
});

modules.exports = todolist;
