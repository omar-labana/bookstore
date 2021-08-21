import React from 'react';
import { useSelector } from 'react-redux';
import initialState from '../reducers/initialState';
import Book from '../components/Book';

const init = () => initialState.books;
const renderBooks = (books) => books.map((book) => (<Book book={book} key={book.id} />));
const BooksList = () => {
  const books = useSelector(init);
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
