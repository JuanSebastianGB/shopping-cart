import { useCartGlobalState } from '@/hooks';
import React from 'react';
import './TotalQty.css';

export type TotalQtyProps = {};

const TotalQty: React.FC<TotalQtyProps> = () => {
  const { state: cart } = useCartGlobalState();
  const total = Math.round(
    cart.reduce((acc, { price, qty }) => acc + price * qty, 0)
  );
  return <div className="TotalQty">TotalQty: ${total}</div>;
};

export default TotalQty;
