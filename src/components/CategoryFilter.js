import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {
  const { target, handleFilter } = props;

  return (
    <select name="target" value={target} onChange={handleFilter}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  target: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
