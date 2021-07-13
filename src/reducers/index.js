import * as actionTypes from "../actionTypes";

const initialState = {
  products: [],
  orginalProducts: [],
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, payload] };
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: payload, orginalProducts: payload };
    case actionTypes.SEARCH_PRODUCTS: {
      const filterProducts = state.orginalProducts.filter(
        ({ name }) =>
          name && name.toLowerCase().includes(payload && payload.toLowerCase())
      );
      return { ...state, products: filterProducts };
    }

    case actionTypes.CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
};