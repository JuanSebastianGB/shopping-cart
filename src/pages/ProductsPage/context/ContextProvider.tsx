import { useCategories, useProducts } from '@/hooks';
import { FilterModel, ProductModel } from '@/models';
import { createContext, useContext, useState } from 'react';

export interface ProductsContextInterface {
  products: ProductModel[];
  categories: string[];
  filters: FilterModel;
  setFilters: React.Dispatch<React.SetStateAction<FilterModel>>;
}
const contextInitialState = {
  products: [],
  categories: [],
  filters: {
    category: 'all',
    minPrice: 0,
  },
  setFilters: () => {},
};
const ProductsContext =
  createContext<ProductsContextInterface>(contextInitialState);

interface Props {
  children: React.ReactNode;
}
export const ProductsProvider = ({ children }: Props) => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <ProductsContext.Provider
      value={{ products, categories, filters, setFilters }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error(
      'useProductsContext must be used within a ProductsProvider'
    );

  return context;
};
