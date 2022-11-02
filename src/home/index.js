import React, { useEffect, useState } from 'react';
import './home.css';
import Product from '../product';
function HOME() {
  const [products, setProducts] = useState([]);
  const fetchItems = async () => {
    const resp = await fetch(
      'https://fakerapi.it/api/v1/products?_quantity=100&_taxes=12&_categories_type=uuid'
    );
    const dataJson = await resp.json();
    const { data = [] } = dataJson || {};
    setProducts(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            {products.map((product, index) => {
              return (
                <div key={index} className="home__product">
                  <Product
                    id={product.id}
                    title={product.name}
                    itemImage={product.image}
                    ratings={product.ratings}
                    price={product.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME;
