import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
           <div className="payment__container">
                 <h1>
                    Checkout {<Link to="/checkout">  {basket?.length} items  </Link>} 
                 </h1>

               {/*pAYMENT SECTION - delivery address*/}
               <div className="payment__section">
                  <div className="payment__title">
                      <h3>Delivery Address</h3>
                  </div>
                  <div className="payment__Address">
            <p>{user?.email}</p>
            <p>123 Javascript fullstack Lane</p>
            <p>Lagos , Nigeria</p>
                  </div>
               </div>
                {/*pAYMENT SECTION - review item*/}
                <div className="payment__section">
                <div className="payment__title">
                   <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                   {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
         ))}
                      
                   </div>

                   </div>


                    {/*pAYMENT SECTION - payment method*/}
                    <div className="payment__section">
                  <div className="payment__title">
                      <h3>Payment Method</h3>
                  </div>
                  <div className="payment__details">
                     {/*Stripe payment magic*/} 
                  </div>
               </div>
               </div> 
        </div>
    )
}

export default Payment
