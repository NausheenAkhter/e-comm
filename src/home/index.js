import React from 'react';
import './home.css';
import Product from '../product';
function HOME() {
  return (
    <div>
      <div className='home'>
        <div className='home__container'>
          <img
            src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
            alt=''
            className='home__image'
          />
          <div className='home__row'>
            <Product
              id='27364'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={5}
              price={500}
            />
            <Product
              id='27364333873'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={4}
              price={500}
            />
          </div>
          <div className='home__row'>
            <Product
              id='27364342'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={3}
              price={500}
            />

            <Product
              id='273643'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={5}
              price={500}
            />

            <Product
              id='2736433'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={3}
              price={500}
            />
          </div>
          <div className='home__row'>
            <Product
              id='27364333'
              title='bag'
              itemImage='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
              ratings={1}
              price={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME;
