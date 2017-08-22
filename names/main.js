console.log('loaded');

const model = {
  names: [],
  pushName(name) {
    this.names.push(name);
  },
  deleteName(index) {
    this.names.splice(index, 1);
  },
  async genName() {
    const response = await fetch('https://uinames.com/api/');
    const json = await response.json();
    return json;
  },
};

const controller = {
  getNames() {
    return model.names;
  },
  removeName(index) {
    model.deleteName(index);
  },
  async createNewName() {
    const newName = await model.genName();
    newName.id = Math.random().toString();
    model.pushName(newName);
  },
  async generateButton() {
    await this.createNewName();
    cardView.render();
  },
};

const cardView = {
  cards: document.getElementById('cards'),
  createTemplate(name) {
    return `
      <div id="${name.id}" class="box">
        <span class="delete is-large is-pulled-right"></span>
        <h1>${name.name}</h1>
        <h1>${name.region}</h1>
      </div>
      `;
  },
  deleteCard(elem) {
    elem.parentNode.parentNode.removeChild(elem.parentNode);
  },
  displayNames(template) {
    this.cards.innerHTML += template;
  },
  render() {
    while (this.cards.hasChildNodes()) {
      this.cards.removeChild(this.cards.firstChild);
    }
    // render cards
    const names = controller.getNames();
    names.forEach((name) => {
      const template = this.createTemplate(name);
      this.displayNames(template);
    });
    // render delete button
    const deleteSpan = Array.from(document.getElementsByClassName('delete'));
    deleteSpan.forEach((del) => {
      del.addEventListener('click', () => {
        this.deleteCard(del);
        // find id of model
        const id = del.parentNode.id;
        const index = names.findIndex(name => name.id === id);
        // delete it by index
        controller.removeName(index);
      });
    });
  },
};

const button = document.getElementById('generate');
button.addEventListener('click', () => controller.generateButton());
