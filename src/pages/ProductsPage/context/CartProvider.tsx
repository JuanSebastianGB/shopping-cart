import { CartElementModel } from '@/models';
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducers';

export interface CartContextInterface {
  state: CartElementModel[];
  dispatch: React.Dispatch<any>;
}
const cartInitialState = {
  state: [],
  dispatch: () => {},
};
export const cartContext =
  createContext<CartContextInterface>(cartInitialState);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context)
    throw new Error('useCartContext must be used within a CartProvider');
  return context;
};
