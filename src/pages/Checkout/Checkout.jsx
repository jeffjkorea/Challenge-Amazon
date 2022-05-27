import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from './../../components/CheckoutProduct/CheckoutProduct'
import Subtotal from '../../components/Subtotal/Subtotal'
import Header from "../../components/Header/Header"
import "./Checkout.css"


function Checkout() {
    const [{basket},dispatch] = useStateValue();

  return (
    <>
        <Header/>
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
                    {basket.map(item=> (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                    
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                <h2>Your subtotal will go here</h2>
            </div>
        </div>
    </>
  )
}

export default Checkout