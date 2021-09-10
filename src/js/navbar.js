import React, { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';



function Navbar() {
    const [Open, setOpen] = useState(true)
    const [Close, setClose] = useState(false)

    function openMenu() {
        if (Close === false) {
            setClose(true)
            setOpen(false)
        } else {
            setClose(false)
            setOpen(true)
        }
    }

    return (
        <nav className='navbar grid grid-two-col'>
            <div className='navOne grid grid-jc-s grid-ai-c'>
                <img src={logo} alt='logo' />
            </div>

            <div className='navTwo flex flex-jc-c flex-ai-c'>
                <li>
                    HOW WE WORK
                </li>
                <li>
                    BLOG
                </li>
                <li>
                    ACCOUNT
                </li>
                <li>
                    VIEW PLANS
                </li>
            </div>

            <div className='navThree flex flex-jc-fe flex-ai-c'>
                {Open && <img src={hamburger} alt='hamburger' onClick={openMenu}/>}
                {Close && <img src={close} alt='close' onClick={openMenu} />}
            </div>

            {Close && 
                <div className='mobileMenu flex flex-col flex-ai-c'>
                    <li>
                        HOW WE WORK
                    </li>
                    <li>
                        BLOG
                    </li>
                    <li>
                        ACCOUNT
                    </li>
                    <li>
                        VIEW PLANS
                    </li>
                </div>
            }
        </nav>
    )
}

export default Navbar