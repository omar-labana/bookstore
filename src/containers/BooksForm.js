import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const renderCategories = (categories) => categories.map((category) => (
  <option value={category} key={category}>{category}</option>
));

const BookForm = () => {
  const [state, setState] = useState({ title: '', category: 'Action' });
  const invoke = useDispatch();
  const updateTitle = (e) => {
    const title = e.target.value;
    setState((prevState) => ({ ...prevState, title }));
  };

  const updateCategory = (e) => {
    const category = e.target.value;
    setState((prevState) => ({ ...prevState, category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title: state.title,
      category: state.category,
    };

    invoke(createBook(book));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" placeholder="Title" onChange={updateTitle} />
      <label htmlFor="categories">
        Category:
        <select id="categories" onChange={updateCategory}>
          {renderCategories(categories)}
        </select>
      </label>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
