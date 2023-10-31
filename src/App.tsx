import React, { useState } from 'react';
import './App.css';
import './cards.css';
import TakeYourCards from './components/TakeYourCards/TakeYourCards';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import { text } from 'node:stream/consumers';

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <TakeYourCards/>
        </div>
    );
}

export default App;











