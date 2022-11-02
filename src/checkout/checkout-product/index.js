import React from 'react';
import useAppState from '../../hooks/use-app-state';
import './checkout-product.css';

function CheckoutProduct({
  id = '',
  title = '',
  price = '',
  ratings = 0,
  itemImage = ''
}) {
  const [state, dispatch] = useAppState();
  const removeItem = () => {
    console.log('action id', id);
    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    });
  };
  return (
    <div key={id} className="checkoutProduct">
      <img src={itemImage} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__ratings">{Array(ratings).fill('🌟')} </p>
        <button onClick={removeItem}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
