import React from 'react';
import useAppState from '../hooks/use-app-state';
import './subtotal.css';
function SubTotal({ price = 0 }) {
  const [state] = useAppState();
  const { basket = [] } = state || {};
  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({basket.length} items): <strong>${price}</strong>
        </p>
        <small className="subtotal__gift">
          <input type={'checkbox'} />
          This Order contains a gift
        </small>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
