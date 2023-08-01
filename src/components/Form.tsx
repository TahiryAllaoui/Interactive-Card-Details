import '../style/Form.scss'

const Form = () => {

    return <form>
        <div className="container">

            <div className="name">
                <label htmlFor="card-name">CARDHOLDER NAME</label>
                <input type="text" name="card-name" id='card-name' placeholder="e.g: Felicia Leire" required />
            </div>
            <div className="number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" name="card-number" id='card-number' placeholder="16 Digits" required />
            </div>
            <div className="exp-date">
                <div className="date">
                    <label htmlFor="date">EXP. DATE (MM/YY)</label>
                    <div className="date-input">
                        <input type="text" name="date" id="month" placeholder='MM' />
                        <input type="text" name="date" id="year" placeholder='YY' />
                    </div>
                </div>
                <div className="cvc">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name="cvc" id="cvc" placeholder='e.g: 123' />
                </div>
            </div>
            <button type='submit'>Confirm</button>
        </div>

    </form>
};

export default Form;