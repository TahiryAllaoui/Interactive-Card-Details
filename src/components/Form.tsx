import '../style/Form.scss'

const Form = () => {

    return <form>
        <label htmlFor="card-name">CARDHOLDER NAME</label>
        <input type="text" name="card-name" id='card-name' placeholder="Felicia Leire" required />
        <label htmlFor="card-number">CARD NUMBER</label>
        <input type="text" name="card-number" id='card-number' placeholder="16 Digits" required />
        <div className="exp-date">
            <label htmlFor="date">EXP. DATE (MM/YY)
                <input type="number" name="date" id="month" />
                <input type="number" name="date" id="year" />
            </label>
            <label htmlFor="cvc">
                CVC
                <input type="number" name="cvc" id="cvc" />
            </label>
        </div>
        <button>Confirm</button>

    </form>
};

export default Form;