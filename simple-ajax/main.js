const ourList = document.getElementById('ourList');
const button = document.getElementById('button');
const url = 'https://jsonplaceholder.typicode.com/users';

button.addEventListener('click', () => {
  fetch(url)
    .then(data => data.json())
    .then(data => data.map(object => {
      ourList.innerHTML += `<li>${object.name}</li>`
    }))
})
