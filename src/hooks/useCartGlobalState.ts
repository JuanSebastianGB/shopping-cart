import { cartContext } from '@/pages';
import { useContext } from 'react';

export const useCartGlobalState = () => {
  const context = useContext(cartContext);
  if (!context)
    throw new Error('useCartContext must be used within a CartProvider');
  return context;
};
