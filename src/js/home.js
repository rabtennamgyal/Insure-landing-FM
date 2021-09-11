import img from '../images/intro-desk-right.svg';

function Home() {
    return (
        <div className='home grid grid-two-col'>
            <div className='homeOne grid grid-one-col grid-two-row'>
                <div className='boxOne grid grid-jc-c grid-ai-c'>
                    <span>

                    </span>
                </div>

                <div className='boxTwo flex flex-col'>
                    <h1>
                        Humanizing your insurance.
                    </h1>
                    <p>
                        Get your life insurance coverage easier and faster. 
                        We blend our expertise and technology to help you find 
                        the plan that’s right for you. Ensure you and your 
                        loved ones are protected.
                    </p>
                    <button>
                        VIEW PLANS
                    </button>
                </div>
            </div>

            <div className='homeTwo'>
                <div className='contentOne'>
                    <div className='imgBox'>
                        <img src={img} alt='pattern' />
                    </div>
                </div>

                <div className='contentTwo'>

                </div>
            </div>
        </div>
    )
}

export default Home