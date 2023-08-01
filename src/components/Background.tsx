import bgCardBack from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'
import '../style/Background.scss'

const Background = () => {

    return <div className="bg">
        <div>
            <div className="bg-card-front">
                <img src={cardLogo} alt="" />
                <div className="digit">
                    <p className="show-digit">9531 5465 3215 258E</p>
                </div>
                <div className="card-foot">
                    <p className="user-name">Kali kwel</p>
                    <p className="expire-date">09/00</p>
                </div>
            </div>
            <img src={bgCardBack} alt="" className='bg-card-back' />
        </div>
    </div>
};

export default Background;