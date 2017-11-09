var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JS' },
      { text: 'Learn Vue' },
      { text: 'Learn something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue.js!'
  }
})

Vue.component('todo-item', {
  props:['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Tomatoe' },
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    classTest: 'yum'
  }
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot gibe answer until you ask a question m8.'
  },
  watch: {
    question: function (newQuestion) {
      // this refers to the vue object
      this.answer = 'Waiting for u 2 finish typing';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions have a fukin question mark';
          return;
        }
        this.answer = 'thonking.....';
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function (res) {
            vm.answer = _.capitalize(res.data.answer)
          })
          .catch(function (err) {
            vm.answer = 'cant reach da api' + err
          })
      },
      500
    )
  }
})

var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var example3 = new Vue({
  el: '#example-3',
  data: {
    sho: true
  },
  methods: {
    toggleShow: function () {
      var vm = this;
      setInterval(function () {
        vm.sho = !vm.sho;
      }, 2000);
    }
  },
  created: function () {
    this.toggleShow()
  }
})
