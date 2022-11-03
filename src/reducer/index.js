/**
 * all application level states and its related actions would sit here
 */

export const initialState = {
  basket: [],
  authToken: ''
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case 'UPDATE_TOKEN':
      return {
        ...state,
        authToken: action?.token
      };
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
