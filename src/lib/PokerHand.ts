import card from "./Card";

class PokerHand {
    constructor(public selectedCards: card[]) {}
    getOutcome() {
        let number:number = 0;
        let numberSuit:number = 0;

        for (let i = 0; i < this.selectedCards.length; i++) {
            for (let e = 0; e < 5; e++) {
                if (i !== e) {
                    if (this.selectedCards[i].rank === this.selectedCards[e].rank) {
                        number++
                    }
                    if (this.selectedCards[i].suit === this.selectedCards[e].suit) {
                        numberSuit++
                    }
                }
            }
        }
    }
}
export default PokerHand;