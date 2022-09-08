import React from 'react';
import './checkout-product.css';

function CheckoutProduct({
  title = '',
  price = '',
  ratings = 0,
  itemImage = ''
}) {
  return (
    <div className='checkoutProduct'>
      <img src={itemImage} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutProduct__ratings'>{Array(ratings).fill('🌟')} </p>
        <button>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
