import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = () => {
  const invoke = useDispatch();
  const books = useSelector((state) => state.books.books);
  const handleRemoveBook = (book) => {
    invoke(removeBook(book));
  };
  const renderBooks = (k) => k.map((b) => (<Book book={b} key={b.id} event={handleRemoveBook} />));

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {renderBooks(books)}
      </tbody>
    </table>
  );
};

export default BooksList;
