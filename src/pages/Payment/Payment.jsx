import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Header from '../../components/Header/Header'
import { useStateValue } from '../../context/StateProvider'
import './Payment.css'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <>
        <Header/>
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>LOS ANGELES, CA</p>
                    </div>
                </div>
                {/* payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=> (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/* payment section - payment Method */}
                <div className="payment__section">
                    <div className="payment__titme">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic will go */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment