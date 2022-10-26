import card from "./Card";

class CardDeck {
    constructor(public example: card[]) {}
    getCard(){
        const randomCard = Math.floor(Math.random() * this.example.length - 1);
        return this.example.splice(randomCard , 1)
    }

    getCards( howMany: number){
        const randomCards = [];
        for(let i = 0; i < howMany; i++){
            randomCards.push(this.getCard())
        }
         return randomCards
    }
}

export default CardDeck;