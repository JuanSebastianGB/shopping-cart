import { useId } from 'react';
import { SelectCategories } from '..';
import { useProductsContext } from '../../context';
import './Filters.css';

function Filters() {
  const { filters, setFilters } = useProductsContext();
  const rangeId = useId();

  return (
    <div className="filters">
      <section className="filters__content">
        <div>
          <label htmlFor={rangeId}>Price From</label>
          <input
            min={0}
            max={1000}
            type="range"
            name=""
            id={rangeId}
            value={filters.minPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minPrice: Number(e.target.value),
              }))
            }
          />
          ${filters.minPrice}
        </div>
        <SelectCategories />
      </section>
    </div>
  );
}

export default Filters;
