import bgCardBack from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'
import Card from '../models/card';
import '../style/Background.scss'

const Background = ({ card }: { card: Card }) => {


    return <div className="bg">
        <div>
            <div className="bg-card-front">
                <img src={cardLogo} alt="" />
                <div className="digit">
                    <p className="show-digit">{card.cardNumber}</p>
                </div>
                <div className="card-foot">
                    <p className="user-name">{card.name}</p>
                    <p className="expire-date">{card.month}/{card.year}</p>
                </div>
            </div>
            <img src={bgCardBack} alt="" className='bg-card-back' />
        </div>
    </div>
};

export default Background;