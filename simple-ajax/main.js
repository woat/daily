const ourList = document.getElementById('ourList');
const button = document.getElementById('button');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data => data.map(item => {
    console.log(item.username)
  }))
