const model = {
  currentCard: null,
  cards: [
    {
      denomination: 'USD',
      price: '$2,000.00',
      color: 'red',
    },
    {
      denomination: 'CAD',
      price: '$4,050.00',
      color: 'green',
    },
    {
      denomination: 'SIC',
      price: '$1,502.39',
      color: 'blue',
    },
  ],
};

const controller = {
  init() {
    model.currentCard = model.cards[0];
    cardView.init();
  },
  getCurrentCard() {
    return model.currentCard;
  },
  getCards() {
    return model.cards;
  },
};

const cardView = {
  displayCards() {
    const boxes = document.getElementById('boxes');
    const cards = controller.getCards();
    cards.forEach((card) => {
      const cardColor = card.color;
      boxes.innerHTML += `<div id="${cardColor}" class="${cardColor}-box"></div>`;
    });
  },
  addEvents() {
    const cards = controller.getCards();
    cards.forEach((card) => {
      const cardColor = card.color;
      document.getElementById(cardColor).addEventListener('click', () => {
        console.log(`click ${cardColor}`);
      });
    });
  },
}

const test = document.getElementById('test');

console.log('Successfully loaded.');
