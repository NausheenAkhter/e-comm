import React from 'react';
import './product.css';

function Product({ title = '', price = '', ratings = 0, itemImage = '' }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='product__ratings'>{Array(ratings).fill('🌟')} </p>
      </div>
      <img src={itemImage} alt='' className='' />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
