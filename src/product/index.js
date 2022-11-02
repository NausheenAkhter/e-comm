import React from 'react';
import useAppState from '../hooks/use-app-state';
import './product.css';

function Product({
  title = '',
  price = '',
  ratings = 0,
  itemImage = '',
  id = ''
}) {
  const [state, dispatch] = useAppState();
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        price,
        ratings,
        itemImage
      }
    });
  };
  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__ratings">{Array(ratings).fill('🌟')} </p>
      </div>
      <img src={itemImage} alt="" className="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
