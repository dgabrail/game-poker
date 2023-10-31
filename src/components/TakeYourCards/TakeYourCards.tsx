import React, { useState } from 'react'
import Card from '../../lib/Card';
import cardDeck from '../../lib/CardDeck';
import PokerHand from '../../lib/PokerHand';
import CardView from '../CardView/CardView';

const TakeYourCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  new PokerHand(cards).getOutcome();
  const takeYourCards = () => {
    setCards(cardDeck.getCards(5));
  };

  if (cards.length === 0) {
    return (
      <div className="playingCards faceImages">
        <button onClick={takeYourCards} className='btn btn-primary mt-5'>Раздать карты</button>
      </div>
    )
  }

  return (
    <div className="playingCards faceImages">
      <button onClick={takeYourCards} className='btn btn-primary mt-5'>Раздать карты</button>
      <div className='Cards' style={{display: 'flex' , marginTop: '20px' , justifyContent:'center'}}>
        {cards.map(card => (
          <CardView rank={card.rank} suit={card.suit} />
        ))}
      </div>
    </div>
  )
}

export default TakeYourCards
