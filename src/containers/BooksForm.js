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
  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title: state.title,
      category: state.category,
    };

    invoke(createBook(book));

    setState({ title: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" placeholder="Title" onChange={(e) => handleChange(e)} />
      <label htmlFor="category">
        Category:
        <select id="category" onChange={(e) => handleChange(e)}>
          {renderCategories(categories)}
        </select>
      </label>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
