import { FilterModel } from '@/models';
import { createContext, useContext, useState } from 'react';

export interface FilterContextInterface {
  filters: FilterModel;
  setFilters: React.Dispatch<React.SetStateAction<FilterModel>>;
}
const contextInitialState = {
  filters: {
    category: 'all',
    minPrice: 0,
  },
  setFilters: () => {},
};
const FilterContext =
  createContext<FilterContextInterface>(contextInitialState);

interface Props {
  children: React.ReactNode;
}
export const FilterProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error('useFilterContext must be used within a FilterProvider');

  return context;
};
