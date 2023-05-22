import { getCategories } from '@/services';
import { useEffect, useState } from 'react';

export const useCategories = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => setCategories(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { categories, loading, error };
};
