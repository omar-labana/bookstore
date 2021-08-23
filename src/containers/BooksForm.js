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
    <>
      <h2 className="text-xl font-bold text-gray-400 mb-3">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="flex gap-6">
        <input type="text" id="title" placeholder="Title" onChange={(e) => handleChange(e)} className="w-1/2 p-3 rounded" />
        <select id="category" onChange={(e) => handleChange(e)} className="w-1/4 p-3 rounded">
          {renderCategories(categories)}
        </select>
        <input type="submit" value="Add Book" className="w-1/4 p-3 rounded bg-blue-500 text-white" />
      </form>
    </>
  );
};

export default BookForm;
