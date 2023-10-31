import Card from "./Card";
import cardDeck from "./CardDeck";

class PokerHand {
  constructor(public selected: Card[]) { }
  getOutcome() {
    let numberCombinations = 0;
    let numberSuits = 0;
    for (let i = 0; i < this.selected.length - 1; i++) {
      for (let e = i + 1; e < this.selected.length; e++) {
        if (this.selected[i].rank === this.selected[e].rank) {
          numberCombinations++;
        } else if (this.selected[i].suit === this.selected[e].suit) {
          numberSuits++;
        }
      }
      if (numberSuits === 4) {
        break;
      } else {
        numberSuits = 0;
      }
    }
    if (numberSuits === 4) {
      console.log('Флэш');
    } else if (numberCombinations === 1) {
      console.log('одна пара')
    } else if (numberCombinations === 2) {
      console.log('две пары');
    } else if (numberCombinations === 3) {
      console.log('тройка');
    }
  }
}


export default PokerHand