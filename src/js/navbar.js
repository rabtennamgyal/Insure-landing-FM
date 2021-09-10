import logo from '../images/logo.svg'

function Navbar() {
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
        </nav>
    )
}

export default Navbar