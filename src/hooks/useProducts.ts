import { productAdapter } from '@/adapters/product.adapter';
import { useEffect, useState } from 'react';
import { ProductModel } from '../models';
import { getProducts } from '../services';

export const useProducts = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductModel[]>([]);
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        const adaptedData = data.map((product: any) => productAdapter(product));
        setProducts(adaptedData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { products, loading, error };
};
