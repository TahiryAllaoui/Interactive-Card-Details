import { useEffect, useState } from 'react';
import '../style/App.scss'
import Background from './Background'
import Form from './Form'
import Card from '../models/card';

function App() {
  const [card, setCard] = useState<Card>({
    name: "John Lavine",
    cardNumber: '1234 5678 9123 4567',
    month: '12',
    year: '26',
    cvc: '123'
  });

  useEffect(() => {
    setCard((card) => card)
  }, [card])


  return (
    <div className='app'>
      <Background card={card} />
      <Form card={card} setCard={setCard} />
    </div>
  )
}

export default App
