import { useEffect, useState } from 'react';
import Card from '../models/card';
import '../style/Form.scss'
import Attribut from '../models/attribut'


const Form = ({ card, setCard }: { card: Card, setCard: (card: Card) => void }) => {
    const [buttonValidity, setButtonValidity] = useState(true);
    useEffect(() => {
        setButtonValidity(true);
    }, [])

    //Setting up special char
    const specialChar: RegExp = /[1234567890!@#$%^&*()=<>|\\/?:;{}[+\]]/;
    const specialCharForNumber: RegExp = /[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM~!@#$%^&*()_+\\`\-\=\[\]\;\'\,\.\/\*\-\+\|\>\<]/;

    const [nameAttribut, setNameAttribut] = useState<Attribut>({
        value: card.name,
        error: true
    })
    const [numberAttribut, setNumberAttribut] = useState<Attribut>({
        value: card.cardNumber,
        error: true
    })
    const [monthAttribut, setMonthAttribut] = useState<Attribut>({
        value: card.month,
        error: true
    })
    const [yearAttribut, setYearAttribut] = useState<Attribut>({
        value: card.year,
        error: true
    })
    const [cvcAttribut, setCvcAttribut] = useState<Attribut>({
        value: card.cvc,
        error: true
    })

    //For handling the name
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errorName = document.querySelector('.error-name');
        let errorNameInput = document.querySelector('#card-name');
        (e.currentTarget.value == '') ? setCard({ ...card, name: "John Lavine" }) : setCard({ ...card, name: e.currentTarget.value });
        let error = specialChar.test(e.currentTarget.value);
        if (error) {
            errorName?.classList.add('error-name-active');
            errorNameInput?.classList.add('input-error');
        } else {
            errorName?.classList.remove('error-name-active');
            errorNameInput?.classList.remove('input-error');
        }
        setNameAttribut({
            value: e.currentTarget.value,
            error: error
        });
    };

    //For handling the number
    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errorNumber = document.querySelector('.error-number');
        let errorCardNumberInput = document.querySelector('#card-number');
        let tmp: string = e.currentTarget.value.slice(0, 4) + ' ' + e.currentTarget.value.slice(4, 8) + ' ' + e.currentTarget.value.slice(8, 12) + ' ' + e.currentTarget.value.slice(12);
        (e.currentTarget.value == '') ? setCard({ ...card, cardNumber: "1234 5678 9123 4567" }) : setCard({ ...card, cardNumber: tmp });
        let error = specialCharForNumber.test(e.currentTarget.value);
        if (error) {
            errorNumber?.classList.add('error-number-active');
            errorCardNumberInput?.classList.add('input-error');
        } else {
            errorNumber?.classList.remove('error-number-active');
            errorCardNumberInput?.classList.remove('input-error');
        }
        if (e.currentTarget.value.length < 16) {
            error = true;
        }
        setNumberAttribut({
            value: e.currentTarget.value,
            error: error
        });
    };

    //For handling the Exp. date
    const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errorDate = document.querySelector('.date-error');
        let errorMonthInput = document.querySelector('#month');
        (e.currentTarget.value == '') ? setCard({ ...card, month: '00' }) : setCard({ ...card, month: e.currentTarget.value });
        let error = specialCharForNumber.test(e.currentTarget.value);
        if (error) {
            errorDate!.classList.add('show');
            errorMonthInput!.classList.add('input-error');
        } else {
            errorDate!.classList.remove('show');
            errorMonthInput!.classList.remove('input-error');
        }
        if (e.currentTarget.value == '')
            error = true;
        setMonthAttribut({
            value: e.currentTarget.value,
            error: error
        });
    };

    //For handling Year
    const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errorYearInput = document.querySelector('#year');
        let errorDate = document.querySelector('.date-error');
        (e.currentTarget.value == '') ? setCard({ ...card, year: '00' }) : setCard({ ...card, year: e.currentTarget.value });
        let error = specialCharForNumber.test(e.currentTarget.value);
        if (error) {
            errorDate!.classList.add('show');
            errorYearInput!.classList.add('input-error');
        } else {
            errorDate!.classList.remove('show');
            errorYearInput!.classList.remove('input-error');
        }
        if (e.currentTarget.value == '')
            error = true;
        setYearAttribut({
            value: e.currentTarget.value,
            error: error
        });
    };

    //For handling Cvc
    const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
        let errorCvc = document.querySelector('.cvc-error');
        let errorCvcInput = document.querySelector('#cvc');
        (e.currentTarget.value == '') ? setCard({ ...card, cvc: '000' }) : setCard({ ...card, cvc: e.currentTarget.value });
        let error = specialCharForNumber.test(e.currentTarget.value);
        if (error) {
            errorCvc!.classList.add('cvc-active');
            errorCvcInput!.classList.add('input-error');
        } else {
            errorCvc!.classList.remove('cvc-active');
            errorCvcInput!.classList.remove('input-error');
        }
        if (e.currentTarget.value == '')
            error = true;
        setCvcAttribut({
            value: e.currentTarget.value,
            error: error
        });
    };


    useEffect(() => {
        let status = false;

        if (nameAttribut.error) {
            status = true;
        }
        if (numberAttribut.error) {
            status = true;
        }
        if (monthAttribut.error) {
            status = true;
        }
        if (yearAttribut.error) {
            status = true;
        }
        if (cvcAttribut.error) {
            status = true;
        }

        setButtonValidity(status)
    }, [nameAttribut, numberAttribut, monthAttribut, yearAttribut, cvcAttribut])

    return <form>
        <div className="container">

            <div className="name">
                <label htmlFor="card-name">CARDHOLDER NAME</label>
                <input type="text" name="card-name" id='card-name' placeholder="e.g: John Lavine" required onChange={handleName} />
                <p className='error-name'>Must be a valide name</p>
            </div>
            <div className="number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" name="card-number" id='card-number' placeholder="16 Digits" required minLength={16} maxLength={16} onChange={handleNumber} />
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
                    <input type="text" name="cvc" id="cvc" placeholder='e.g: 123' maxLength={3} minLength={3} required onChange={handleCvc} />
                    <p className="cvc-error">Number only. Can't be blank</p>
                </div>
            </div>
            <button type='submit' className='butt' disabled={buttonValidity}>Confirm</button>
        </div>

    </form>
};

export default Form;