import React from 'react';
import SubTotal from '../subtotal';
import CheckoutProduct from './checkout-product';
import './checkout.css';

function checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='' className='checkout__ad' />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          <CheckoutProduct
            id='27364'
            title='bag'
            itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
            ratings={5}
            price={500}
          />
          <CheckoutProduct
            id='27364'
            title='bag'
            itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
            ratings={5}
            price={500}
          />
        </div>
      </div>
      <div className='checkout__right'>
          <SubTotal />
      </div>
    </div>
  );
}

export default checkout;
