import { useId } from 'react';
import { useProductsContext } from '../../context';
import './SelectCategories.css';
function SelectCategories() {
  const selectCategoryId = useId();
  const { categories, setFilters } = useProductsContext();
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, category: value }));
  };
  return (
    <>
      <label htmlFor={selectCategoryId}>Categories</label>
      <select
        id={selectCategoryId}
        onChange={handleChange}
        className="select__list"
      >
        <option className="select__option" value="all">
          All
        </option>
        {categories?.map((selection) => (
          <option key={selection} className="select__option" value={selection}>
            {selection}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCategories;
