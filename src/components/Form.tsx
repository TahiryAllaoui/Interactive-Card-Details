import { useEffect } from 'react';
import Card from '../models/card';
import '../style/Form.scss'

const Form = ({ card, setCard }: { card: Card, setCard: (card: Card) => void }) => {
    //Getting Error Message
    let errorName = document.querySelector('.error-name');
    let errorNameInput = document.querySelector('#card-name');
    let errorNumber = document.querySelector('.error-number');
    let errorCardNumberInput = document.querySelector('#card-number');
    let errorDate = document.querySelector('.date-error');
    let errorMonthInput = document.querySelector('#month');
    let errorYearInput = document.querySelector('#year');
    let errorCvc = document.querySelector('.cvc-error');
    let errorCvcInput = document.querySelector('#cvc');


    //Setting up special char
    const specialChar: RegExp = /[1234567890!@#$%^&*()=<>/?:;{}[+\]]/;
    const specialCharForNumber: RegExp = /[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM~!@#$%^&*()_+\\`\-\=\[\]\;\'\,\.\/\*\-\+\|\>\<]/;

    //For handling the name
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.currentTarget.value == '') ? setCard({ ...card, name: "John Wick" }) : setCard({ ...card, name: e.currentTarget.value });
    };

    //For handling the number
    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let tmp: string = e.currentTarget.value.slice(0, 4) + ' ' + e.currentTarget.value.slice(4, 8) + ' ' + e.currentTarget.value.slice(8, 12) + ' ' + e.currentTarget.value.slice(12);
        (e.currentTarget.value == '') ? setCard({ ...card, cardNumber: "1234 5678 9123 4567" }) : setCard({ ...card, cardNumber: tmp });
    };

    //For handling the Exp. date
    const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.currentTarget.value == '') ? setCard({ ...card, month: '00' }) : setCard({ ...card, month: e.currentTarget.value });
    };
    const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.currentTarget.value == '') ? setCard({ ...card, year: '00' }) : setCard({ ...card, year: e.currentTarget.value });
    };

    //For handling Cvc
    const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.currentTarget.value == '') ? setCard({ ...card, cvc: '000' }) : setCard({ ...card, cvc: e.currentTarget.value });
    };

    //For toggling Name Error message
    useEffect(() => {
        errorName?.classList.toggle('error-name-active');
        errorNameInput?.classList.toggle('input-error');
    }, [(specialChar.test(card.name))]);

    //for toggling Card Number Error message
    useEffect(() => {
        errorNumber?.classList.toggle('error-number-active');
        errorCardNumberInput?.classList.toggle('input-error');
    }, [(specialCharForNumber.test(card.cardNumber))]);

    //for toggling Exp. date error message
    useEffect(() => {
        errorDate?.classList.toggle('date-error-active');
        errorMonthInput?.classList.toggle('input-error');
    }, [specialCharForNumber.test(card.month)])

    useEffect(() => {
        errorDate?.classList.toggle('date-error-active');
        errorYearInput?.classList.toggle('input-error');
    }, [specialCharForNumber.test(card.year)])

    //for toggling Cvc Error message
    useEffect(() => {
        errorCvc?.classList.toggle('cvc-active');
        errorCvcInput?.classList.toggle('input-error')
    }, [specialCharForNumber.test(card.cvc)])


    return <form>
        <div className="container">

            <div className="name">
                <label htmlFor="card-name">CARDHOLDER NAME</label>
                <input type="text" name="card-name" id='card-name' placeholder="e.g: John Wick" required onChange={handleName} />
                <p className='error-name'>Must be a valide name</p>
            </div>
            <div className="number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" name="card-number" id='card-number' placeholder="16 Digits" required maxLength={16} onChange={handleNumber} />
                <p className="error-number">Wrong format, numbers only</p>
            </div>
            <div className="exp-date">
                <div className="date">
                    <label htmlFor="date">EXP. DATE (MM/YY)</label>
                    <div className="date-input">
                        <input type="text" name="date" id="month" placeholder='MM' maxLength={2} onChange={handleMonth} required />
                        <input type="text" name="date" id="year" placeholder='YY' maxLength={2} onChange={handleYear} required />
                    </div>
                    <p className="date-error">Number only. Can't be blank</p>
                </div>
                <div className="cvc">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name="cvc" id="cvc" placeholder='e.g: 123' maxLength={4} required onChange={handleCvc} />
                    <p className="cvc-error">Number only. Can't be blank</p>
                </div>
            </div>
            <button type='submit' >Confirm</button>
        </div>

    </form>
};

export default Form;