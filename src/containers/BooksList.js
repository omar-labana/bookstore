import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, updateFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const invoke = useDispatch();
  const books = useSelector((state) => state.books.books);
  const handleRemoveBook = (book) => {
    invoke(removeBook(book));
  };
  const renderBooks = (k) => k.map((b) => (<Book book={b} key={b.id} event={handleRemoveBook} />));
  const target = useSelector((state) => state.filter);
  const show = books.filter((book) => book.category === target || target === 'All');
  const handleFilter = (e) => {
    const data = e.target.value;
    invoke(updateFilter(data));
  };

  return (
    <>
      <CategoryFilter target={target} handleFilter={handleFilter} />
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {renderBooks(show)}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
