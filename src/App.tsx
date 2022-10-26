import React, {useState} from 'react';
import './App.css';
import './cards.css';
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
    const [cards , setCards] = useState<Card[]>([
    ])
    const cardClass: string[] = [];
const pokerStart = () => {
    const cardExample = [];
    const suit = ['♦' , '♥' , '♣' , '♠'];
    for (let i = 0; i < suit.length; i++) {
        for (let e = 1; e < 15; e++){
            if ( e < 10){
                const cardProperties = new Card(suit[i] , JSON.stringify(e + 1))
                cardExample.push(cardProperties);
            }else if (e === 11) {
                const cardProperties = new Card(suit[i] , 'j')
                cardExample.push(cardProperties);
            }else if (e === 12){
                const card = suit[i] + ' ' + 'Q';
                const cardProperties = new Card(suit[i] , 'q')
                cardExample.push(cardProperties);
            }else if (e === 13){
                const cardProperties = new Card(suit[i] , 'k')
                cardExample.push(cardProperties);
            }else if (e === 14) {
                const cardProperties = new Card(suit[i] , 'a')
                cardExample.push(cardProperties);
            }
        }
    }
    const cardDeck = new CardDeck(cardExample);
    cardDeck.getCards(5);
    for ( let i = 0; i < 5; i++){
        cards.push(cardDeck.getCards(5)[i][0]);
        const cardClassName = "card " + "rank-" + cards[i].rank + " diams";
        cardClass.push(cardClassName);
    }
    const pokerHand = new PokerHand(cards);
    pokerHand.getOutcome()
}
    if(cards.length === 0) {
        return <button onClick={pokerStart}>Раздать карты</button>
    }
  return (
    <div className="App">
        <button onClick={pokerStart}>Раздать карты</button>
        <div className="playingCards faceImages">
            <span className={cardClass[0]}>
                <span className="rank">{cards[0].rank}</span>
                <span className="suit">{cards[0].suit}</span>
        </span>
        </div>
        <div className="playingCards faceImages">
            <span className={cardClass[1]}>
                <span className="rank">{cards[1].rank}</span>
                <span className="suit">{cards[1].suit}</span>
        </span>
        </div>
        <div className="playingCards faceImages">
            <span className={cardClass[2]}>
                <span className="rank">{cards[2].rank}</span>
                <span className="suit">{cards[2].suit}</span>
        </span>
        </div>
        <div className="playingCards faceImages">
            <span className={cardClass[3]}>
                <span className="rank">{cards[3].rank}</span>
                <span className="suit">{cards[3].suit}</span>
        </span>
        </div>
        <div className="playingCards faceImages">
            <span className={cardClass[4]}>
                <span className="rank">{cards[4].rank}</span>
                <span className="suit">{cards[4].suit}</span>
        </span>
        </div>
    </div>
  );
}

export default App;











