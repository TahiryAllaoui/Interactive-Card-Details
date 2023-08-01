import bgCardBack from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'
import '../style/Background.scss'

const Background = () => {

    return <div className="bg">
        <div>
            <div className="bg-card-front">
                <img src={cardLogo} alt="" />
                <div className="digit">
                    <p className="first-digit">9531</p>
                    <p className="second-digit">6458</p>
                    <p className="third-digit">5687</p>
                    <p className="fourth-digit">2567E</p>
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