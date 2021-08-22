import initialState from './initialState';

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createBook':
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case 'removeBook':

      return {
        ...state,
        books: state.books.filter((books) => (books.id !== action.payload)),
      };

    default:
      return state;
  }
};

export default booksReducer;
