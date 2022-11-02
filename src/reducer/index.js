/**
 * all application level states and its related actions would sit here
 */

export const initialState = {
  basket: []
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        basket: [...state?.basket, action?.item]
      };
    case 'REMOVE_FROM_CART': {
      const updatedBasket = [...state.basket];
      updatedBasket.splice(
        state.basket?.findIndex((item) => item?.id === action?.id),
        1
      );
      return {
        ...state,
        basket: updatedBasket
      };
    }
    default:
      return state;
  }
};
