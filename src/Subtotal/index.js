import React from 'react';
import './Subtotal.css';
function SubTotal() {
  return (
    <div className='subtotal'>
      <div>
        <p>
          Subtotal (0 items): <strong>$0</strong>
        </p>
        <small className='subtotal__gift'>
          <input type={'checkbox'} />
          This Order contains a gift
        </small>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
