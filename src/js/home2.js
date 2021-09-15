import imgOne from '../images/snappy.svg';
import imgTwo from '../images/people.svg';
import imgThree from '../images/prices.svg';


function Home2() {
    return (
        <div className='home2 grid grid-two-row'>
            <div className='home2One'>

            </div>

            <div className='home2Two  grid grid-two-row'>
                <div className='containerOne'>

                </div>

                <div className='containerTwo grid grid-two-rows'>
                    <div className='boxOne flex flex-col flex-jc-e'>
                        <span>

                        </span>

                        <h1>
                            We're different
                        </h1>
                    </div>

                    <div className='boxTwo grid grid-three-col'>
                        <div className='boxes boxTwoOne flex flex-col'>
                            <img src={imgOne} alt='img one' />
                            <h1>
                                Snappy Process
                            </h1>
                            <p>
                                Our application process can be completed in minutes, not hours. Don’t get 
                                stuck filling in tedious forms.
                            </p>
                        </div>
                        <div className='boxes boxTwoTwo flex flex-col'>
                            <img src={imgThree} alt='img three' />
                            <h1>
                                Affordable Prices
                            </h1>
                            <p>
                                We don’t want you worrying about high monthly costs. Our prices may be low, 
                                but we still offer the best coverage possible.
                            </p>
                        </div>
                        <div className='boxes boxTwoThree flex flex-col'>
                            <img src={imgTwo} alt='img two' />
                            <h1>
                                People First
                            </h1>
                            <p>
                                Our plans aren’t full of conditions and clauses to prevent payouts. 
                                We make sure you’re covered when you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2