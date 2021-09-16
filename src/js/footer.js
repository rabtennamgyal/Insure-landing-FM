import logo from '../images/logo.svg';
import one from '../images/icon-facebook.svg';
import two from '../images/icon-twitter.svg';
import three from '../images/icon-pinterest.svg';
import four from '../images/icon-instagram.svg';


function Footer() {
    return (
        <div className='footer grid grid-footer-row'>
            <div className='footerOne grid grid-two-col'>
                <div className='footeroneOne grid grid-ai-c'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='footeroneTwo flex flex-jc-e flex-ai-c'>
                    <img src={one} alt='facebook' />
                    <img src={two} alt='twitter' />
                    <img src={three} alt='pinterest' />
                    <img src={four} alt='instagram' />
                </div>
            </div>

            <div className='footerTwo grid grid-four-col'>
                <div className='footertwo1 box'>
                    <h1>
                        OUR COMPANY
                    </h1>

                    <li>
                        HOW WE WORK
                    </li>
                    <li>
                        WHY INSURE ?
                    </li>
                    <li>
                        VIEW PLANS
                    </li>
                    <li>
                        REVIEWS
                    </li>
                </div>
                <div className='footertwo2 box'>
                    <h1>
                        HELP ME
                    </h1>
                    <li>
                        FAQ
                    </li>
                    <li>
                        TERMS OF USE
                    </li>
                    <li>
                        PRIVACY POLICY
                    </li>
                    <li>
                        COOKIES
                    </li>
                </div>
                <div className='footertwo3 box'>
                    <h1>
                        CONTACT
                    </h1>
                    <li>
                        SALES
                    </li>
                    <li>
                        SUPPORT
                    </li>
                    <li>
                        LIVE CHAT
                    </li>
                </div>
                <div className='footertwo4 box'>
                    <h1>
                        OTHERS
                    </h1>
                    <li>
                        CAREERS
                    </li>
                    <li>
                        PRESS
                    </li>
                    <li>
                        LICENSES
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer