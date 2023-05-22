import { IS_DEVELOPMENT } from '@/config';
import { useFilters } from '@/hooks';
import { useCartContext } from '@/pages';
import { CLEAN_CART } from '@/pages/ProductsPage/constants';
import React from 'react';
import './Footer.css';

export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const { filters } = useFilters();
  const { dispatch } = useCartContext();
  return (
    <div className="Footer">
      {IS_DEVELOPMENT && JSON.stringify(filters, null, 2)}
      <button onClick={() => dispatch({ type: CLEAN_CART })}>Clean</button>
    </div>
  );
};

export default Footer;
