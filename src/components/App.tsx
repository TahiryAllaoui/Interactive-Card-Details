import { useEffect, useState } from 'react';
import '../style/App.scss'
import Background from './Background'
import Form from './Form'
import Card from '../models/card';

function App() {
  const [card, setCard] = useState<Card>({
    name: "Your Name",
    cardNumber: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000'
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
