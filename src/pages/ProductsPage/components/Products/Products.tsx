import { useFilters } from '@/hooks';
import { Product } from '..';
import './Products.css';

function Products() {
  const { filteredProducts } = useFilters();

  return (
    <main className="products">
      <ul className="products__list">
        {filteredProducts?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
}

export default Products;
