// generate a new deck
// remove other players cards
// deal hand
// strength
// input flop
// strength
// input turn
// strength
// input river
// strength

// deck key
// 2-9 + 0 regcards where 0 is 10
// JQK + A face cards where A is ace
// SCHD suits

// hand logic
// cards are pushed in an array [2H, 2C]
// to access first card's suit: card[0][1]

function generateDeck() {
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
  const suits = ['S', 'C', 'H', 'D'];
  const deck = [];

  suits.forEach((suit) => {
    cards.forEach((card) => {
      deck.push(`${card}${suit}`);
    });
  });

  return deck;
}

function shuffle(array) {
  let currentPosition = array.length;
  let placeholder;
  let i;

  while (currentPosition) {
    i = Math.floor(Math.random() * currentPosition);
    currentPosition -= 1;
    placeholder = array[currentPosition];
    array[currentPosition] = array[i];
    array[i] = placeholder;
  }

  return array;
}

function removePlayerCards(deck, amount) {
  // for every player remove 2 cards from deck
  const remove = amount * 2;
  deck.splice(0, remove);
  return deck;
}

function deal(deck, playerAmount) {
  // remove 2 cards from deck and push into hand
  const playerHand = [];
  removePlayerCards(deck, playerAmount);
  playerHand.push(deck[0], deck[1]);
  deck.splice(0, 2);
  return playerHand;
}

let players = 3;
let ourDeck = shuffle(generateDeck());
console.log(ourDeck, ourDeck.length)
console.log('deck should be full length: 52')
let ourHand = deal(ourDeck, players);
console.log('ourHand: ' + [...ourHand]);
console.log(ourDeck, ourDeck.length);
console.log('deck should be length: ' + `${50 - (players * 2)}`);
