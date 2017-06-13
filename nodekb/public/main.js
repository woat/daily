const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const deleteButton = document.getElementById('delete');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});

deleteButton.addEventListener('click', () => {
  console.log(deleteButton.dataset.id)
})

console.log('js successfully loaded')
