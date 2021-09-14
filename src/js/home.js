

function Home() {
    return (
        <div className='home grid grid-two-col'>
            <div className='homeOne grid'>
                <div className='boxOne grid grid-jc-c grid-ai-e'>
                    <span>

                    </span>
                </div>

                <div className='boxTwo flex flex-col'>
                    <h1>
                        <span id='human'>
                            Humanizing 
                        </span>
                        <span>
                            your insurance.
                        </span>
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
                <div className='contentOne grid'>
                    {
                        /*
                        This is an empty div for the background images.
                        */
                    }
                </div>
            </div>
        </div>
    )
}

export default Home