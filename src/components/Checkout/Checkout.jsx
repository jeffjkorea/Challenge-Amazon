import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" 
                alt=""  
            />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>

                {/* Basket Item */}
                {/* Basket Item */}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
            <h2>Your subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout