import React, { useState, useEffect } from 'react';
import useAppState from '../hooks/use-app-state';
import SubTotal from '../subtotal';
import CheckoutProduct from './checkout-product';
import './checkout.css';

function Checkout() {
  const [state] = useAppState();
  const { basket = [] } = state || {};
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = basket.reduce((agg, item) => agg + parseInt(item.price), 0);
    setTotalPrice(totalPrice);
  }, [basket]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              itemImage={item.itemImage}
              ratings={item.ratings}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal price={totalPrice} />
      </div>
    </div>
  );
}

export default Checkout;
