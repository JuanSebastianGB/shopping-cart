import { CartElementModel } from '@/models';
import { ADD_TO_CART, CLEAN_CART, DELETE_FROM_CART } from '.';

export const CART_ACTION_TYPES = {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAN_CART,
};
export const UPDATE_STATE_BY_ACTION_TYPE = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state: CartElementModel[], action: any) => {
    const indexProductFound = state.findIndex(
      (item) => item.id === action.payload.id
    );
    const updatedCart = structuredClone(state);
    if (indexProductFound !== -1) {
      updatedCart[indexProductFound].qty += 1;
      return updatedCart;
    }
    return [...state, { ...action.payload, qty: 1 }];
  },
  [CART_ACTION_TYPES.CLEAN_CART]: () => [],
  [CART_ACTION_TYPES.DELETE_FROM_CART]: (
    state: CartElementModel[],
    action: any
  ) => state.filter((item) => item.id !== action.payload.id),
};
