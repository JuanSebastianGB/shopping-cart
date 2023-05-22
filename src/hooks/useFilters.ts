import { ProductModel } from '@/models';
import { useProductsContext } from '@/pages';

export const useFilters = () => {
  const { products, filters, setFilters } = useProductsContext();

  const filterProducts = ({ products }: { products: ProductModel[] }) => {
    return products.filter(({ category, price }) => {
      return (
        (filters.category === 'all' || category === filters.category) &&
        filters.minPrice <= price
      );
    });
  };
  const filteredProducts = filterProducts({ products });
  return { filteredProducts, filters, setFilters };
};
