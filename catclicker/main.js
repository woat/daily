const div = document.getElementById('cats');

function Cat(name, picture) {
  this.name = name;
  this.picture = picture;
}

Cat.prototype.render = function() {
  return `
  <div class='cat'>
    <span class='name'>${this.name}</span>
    <img src='${this.picture}'>
    <span class='count'>0</span>
  </div>
  `
}

const catOne = new Cat('cat', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496');
const catTwo = new Cat('kat', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');

function displayCat(cat) {
  div.innerHTML += `
  <img id="${cat.name}" src="${cat.picture}">
  <h1>${cat.name}</h1>
  <h1>${cat.count}</h1>
  `;
  document.getElementById(cat.name).addEventListener('click', () => {
    console.log(`fuck ${cat.name}`);
  });
}

displayCat(catOne);
displayCat(catTwo);

function updateCount(cat) {
  cat.count += 1;
}

