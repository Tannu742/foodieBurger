import React from 'react';
import offer from '../../assets/img/offer.png';
import chickenBurger from '../../assets/img/chickenBurger.png';
import veggieBurger from '../../assets/img/veggieBurger.png';
import BBQBurger from '../../assets/img/BBQBurger.png';
import event from '../../assets/img/event.png';
import FoodieCard from '../../components/card';
import TryOffer from '../../components/TryOffer';
import reservation from '../../assets/img/reservation.png';
import reservationA from '../../assets/img/reservation (2).png';

const Home = () => {
    const Cards = [
        { id: 1, img: chickenBurger, text: 'Chicken Burger', para: 'Sink your teeth into the timeless perfection of our Chicken Burger,an experience that never goes out of style.', btn: 'Order now' },
        { id: 2, img: veggieBurger, text: 'Veggie Delight Burger', para: 'Embrace the vibrant flavors of our Veggie Delight Burger, acelebration of freshness and wholesome goodness.', btn: 'Order now' },
        { id: 3, img: BBQBurger, text: 'BBQ Bacon Burger', para: 'Indulge in a symphony of smoky, savory flavors with our BBQ BaconBurger, grilled and topped with crispy bacon.', btn: 'Order now' }
    ]
    const TryOut = [
        { id: 1, head: 'TRY IT OUT', para: 'MOST POPULAR BURGER' },
        { id: 2, head: 'TRY IT OUT', para: 'MORE FUN MORE TASTE' },
        { id: 3, head: 'TRY IT OUT', para: 'MORE FUN MORE TASTE' }
    ]
    return (
        <main>
            <section className='banner'>
                <div className='container'>
                    <div className='head-content row p-3'>
                        <div className='col-6 p-3 content-write text-center align-content-center'>
                            <h3>IT IS GOOD TIME FOR THE GREATE TASTE OF BURGER</h3>
                            <h2>BURGER WEEK</h2>
                        </div>
                        <div className='col-6 content-img'>
                            <img src={offer} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='SectionCard'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            {
                                TryOut.map((item) => { <TryOffer key={item.id} name={item.head} tryOffer={item.para} /> })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className='SectionTasty p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="tastyBurger text-center">
                            <span> ALWAYS TASTY BURGER </span>
                        </div>
                    </div>
                    <div className=" chooseTaste row justify-center text-center">
                        <h3> CHOOSE & ENJOY </h3>
                        <p>
                            Whether you crave classic flavors or daring combinations, this is where
                            your culinary journey begins. Indulge your cravings and savor every bite
                            as you create your personalized burger experience with Burger Company.
                        </p>
                    </div>
                    <div className='row justify-center'>
                        {
                            Cards.map((item) => <FoodieCard btn={item.btn} img={item.img} para={item.para} title={item.text} />)
                        }
                    </div>
                </div>
            </section>
            <section className='sectionEvent m-4 py-4 py-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='eventDetails col-7'>
                            <h3> DISCOVER </h3>
                            <h2> UPCOMING EVENTS </h2>
                            <p className='mx-4'>
                                From exclusive burger tastings and chef collaborations to community
                                outreach initiatives and seasonal celebrations, there's always
                                something special on the horizon at Burger Company. Be the first to
                                know about our upcoming events, promotions, and gatherings as we
                                continue to bring joy and flavor to our cherished customers. Join us
                                in creating memorable moments and delicious memories together!
                            </p>
                        </div>
                        <div className='col-4'>
                            <img width={500} src={event} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectionReservation text-center'>
                <div className='container'>
                        <div className='reservationPositonA'>
                            <img src={reservation} alt="" />
                        </div>
                        <h3> RESERVATION </h3>
                        <h2> BOOK YOUR TABLE </h2>
                        <div className='reservationPositonB'>
                            <img src={reservationA} alt="" />
                        </div>
                        <div className='row form mx-5 my-5 justify-center'>
                            <form>
                                <div className='input col-4'>
                                    <input type="text" placeholder='NAME'/>
                                    <input type="date" placeholder='DATE'/>
                                    <input type="number" placeholder='PEOPLE'/>
                                </div>
                                <div className='input col-4'>
                                    <input type="email" placeholder='EMAIL'/>
                                    <input type="time" placeholder='TIME'/>
                                    <button className='reservationBtn'> FIND TABLE </button>
                                </div>
                            </form>
                        </div>
                </div>
            </section>
        </main >
    );
}

export default Home;
