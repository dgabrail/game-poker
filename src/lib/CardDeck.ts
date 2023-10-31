import Card from "./Card"

class CardDeck {
  constructor(public cards: Card[]) { }
  getCard() {
    const randoomCard: Card = cards[Math.floor(Math.random() * cards.length)];
    cards.splice(cards.indexOf(randoomCard), 1);
    return randoomCard;
  }

  getCards(howMany: number) {
    const selectedCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      if (cards.length !== 0) {
        selectedCards.push(this.getCard());
      }
    }
    return selectedCards;
  }
}

const cards: Card[] = [];
const suits = ['♦', '♥', '♣', '♠'];

suits.map(cardSuit => {
  for (let i = 2; i < 15; i++) {
    if (i === 11) {
      cards.push(new Card('j', cardSuit));
    } else if (i === 12) {
      cards.push(new Card('q', cardSuit));
    } else if (i === 13) {
      cards.push(new Card('k', cardSuit));
    } else if (i === 14) {
      cards.push(new Card('a', cardSuit));
    } else {
      cards.push(new Card(JSON.stringify(i), cardSuit));
    }
  }
});

const cardDeck = new CardDeck(cards);

export default cardDeck