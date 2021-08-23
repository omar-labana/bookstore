import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <>
    <nav className="flex items-center justify-between container mx-auto px-20 py-3 border-b bg-white">
      <div className="flex items-center gap-10">
        <span className="text-3xl text-blue-500 font-bold">Bookstore CMS</span>
        <span className="text-base ">BOOKS</span>
        <span className="text-base text-gray-500">CATEGORIES</span>
      </div>
      <i className="fas fa-user text-blue-500 p-3 border rounded-full" />
    </nav>
    <div className="container mx-auto px-20 py-20">
      <BooksList />
      <hr className="my-4" />
      <BooksForm />
    </div>
  </>
);

export default App;
