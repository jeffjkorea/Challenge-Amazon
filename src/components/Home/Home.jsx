import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
            />

            <div className="home__row">
                <Product
                    id="44444444"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Audible Logo Audible Audiobook – Unabridged"
                    price={29.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                    rating={3}
                />
                <Product
                    id="49538094"
                    title="KenWood kMix Stand Mixer for Backing, Stylish Kitchen Mixer"
                    price={239.0}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/71EKanXVpDL._AC_UY218_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id="90829332"
                    title="samsung curved LED gaming Moniter - Super Ultra Wide Dual"
                    price={1094.98}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/81dUzXzVIPS._AC_UY218_.jpg"}
                />
                <Product
                    id="11111111"
                    title="Leather Wallets for Women RFID Blocking Slim Small Designer Card Holder Wallet"
                    price={9.49}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71CrtqcQaoL._AC_UY218_.jpg"
                />
                <Product
                    id="22222222"
                    title="Golf Practice Net, 10x7ft Golf Hitting Training Aids Nets with Target and Carry Bag for Backyard Driving Chipping - 1 Golf Mat -5 Golf Balls - 1 Golf Tees- Men Kids Indoor Outdoor Sports Game"
                    image="https://m.media-amazon.com/images/I/417uQxouhoL._AC_UF226,226_FMjpg_.jpg"
                    rating={3}
                    price={76.49}
                />
            </div>
            <div className="home__row">
                <Product
                    id="33333333"
                    title="Baby Playpen,Kids Large Playard with 50PCS Pit Balls,Indoor & Outdoor Kids Activity Center,Infant Safety Gates with Breathable Mesh,Sturdy Play Yard for Toddler,Children's Fences Packable & Portable"
                    image="https://m.media-amazon.com/images/I/51qVSjaF4qL._AC_UF226,226_FMjpg_.jpg"
                    price={22.22}
                    rating={4}
                />
            </div>
            </div>

    </div>
  )
}

export default Home