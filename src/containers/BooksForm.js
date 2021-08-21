import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const renderCategories = (categories) => {
  categories.map((category) => (
    <option value={category} key={category}>{category}</option>
  ));
};

const BookForm = () => (
  <div>
    <input type="text" id="title" placeholder="Title" />
    <label htmlFor="categories">
      Category:
      <select id="categories">
        {renderCategories(categories)}
      </select>
      <button type="submit">Add Book</button>
    </label>
  </div>
);

export default BookForm;
