import { Filters } from '@/pages';
import { AddToCartIcon, Title } from '.';
import { TotalQty } from './TotalQty';

function Header() {
  return (
    <div>
      <TotalQty />
      <Title>
        Products
        <AddToCartIcon />
      </Title>
      <Filters />
    </div>
  );
}

export default Header;
